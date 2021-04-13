import React, { Component } from "react";
import SearchPresenter from "./SearchPresenter";

class SearchContainer extends Component {
  state = {
    searchMovie: null,
    searchTV: null,
    searchTerm: "",
    isLoading: false,
    error: null
  };

  render() {
    const { searchMovie, searchTV, searchTerm, isLoading, error } = this.state;
    return (
      <SearchPresenter
        searchMovie={searchMovie}
        searchTV={searchTV}
        searchTerm={searchTerm}
        isLoading={isLoading}
        error={error}
      />
    );
  }
}
