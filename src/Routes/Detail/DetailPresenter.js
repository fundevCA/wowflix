import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DetailPresenter = () => {
  return null;
};

DetailPresenter.propTypes = {
  detail: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  isMovie: PropTypes.bool.isRequired
};

export default DetailPresenter;
