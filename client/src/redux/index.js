import {combineReducers} from 'redux'
import {postsReducer} from './posts'
import {eventsReducer} from './events'

const appReducer = combineReducers({
  posts: postsReducer,
  events: eventsReducer,
})

export default appReducer

export * from './posts'
export * from './events'
