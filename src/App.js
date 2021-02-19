import React, { Component } from 'react';
import youtube from './API/YouTube';
import SearchBar from './Components/SearchBar.js';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';
import SuggestedTags from './Components/SuggestedTags';
import seedData from './seedData';
import './App.css';

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
      selectedVideo: null,
      loading: false,
    });
  };

  onVideoClick = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };

  componentDidMount() {
    this.onSearchSubmit(
      seedData[Math.floor(Math.random() * seedData.length + 1)]
    );
  }

  render() {
    return (
      <div className='ui grid container main'>
        <div className='seven wide column centered'>
          <SearchBar
            loading={this.state.loading}
            onSearchSubmit={this.onSearchSubmit}
          />
        </div>
        <div className='sixteen wide column'>
          <SuggestedTags tags={seedData} />
        </div>
        <div className='eleven wide column'>
          {this.state.selectedVideo != null ? (
            <VideoDetail video={this.state.selectedVideo} />
          ) : (
            <i className='huge youtube icon'></i>
          )}
        </div>
        <div className='five wide column'>
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
