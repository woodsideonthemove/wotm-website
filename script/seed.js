'use strict'

const fs = require('fs')
const db = require('../server/db')
const path = require('path')
const {Event, Follower, Post, Tag, User} = require('../server/db/models')

const postsSeed = require('./postsSeed.js')
const eventSeed = require('./eventSeed.js')
const userSeed = require('./userSeed.js')

const tags = [
  {tag: 'education'},
  {tag: 'housing'},
  {tag: 'community'},
  {tag: 'action'},
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const posts = await Post.bulkCreate(postsSeed)
  const events = await Event.bulkCreate(eventSeed)
  const users = await User.bulkCreate(userSeed)

  console.log(`seeded ${posts.length} posts`)
  console.log(`seeded ${events.length} events`)
  console.log(`seeded ${users.length} users`)

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
