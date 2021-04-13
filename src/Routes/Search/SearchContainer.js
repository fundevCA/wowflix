import React, { Component } from "react";
import SearchPresenter from "Routes/Search/SearchPresenter";

class SearchContainer extends Component {
  state = {
    searchMovie: null,
    searchTV: null,
    isLoading: true,
    error: false
  };

  render() {
    const { searchMovie, searchTV, isLoading, error } = this.state;
    return <SearchPresenter searchMovie={searchMovie} searchTV={searchTV} />;
  }
}
