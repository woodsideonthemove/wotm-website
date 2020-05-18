const Sequelize = require('sequelize')
const db = require('../db')

const Post = db.define('post', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  body: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: [],
  },
  datePosted: {
    type: Sequelize.DATEONLY,
    defaultValue: Sequelize.NOW,
  },
  imgUrls: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: [
      'https://decadeoffire.com/wp/wp-content/uploads/2019/02/WOTM_logo2.jpg',
    ],
  },
})

module.exports = Post
