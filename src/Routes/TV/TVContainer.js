import React, { Component } from "react";
import TVPresenter from "./TVPresenter";

class TVContainer extends Component {
  state = {
    airingToday: null,
    popular: null,
    topRated: null,
    isLoading: true,
    error: false
  };
  render() {
    const { airingToday, popular, topRated, isLoading, error } = this.state;
    return (
      <TVPresenter
        airingToday={airingToday}
        popular={popular}
        topRated={topRated}
        isLoading={isLoading}
        error={error}
      />
    );
  }
}
