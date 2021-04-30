import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Card = styled.div`
  height: 5rem;
  width: 5rem;
  background-image: url(${props => props.poster});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 2rem;
`;

const Collection = ({ id, poster }) => <Card poster={poster} />;

Collection.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string
};

export default Collection;
