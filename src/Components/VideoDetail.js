import React from 'react';

const VideoDetail = ({ video }) => {
  return (
    <div>
      <iframe
        title='video player'
        id='ytplayer'
        type='text/html'
        src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`}
        frameBorder='0'
        width='100%'
        height='480px'
      ></iframe>
      <div className='ui items'>
        <div className='item'>
          <div className='content'>
            <span className='header'>{video.snippet.title}</span>
            <div className='meta'>
              <span>{video.snippet.description}</span>
            </div>
            <div className='description'>
              <p></p>
            </div>
            <div className='extra'>{video.snippet.channelTitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
