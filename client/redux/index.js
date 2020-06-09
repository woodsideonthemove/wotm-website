import {combineReducers} from 'redux'
import {postsReducer} from './posts'
import {eventsReducer} from './events'
import {followersReducer} from './followers'

const appReducer = combineReducers({
  posts: postsReducer,
  events: eventsReducer,
})

export default appReducer

export * from './posts'
export * from './events'
