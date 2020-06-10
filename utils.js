/* eslint-disable complexity */
// /* eslint-disable complexity */
const moment = require('moment')

const getMonth = (month) => {
  if (month === '01') {
    return 'January'
  } else if (month === '02') {
    return 'February'
  } else if (month === '03') {
    return 'March'
  } else if (month === '04') {
    return 'April'
  } else if (month === '05') {
    return 'May'
  } else if (month === '06') {
    return 'June'
  } else if (month === '07') {
    return 'July'
  } else if (month === '08') {
    return 'August'
  } else if (month === '09') {
    return 'September'
  } else if (month === '10') {
    return 'October'
  } else if (month === '11') {
    return 'November'
  } else {
    return 'December'
  }
}

const convertDate = (datetime) => {
  var utcDate = moment.utc(datetime).format()
  var local = moment.utc(utcDate).local().format()

  const month = getMonth(local.slice(5, 7))
  const date = local.slice(8, 10)
  const year = local.slice(0, 4)
  let meridian = 'AM'

  let hours = parseInt(local.slice(11, 13), 10)
  if (hours > 12) {
    hours -= 12
    meridian = 'PM'
  }

  const minutes = local.slice(14, 16)

  return `${month} ${date}, ${year} at ${hours}:${minutes} ${meridian}`
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const isAdmin = (req, res, next) => {
  try {
    if (req.user) {
      if (req.user.isAdmin) {
        next()
      } else {
        res.status(401).send('Must be an admin!')
      }
    } else {
      res.status(401).send('Must login to access!')
    }
  } catch (error) {
    next(error)
  }
}

const isUser = (req, res, next) => {
  try {
    if (req.user) {
      next()
    } else {
      res.status(401).send('Must login to access!')
    }
  } catch (error) {
    next(error)
  }
}

module.exports = {isAdmin, isUser, convertDate, validateEmail}
