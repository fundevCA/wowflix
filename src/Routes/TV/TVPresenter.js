import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TVPresenter = () => {
  return null;
};

TVPresenter.propTypes = {
  airingToday: PropTypes.array,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default TVPresenter;
