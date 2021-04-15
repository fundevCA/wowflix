import React, { Component } from "react";
import TVPresenter from "./TVPresenter";
import { tvAPI } from "../../Components/API";

class TVContainer extends Component {
  state = {
    airingToday: null,
    popular: null,
    topRated: null,
    isLoading: true,
    error: ""
  };

  async componentDidMount() {
    try {
      const {
        data: { results: airingToday }
      } = await tvAPI.airingToday();
      const {
        data: { results: popular }
      } = await tvAPI.popular();
      const {
        data: { results: topRated }
      } = await tvAPI.topRated();

      this.setState({ airingToday, popular, topRated });
    } catch {
      this.setState({ error: "Couldn't get the tv data" });
    } finally {
      this.setState({ isLoading: false });
    }
  }

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

export default TVContainer;
