import React, { Component } from 'react';
import youtube from './API/YouTube';
import SearchBar from './Components/SearchBar.js';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';
import SuggestedTags from './Components/SuggestedTags';
import Error from './Components/Error';
import seedData from './seedData';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
      loading: false,
      error: null,
    };
  }

  onSearchSubmit = async (term) => {
    this.setState({ loading: true });
    return await youtube
      .get('/search', {
        params: {
          q: term,
        },
      })
      .then((response) => {
        this.setState({
          videos: response.data.items,
          selectedVideo: response.data.items[0],
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: `${error}`,
        });
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
        {this.state.error != null ? (
          <div className='sixteen wide column'>
            <Error error={this.state.error} />
          </div>
        ) : (
          <>
            <div className='seven wide column centered'>
              <SearchBar
                loading={this.state.loading}
                onSearchSubmit={this.onSearchSubmit}
              />
            </div>
            <div className='sixteen wide column'>
              <SuggestedTags tags={seedData} onTagClick={this.onSearchSubmit} />
            </div>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                videos={this.state.videos}
                onVideoClick={this.onVideoClick}
              />
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;
