import axios from 'axios'

const CREATE_FOLLOWER = 'CREATE_FOLLOWER'

const newFollower = (follower) => ({
  type: CREATE_FOLLOWER,
  follower,
})

export const createFollower = (follower) => async (dispatch) => {
  try {
    let followerToAdd = await axios.post('/api/followers', follower)
    if (followerToAdd) {
      dispatch(newFollower(followerToAdd.data))
    }
  } catch (err) {
    console.log(err)
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
