import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

export const verifyToken = (req, res, next) => {
  console.log('Cookies:', req.cookies); // Log cookies for debugging
  const token = req.cookies.access_token;
  console.log('Token:', token); // Debug log

  if (!token) {
    console.log('No token in cookies:', req.cookies); 
    return next(errorHandler(401, 'Unauthorized'));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, 'Forbidden'));

    req.user = user;
    next();
  });
};