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

  handleChange = e => {
    const {
      target: { value: term }
    } = e;
    this.setState({ term });
    if (term !== "") {
      this.setState({ isLoading: true });
      this.searchByTerm(term);
    }
    if (term === "") {
      this.setState({ isLoading: false, searchMovie: null, searchTV: null });
    }
  };
  handleSubmit = e => {
    e.preventDefault();
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
    const { searchMovie, searchTV, term, isLoading, error } = this.state;
    return (
      <SearchPresenter
        searchMovie={searchMovie}
        searchTV={searchTV}
        term={term}
        isLoading={isLoading}
        error={error}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}
export default SearchContainer;
