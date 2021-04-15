import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HomePresenter = () => {
  return null;
};

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  upcoming: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;
