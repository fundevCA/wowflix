import React, { PureComponent } from "react";
import HomePresenter from "./HomePresenter";
import { movieAPI } from "../../Components/API";

class HomeContainer extends PureComponent {
  state = {
    nowPlaying: null,
    popular: null,
    topRated: null,
    upcoming: null,
    isLoading: true,
    error: ""
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying }
      } = await movieAPI.nowPlaying();
      const {
        data: { results: popular }
      } = await movieAPI.popular();
      const {
        data: { results: topRated }
      } = await movieAPI.topRated();
      const {
        data: { results: upcoming }
      } = await movieAPI.upcoming();

      this.setState({ nowPlaying, popular, topRated, upcoming });
    } catch {
      this.setState({ error: "Couldn't get the movie data" });
    } finally {
      this.setState({ isLoading: false });
    }
  }

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
