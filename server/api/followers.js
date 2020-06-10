const router = require('express').Router()
const {Follower} = require('../db/models')
const {isAdmin} = require('../../utils')
module.exports = router

router.get('/', isAdmin, async (req, res, next) => {
  try {
    const followers = await Follower.findAll()
    if (followers) {
      res.json(followers)
    } else {
      res.send(404)
    }
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    if (req.body) {
      const result = await Follower.findOrCreate({
        where: {email: req.body.email},
        defaults: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          phone: req.body.phone,
          streetAddress: req.body.streetAddress,
          secondaryAddress: req.body.secondaryAddress,
          city: req.body.city,
          state: req.body.state,
          zipCode: req.body.zipCode,
          housingAdvocacy: req.body.housingAdvocacy,
          housingPrograms: req.body.housingPrograms,
          educationPrograms: req.body.educationPrograms,
          educationAdvocacy: req.body.educationAdvocacy,
          events: req.body.events,
          community: req.body.community,
        },
      })

      const follower = result[0],
        wasCreated = result[1]

      if (!wasCreated) {
        await follower.update(req.body, {omitNull: true})
      } else if (follower) {
        res.status(201).json(follower)
      } else {
        res.send('Could not add')
      }
    } else {
      res.status(404).send('Could not add follower')
    }
  } catch (error) {
    next(error)
  }
})
