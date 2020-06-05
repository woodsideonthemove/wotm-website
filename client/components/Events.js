import React from 'react'
import EventCard from './EventCard'
import {fetchEvents} from '../redux/events'
import {connect} from 'react-redux'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import SignUp from './SignUp'
import {withStyles} from '@material-ui/styles'
import PropTypes from 'prop-types'

const styles = () => ({
  columns: {
    display: 'flex',
    flexDirection: 'row',
  },
  root: {
    paddingLeft: 100,
    paddingTop: 50,
    width: 1000,
  },
  header: {
    fontSize: 32,
    paddingBottom: 15,
  },
})
class Events extends React.Component {
  componentDidMount() {
    this.props.getEvents()
  }
  render() {
    const {classes} = this.props

    return this.props.events.length ? (
      <Box className={classes.root}>
        <Typography className={classes.header}>Events</Typography>
        <Box className={classes.columns}>
          <div>
            {this.props.events.map((event) => {
              return <EventCard key={event.id} event={event} />
            })}
          </div>
          <div>
            <SignUp />
          </div>
        </Box>
      </Box>
    ) : (
      <Box>Loading</Box>
    )
  }
}

Events.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  events: state.events,
})

const mapDispatchToProps = {
  getEvents: fetchEvents,
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Events)
)
