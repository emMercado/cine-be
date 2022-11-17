/* import * as dotenv from "dotenv";
dotenv.config(); */
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import User from "../models/User.js";

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  //secretOrKey: process.env.JWT_SECRET,
  secretOrKey: "asflkoasjdlkasdasdjhasfasfasghhgas",
};

passport.use(
  new Strategy(jwtOptions, async (payload, next) => {
    const account = await User.findOne({ username: payload.username });
    if (account) {
      next(null, account);
    } else {
      next(null, false);
    }
  })
);
