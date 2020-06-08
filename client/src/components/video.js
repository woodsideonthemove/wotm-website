import React from 'react'
import YouTube from 'react-youtube'

export class Video extends React.Component {
  render() {
    const opts = {
      height: '500',
      width: '100%',

      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        loop: 1,
      },
    }

    return <YouTube videoId="ZkigyJQ9uNs" opts={opts} onReady={this._onReady} />
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }
}
