const jwt = require('jsonwebtoken');
const config = require('../config/config');

const generateToken = (id, email) => {
  return jwt.sign({ id, email }, config.jwtSecret, {
    expiresIn: '30d',
  });
};

module.exports = generateToken;
