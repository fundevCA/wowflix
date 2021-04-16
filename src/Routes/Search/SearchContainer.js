import React, { Component } from "react";
import SearchPresenter from "./SearchPresenter";
import { movieAPI, tvAPI } from "../../Components/API";

class SearchContainer extends Component {
  state = {
    searchMovie: null,
    searchTV: null,
    term: "",
    isLoading: false,
    error: ""
  };
  handleSubmit = keyword => {
    const { term } = this.state;
    this.setState({ term: keyword });
    if (term !== "") {
      this.setState({ isLoading: true });
      this.searchByTerm(term);
    }
  };
  searchByTerm = async word => {
    try {
      const {
        data: { results: searchMovie }
      } = await movieAPI.search(word);
      const {
        data: { results: searchTV }
      } = await tvAPI.search(word);

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
