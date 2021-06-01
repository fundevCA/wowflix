import React, { PureComponent } from "react";
import SearchPresenter from "./SearchPresenter";
import { movieAPI, tvAPI } from "../../Components/API";

class SearchContainer extends PureComponent {
  state = {
    searchMovie: null,
    searchTV: null,
    term: "",
    isLoading: false,
    error: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const { term } = this.state;
    if (term !== "") {
      this.searchByTerm();
    }
  };
  handleChange = e => {
    const {
      target: { value: term }
    } = e;

    this.setState({ term });
  };
  searchByTerm = async () => {
    const { term } = this.state;
    this.setState({
      isLoading: true
    });
    try {
      const {
        data: { results: searchMovie }
      } = await movieAPI.search(term);
      const {
        data: { results: searchTV }
      } = await tvAPI.search(term);

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
