import axios from 'axios'

//CAN PROBABLY DELETE

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

const initialState = []

export const followersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FOLLOWER:
      return action.data
    default:
      return state
  }
}
