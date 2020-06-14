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
  shortBody: {
    type: Sequelize.TEXT,
    set: function (value) {
      const body = value.split(' ')
      const words = body.slice(0, 40)
      let lastWord = words[words.length - 1]
      if (lastWord[lastWord.length - 1] === '.')
        words[words.length - 1] = words[words.length - 1].slice(
          0,
          words[words.length - 1].length - 1
        )
      words
        ? this.setDataValue('shortBody', words.join(' ') + '...')
        : this.setDataValue('shortBody', body.join(' '))
    },
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

Post.prototype.truncate = () => {
  const body = this.body[0].split(' ')
  const words = body.slice(0, 20)
  if (words) {
    this.body = words.join(' ') + '...'
  } else {
    this.body = body.join(' ')
  }
}
