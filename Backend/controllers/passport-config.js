import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { User } from "../models/Users.js";
import dotenv from 'dotenv';

dotenv.config();

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

export default function initialize(passport) {
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      try {
        const user = await User.findOne({ where: { email: jwt_payload.email } });

        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (error) {
        return done(error, false);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findByPk(id);
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  });
}


function invert(array) {
  let res = [];
  array.forEach((number) => {
    if (Math.sign(number) === -1) {
      res.push(Math.abs(number))
    }
    else {
      res.push(Math.abs(-number))       
    }
  })
   return res;
}