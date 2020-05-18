import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'

import {
  Home,
  AllPosts,
  Events,
  About,
  Programs,
  Gallery,
  SinglePost,
  SingleEvent,
} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={AllPosts} />
        <Route exact path="/events" component={Events} />
        <Route path="/about" component={About} />
        <Route path="/programs" component={Programs} />
        <Route path="/gallery" component={Gallery} />

        <Route
          path="/posts/:postId"
          component={(props) => <SinglePost {...props} />}
        />
        <Route
          path="/events/:eventId"
          component={(props) => <SingleEvent {...props} />}
        /> */}
      </Switch>
    )
  }
}

export default Routes
