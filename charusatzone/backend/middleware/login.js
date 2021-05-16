const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const signUp = require('../models/signupmodel');

module.exports = (req, res, next) => {
  console.log(req.headers);
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: 'YOU MUST LOG IN' });
  }
  const token = authorization.replace('Bearer ', '');
  console.log(token);
  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: 'YOU MUST LOG IN' });
    }
    const { _id } = payload;
    signUp.findById(_id).then((userdata) => {
      req.user = userdata;
      next();
    });
  });
};
