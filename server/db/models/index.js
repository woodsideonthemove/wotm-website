const db = require('../db')
const Post = require('./Post')
const Event = require('./Event')
const Follower = require('./Follower')
const Tag = require('./Tag')
const User = require('./User')

Tag.belongsToMany(Post, {through: 'postTags'})
Post.belongsToMany(Tag, {through: 'postTags'})

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
