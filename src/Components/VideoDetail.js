import React from 'react';

const VideoDetail = ({ id }) => {
  return (
    <div>
      <iframe
        title='player'
        id='ytplayer'
        type='text/html'
        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
        frameBorder='0'
        width='100%'
        height='480px'
      ></iframe>
    </div>
  );
};

export default VideoDetail;
