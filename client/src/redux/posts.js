const axios = require('axios')

const SET_POSTS = 'SET_POSTS'
const SET_POST = 'SET_POST'

export const setPosts = (posts) => ({
  type: SET_POSTS,
  data: posts,
})

export const setPost = (post) => ({
  type: SET_POST,
  data: post,
})

const posts = []

export const postsReducer = (state = posts, action) => {
  switch (action.type) {
    case SET_POSTS:
      return action.data
    case SET_POST:
      return action.data
    default:
      return state
  }
}

export function fetchPosts() {
  return async function (dispatch) {
    try {
      let allPosts = await axios.get('/api/posts')
      if (allPosts) {
        dispatch(setPosts(allPosts.data))
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export function fetchPost(id) {
  return async function (dispatch) {
    try {
      let post = await axios.get(`/api/posts/${id}`)
      if (post) {
        dispatch(setPost(post.data))
      } else {
        console.log(`Post not found!`)
      }
    } catch (err) {
      console.log(err)
    }
  }
}
