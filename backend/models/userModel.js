const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true, // Ensures that the name is not empty
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      msg: 'Email address is already in use!', // Custom error message for uniqueness
    },
    validate: {
      isEmail: {
        msg: 'Please provide a valid email address!', // Ensures valid email format
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [8, 100], // Ensures the password has a minimum length of 8
        msg: 'Password must be at least 8 characters long!',
      },
    },
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

module.exports = User;
