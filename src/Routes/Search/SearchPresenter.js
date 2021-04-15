import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HomePresenter = () => {
  return null;
};

HomePresenter.propTypes = {
  searchMovie: PropTypes.array,
  searchTV: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired
};

export default HomePresenter;
