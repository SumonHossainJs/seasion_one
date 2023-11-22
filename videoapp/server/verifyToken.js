import jwt from "jsonwebtoken";

import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return next(createError(404, " You are not authenticated"));

  jwt.verify(token, process.env.jwt, (err, user) => {
    if (err) return next(createError(404, "the Token is not valid"));

    req.user = user;
    next();
  });
};
