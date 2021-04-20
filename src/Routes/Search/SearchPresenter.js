import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

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
      <Input
        placeholder="Search Movie / TV Show"
        onChange={handleChange}
        value={term}
      />
    </Form>
    {isLoading ? (
      <Loader />
    ) : (
      <>
        {searchMovie && searchMovie.length > 0 && (
          <Section title={`MOVIES`}>
            {searchMovie.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                poster={movie.poster_path}
                date={movie.release_date}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {searchTV && searchTV.length > 0 && (
          <Section title={`TV`}>
            {searchTV.map(tv => (
              <Poster
                key={tv.id}
                id={tv.id}
                title={tv.original_name}
                poster={tv.poster_path}
                date={tv.first_air_date}
              ></Poster>
            ))}
          </Section>
        )}
        {error && error.length > 0 && <Message text={error} color="#bbbbbb" />}
        {searchMovie &&
          searchTV &&
          searchMovie.length === 0 &&
          searchTV.length === 0 && (
            <Message text={`Nothing found for ${term}`} color="#bbbbbb" />
          )}
      </>
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
