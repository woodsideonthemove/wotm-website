const router = require('express').Router()
const {Event, Tag} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const events = await Event.findAll({
      include: Tag,
      order: [['date', 'DESC']],
    })
    if (events) {
      res.status(200).json(events)
    } else {
      res.status(404).send('Cannot find posts')
    }
  } catch (err) {
    next(err)
  }
})

router.get('/:eventId', async (req, res, next) => {
  try {
    const events = await Event.findByPk(req.params.eventId, {
      include: Tag,
    })
    if (events) {
      res.status(200).json(events)
    } else {
      res.status(404).send('Post Not Found')
    }
  } catch (err) {
    next(err)
  }
})
