import { Box } from '@material-ui/core';
import React from 'react';
import roll from '../assets/img/rick/roll.mp4';

class Video extends React.Component {
  componentDidMount = () => {
    this.playVideo();
  };

  playVideo = () => {
    this.refs.vidRef.play();
  };

  render = () => {
    return (
      <Box>
        <video
          ref="vidRef"
          src={roll}
          type="video/mp4"
        />
      </Box>
    );
  };
}

export default Video;