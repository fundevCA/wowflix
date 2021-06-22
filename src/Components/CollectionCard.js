import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import noPoster from "../Assets/no_poster.png";

const Card = styled.div`
  height: 5rem;
  width: 5rem;
  background-image: url(${props => (props.poster ? props.poster : noPoster)});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 2rem;
`;

const Collection = ({ id, poster }) => (
  <Link to={`/collection/${id}`}>
    <Card poster={poster} />
  </Link>
);

Collection.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string
};

export default Collection;
