import React, { Component } from "react";
import SearchPresenter from "./SearchPresenter";
import { movieAPI, tvAPI } from "../../Components/API";

class SearchContainer extends Component {
  state = {
    searchMovie: null,
    searchTV: null,
    term: "",
    isLoading: false,
    error: false
  };
  handleSubmit = () => {
    const term = this.state;
    if (term !== "") {
      this.setState({ isLoading: true });
      this.searchByTerm();
    }
  };
  searchByTerm = async () => {
    try {
      const term = this.state;
      const searchMovie = await movieAPI.search(term);
      const searchTV = await tvAPI.search(term);

      this.setState({ searchMovie, searchTV });
    } catch {
      this.setState({ error: "Problem when search by Keyword" });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { searchMovie, searchTV, isLoading, error } = this.state;
    return (
      <SearchPresenter
        searchMovie={searchMovie}
        searchTV={searchTV}
        isLoading={isLoading}
        error={error}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
export default SearchContainer;
