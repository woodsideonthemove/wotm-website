'use strict'

const db = require('../server/db')
const {Event, Post, Tag, User, Follower} = require('../server/db/models')

const postsSeed = require('./postsSeed.js')
const eventSeed = require('./eventSeed.js')
const userSeed = require('./userSeed.js')

const tagSeed = [
  {tag: 'education'},
  {tag: 'housing'},
  {tag: 'community'},
  {tag: 'action'},
  {tag: 'COVID-19'},
  {tag: 'immigration'},
  {tag: 'free'},
]

const followerSeed = [
  {
    firstName: 'Stacey',
    lastName: 'Eliuk',
    email: 'stacey.eliuk@gmail.com',
    phone: '718-683-4023',
    streetAddress: '51-23 Queens Blvd.',
    city: 'Woodside',
    state: 'NY',
    zipCode: '11377',
    interests: ['housing', 'education'],
  },
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const posts = await Post.bulkCreate(postsSeed)
  const events = await Event.bulkCreate(eventSeed)
  const users = await User.bulkCreate(userSeed)
  const tags = await Tag.bulkCreate(tagSeed)
  const followers = await Follower.bulkCreate(followerSeed)

  const ed = await Tag.findOne({where: {id: 1}})
  const housing = await Tag.findOne({where: {id: 2}})
  const community = await Tag.findOne({where: {id: 3}})
  const action = await Tag.findOne({where: {id: 4}})
  const covid = await Tag.findOne({where: {id: 5}})
  const imm = await Tag.findOne({where: {id: 6}})
  const free = await Tag.findOne({where: {id: 7}})

  const postsAssoc = async () => {
    const post1 = await Post.findOne({where: {id: 1}})
    const post2 = await Post.findOne({where: {id: 2}})
    const post3 = await Post.findOne({where: {id: 3}})
    const post4 = await Post.findOne({where: {id: 4}})
    const post5 = await Post.findOne({where: {id: 5}})
    const post6 = await Post.findOne({where: {id: 6}})
    const post7 = await Post.findOne({where: {id: 7}})
    const post8 = await Post.findOne({where: {id: 8}})
    const post9 = await Post.findOne({where: {id: 9}})

    await post1.setTags(community, covid)
    await post2.setTags(action, ed, covid)
    await post3.setTags(free, covid, community)
    await post4.setTags(free, imm, community)
    await post5.setTags(free, imm, community)
    await post6.setTags(community)
    await post7.setTags(ed)
    await post8.setTags(housing)
    await post9.setTags(housing)
  }

  const eventsAssoc = async () => {
    const event1 = await Event.findOne({where: {id: 1}})
    const event2 = await Event.findOne({where: {id: 2}})
    const event3 = await Event.findOne({where: {id: 3}})
    const event4 = await Event.findOne({where: {id: 4}})
    const event5 = await Event.findOne({where: {id: 5}})
    const event6 = await Event.findOne({where: {id: 6}})
    const event7 = await Event.findOne({where: {id: 7}})

    await event1.setTags(ed, covid)
    await event2.setTags(covid, free, community)
    await event3.setTags(covid, free, community)
    await event4.setTags(covid, free, community)
    await event5.setTags(covid, free, community)
    await event6.setTags(covid, free, community)
    await event7.setTags(covid, free, community)
  }

  await postsAssoc()
  await eventsAssoc()

  console.log(`seeded ${posts.length} posts`)
  console.log(`seeded ${events.length} events`)
  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${tags.length} tags`)
  console.log(`seeded ${followers.length} followers`)

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
