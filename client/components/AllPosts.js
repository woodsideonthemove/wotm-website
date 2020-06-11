import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../redux'

class AllPosts extends React.Component {
  componentDidMount() {
    this.props.fetchingPosts()
  }
  render() {
    console.log(this.props)
    return <div>Here</div>
  }
}

const mapStateToProps = (state) => ({
  state: state.posts,
})

const mapDispatchToProps = {
  fetchingPosts: fetchPosts,
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts)
