const Sequelize = require('sequelize')
const db = require('../db')

const Follower = db.define('follower', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  phone: {
    type: Sequelize.STRING,
  },
  streetAddress: {
    type: Sequelize.STRING,
  },
  secondaryAddress: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
  },
  state: {
    type: Sequelize.STRING,
  },
  zipCode: {
    type: Sequelize.STRING,
  },
  interests: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: [],
  },
})

module.exports = Follower
