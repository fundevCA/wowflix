import React, { Component } from "react";
import HomePresenter from "./HomePresenter";

class HomeContainer extends Component {
  state = {
    nowPlaying: null,
    popular: null,
    topRated: null,
    upcoming: null,
    isLoading: true,
    error: null
  };

  render() {
    const {
      nowPlaying,
      popular,
      topRated,
      upcoming,
      isLoading,
      error
    } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        popular={popular}
        topRated={topRated}
        upcoming={upcoming}
        isLoading={isLoading}
        error={error}
      />
    );
  }
}

export default HomeContainer;
