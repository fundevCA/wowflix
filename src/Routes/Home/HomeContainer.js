import React, { Component } from "react";
import HomePresenter from "components/HomePresenter";

class HomeContainer extends Component {
  state = {
    nowPlaying: null,
    popular: null,
    topRated: null,
    upcoming: null,
    isLoading: true
  };

  render() {
    const { nowPlaying, popular, topRated, upcoming, isLoading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        popular={popular}
        topRated={topRated}
        upcoming={upcoming}
        isLoading={isLoading}
      />
    );
  }
}

export default HomeContainer;
