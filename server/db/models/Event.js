const Sequelize = require('sequelize')
const db = require('../db')

const Event = db.define('event', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  partners: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: [],
  },
  date: {
    type: Sequelize.DATE,
  },
  contactPhone: {
    type: Sequelize.STRING,
  },
  contactEmail: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
    },
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
  imgUrls: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: [
      'https://decadeoffire.com/wp/wp-content/uploads/2019/02/WOTM_logo2.jpg',
    ],
  },
  eventLink: {
    type: Sequelize.TEXT,
  },
})

module.exports = Event
