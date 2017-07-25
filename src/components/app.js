import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const APIKEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.SearchVideos('ReactJs');
  }

  SearchVideos(term) {
    YTSearch({ key: APIKEY, term }, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.SearchVideos(term);
    }, 300);


    return (
      <div>
        <SearchBar onChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
      </div>
    );
  }
}

export default App;
