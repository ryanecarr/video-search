import React, { Component } from 'react';
import SearchBar from './Components/SearchBar.js';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';
import './App.css';
import youtube from './API/YouTube';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
      loading: false,
    };
  }

  onSearchSubmit = async (term) => {
    this.setState({ loading: true });
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      loading: false, 
    });
  };

  onVideoClick = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };

  render() {
    return (
      <div className='ui grid container main'>
        <div className='seven wide column centered'>
          <SearchBar
            loading={this.state.loading}
            onSearchSubmit={this.onSearchSubmit}
          />
        </div>
        <div className='ten wide column'>
          {this.state.selectedVideo != null ? (
            <VideoDetail video={this.state.selectedVideo} />
          ) : (
            <h1>YouTube Video Search</h1>
          )}
        </div>
        <div className='six wide column'>
          <VideoList
            videos={this.state.videos}
            onVideoClick={this.onVideoClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
