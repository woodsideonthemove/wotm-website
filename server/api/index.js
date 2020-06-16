const router = require('express').Router()
module.exports = router

router.use('/posts', require('./posts'))
router.use('/events', require('./events'))
router.use('/followers', require('./followers'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
