import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../redux'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import {EmailSubscribe} from './EmailSignup'
import {withStyles} from '@material-ui/styles'
import PropTypes from 'prop-types'
import PostsCard from './PostsCard'

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

class Posts extends React.Component {
  componentDidMount() {
    this.props.fetchingPosts()
  }
  render() {
    const {classes} = this.props
    return this.props.posts.length ? (
      <Box className={classes.root}>
        <Typography className={classes.header}>News</Typography>
        <Box className={classes.columns}>
          <div>
            {this.props.posts.map((post) => {
              return <PostsCard key={post.id} post={post} />
            })}
          </div>
          {/* <div>
            <EmailSubscribe />
          </div> */}
        </Box>
      </Box>
    ) : (
      <Box>Loading</Box>
    )
  }
}

Posts.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  posts: state.posts,
})

const mapDispatchToProps = {
  fetchingPosts: fetchPosts,
}

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Posts)
)
