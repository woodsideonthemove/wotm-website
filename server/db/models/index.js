const db = require('../db')
const Post = require('./Post')
const Event = require('./Event')
const Follower = require('./Follower')
const Tag = require('./Tag')
const User = require('./User')

Tag.belongsToMany(Post, {
  through: 'postTags',
  as: 'tags',
  foreignKey: 'postId',
})
Post.belongsToMany(Tag, {through: 'postTags', as: 'posts', foreignKey: 'tagId'})

Tag.belongsToMany(Event, {through: 'eventTags'})
Event.belongsToMany(Tag, {through: 'eventTags'})

module.exports = {
  Post,
  Event,
  Follower,
  Tag,
  User,
  db,
}
