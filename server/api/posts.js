const router = require('express').Router()
const {Post, Tag} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      include: Tag,
    })
    if (posts) {
      res.status(200).json(posts)
    } else {
      res.status(404).send('Cannot find posts')
    }
  } catch (err) {
    next(err)
  }
})

router.get('/:postId', async (req, res, next) => {
  try {
    const post = await Post.findByPk(req.params.postId, {
      include: Tag,
    })
    if (post) {
      res.status(200).json(post)
    } else {
      res.status(404).send('Post Not Found')
    }
  } catch (err) {
    next(err)
  }
})
