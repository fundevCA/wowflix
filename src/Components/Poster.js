import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  justify-items: end;
  width: 10rem;
  height: 18rem;
`;
const Title = styled.span`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
`;
const Image = styled.img`
  width: inherit;
  height: 16rem;
  object-fit: contain;
`;
const Date = styled.div`
  color: grey;
`;
const BASE_URL = "https://image.tmdb.org/t/p/original/";

const Poster = ({ id, title, poster, date }) => (
  <Container>
    <Image src={BASE_URL + poster}></Image>
    <Title>{title.length < 20 ? title : title.substring(0, 20)}</Title>
    <Date> ({date.substring(0, 4)})</Date>
  </Container>
);

Poster.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  date: PropTypes.string,
  isMovie: PropTypes.bool
};

export default Poster;
