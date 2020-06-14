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
import PostsSingleStory from './PostsSingleStory'
import CardActionArea from '@material-ui/core/CardActionArea'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    marginTop: 20,
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'strong',
  },
  media: {
    height: '100%',
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

export default function PostsCard(props) {
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

  const post = props.post
  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        avatar={
          <Avatar aria-label="post" className={classes.avatar}>
            {icon(post.tags[0].tag)}
          </Avatar>
        }
        title={post.title}
        subheader={convertDate(post.datePosted, 'post')}
      />
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={post.imgUrls[0]}
          title={post.title}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            dangerouslySetInnerHTML={{__html: post.shortBody}}
          />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <PostsSingleStory post={post} />
      </CardActions>
    </Card>
  )
}
