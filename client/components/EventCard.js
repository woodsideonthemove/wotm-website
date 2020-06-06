import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import {red} from '@material-ui/core/colors'
import EventIcon from '@material-ui/icons/Event'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ApartmentIcon from '@material-ui/icons/Apartment'
import SchoolIcon from '@material-ui/icons/School'
import ForumIcon from '@material-ui/icons/Forum'
import GroupIcon from '@material-ui/icons/Group'
import {convertDate} from '../../utils'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 300,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

export default function EventCard(props) {
  const icon = (tag) => {
    if (tag === 'housing') {
      return <ApartmentIcon />
    } else if (tag === 'education') {
      return <SchoolIcon />
    } else if (tag === 'action') {
      return <ForumIcon />
    } else {
      return <GroupIcon />
    }
  }

  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="event" className={classes.avatar}>
            {icon(props.event.tags[0].tag)}
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={props.event.name}
        subheader={convertDate(props.event.date)}
      />
      <CardMedia
        className={classes.media}
        image={props.event.imgUrls[0]}
        title={props.event.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.event.streetAddress}
          <br />
          {props.event.secondaryAddress}
          <br />
          {props.event.city} {props.event.state} {props.event.zipCode}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to calendar">
          <EventIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <div dangerouslySetInnerHTML={{__html: props.event.description}} />
        </CardContent>
      </Collapse>
    </Card>
  )
}
