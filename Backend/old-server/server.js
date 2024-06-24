import express from "express";
import session from "express-session";
import passport from "passport";
import bodyParser from "body-parser";
import { ExtractJwt, Strategy } from "passport-jwt";
import bcrypt from "bcrypt";
import env from "dotenv";
import cors from "cors";
import path from "path";
import jwt from 'jsonwebtoken';

import sequelize from './models/sequelize.js';
import { User } from "./models/Users.js";


const app = express();
const port = 3001;
const saltRounds = 10;
const __dirname = path.dirname(new URL(import.meta.url).pathname);

import initializePassport from "./controllers/passport-config.js"
initializePassport(passport)

env.config();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


// Sync Sequelize models with the database
sequelize.sync({ logging: false })
  .then(() => {
    console.log("All models were synchronized successfully.");
  })
  .catch((err) => {
    console.error("Unable to synchronize models:", err);
  });

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "secret",
};


// Login 
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ where: { email } });

    if (!existingUser) {
      res.status(404).json({ message: 'User not found!!' });
    }

    const passwordMatch = await bcrypt.compare(password, existingUser.password_hash);

    if (!passwordMatch) {
      res.status(400).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign( { email: email },
      'process.env.JWT_SECRET',
      {
        expiresIn: "1h",
      }
    );

    const response = {
      token,
      ...existingUser.dataValues
    }
    res.status(200).json({ message: "Login successful", response });

  } catch (error) {
    console.log(error.message);
  }
});

// Register
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).send("Email already exists. Try logging in.");
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await User.create({ username, email, password_hash: hashedPassword });
    req.login(user, (err) => {
      if (err) {
        console.log("Error while logging in after registration: ", err);
        return res.status(500).send("Internal Server Error");
      }
      return res.status(200).send("Successful registration.");
    });
  } catch (err) {
    console.log("Error registering user:", err);
    return res.status(500).send("Internal Server Error");
  }
});

// Logout
app.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) { return next(err); }
    res.status(200).json({ message: "Logout successful." });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
