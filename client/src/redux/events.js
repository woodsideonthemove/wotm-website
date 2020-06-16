const axios = require('axios')

const SET_EVENTS = 'SET_EVENTS'
const SET_EVENT = 'SET_EVENT'

export const setEvents = (events) => ({
  type: SET_EVENTS,
  data: events,
})

export const setEvent = (event) => ({
  type: SET_EVENT,
  data: event,
})

const events = []

export const eventsReducer = (state = events, action) => {
  switch (action.type) {
    case SET_EVENTS:
      return action.data
    case SET_EVENT:
      return action.data
    default:
      return state
  }
}

export function fetchEvents() {
  return async function (dispatch) {
    try {
      let allEvents = await axios.get('/api/events')
      if (allEvents) {
        dispatch(setEvents(allEvents.data))
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export function fetchEvent(id) {
  return async function (dispatch) {
    try {
      let event = await axios.get(`/api/events/${id}`)
      if (event) {
        dispatch(setEvent(event.data))
      } else {
        console.log(`Post not found!`)
      }
    } catch (err) {
      console.log(err)
    }
  }
}
