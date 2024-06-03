import passportJwt from 'passport-jwt';
import { User } from "./models/Users.js";

const JwtStrategy =  passportJwt.Strategy;
const ExtractJwt =  passportJwt.ExtractJwt;
 

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};
 
module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      const existingUser = await User.findOne({ where: { email } });
      const user = existingUser.find(u => u.username === jwt_payload.username);
 
      if (user) {
        return done(null, user);
      }
 
      return done(null, false);
    })
  );
};