import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import noPoster from "../Assets/no_poster.png";

const Container = styled.div`
  justify-items: end;
  width: 100%;
`;
const Image = styled.img`
  width: 20rem;
  height: 30rem;
  object-fit: contain;
  border-radius: 0.3rem;
  :hover {
    opacity: 0.3;
  }
`;
const Title = styled.span`
  width: inherit;
  display: block;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
`;
const Date = styled.div`
  color: grey;
  font-size: 0.8rem;
`;
const BASE_URL = "https://image.tmdb.org/t/p/w300/";

const Poster = ({ id, title, poster, date }) => (
  <Link to={`/movie/${id}`}>
    <Container>
      <Image src={poster ? BASE_URL + poster : noPoster}></Image>
      <Title>{title}</Title>
      <Date> {date ? date.substring(0, 4) : null}</Date>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
  date: PropTypes.string
};

export default Poster;
