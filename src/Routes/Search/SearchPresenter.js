import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";

const Container = styled.div`
  padding: 2rem 3rem;
`;
const Form = styled.form``;
const Input = styled.input`
  all: unset;
  color: white;
  width: 100%;
  padding-left: 2rem;
  font-size: 3rem;
  margin-bottom: 2rem;
  :focus {
    outline: none;
  }
`;
const Title = styled.span``;

const SearchPresenter = ({
  searchMovie,
  searchTV,
  term,
  isLoading,
  error,
  handleSubmit,
  handleChange
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input placeholder="Search Movie / TV Show" onChange={handleChange} />
    </Form>
    {searchMovie && searchMovie.length > 0 && (
      <Section title={`MOVIES`}>
        {searchMovie.map(movie => (
          <Title key={movie.id}>{movie.title}</Title>
        ))}
      </Section>
    )}
    {searchTV && searchTV.length > 0 && (
      <Section title={`TV`}>
        {searchTV.map(tv => (
          <Title key={tv.id}>{tv.name}</Title>
        ))}
      </Section>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  searchMovie: PropTypes.array,
  searchTV: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SearchPresenter;
