import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";

const Container = styled.div`
  padding: 2rem 3rem;
`;
const Form = styled.form``;
const Input = styled.input`
  color: white;
  border: none;
  background: inherit;
  width: 100%;
  padding-left: 2rem;
  font-size: 3rem;
  margin-bottom: 2rem;
  :focus {
    outline: none;
  }
`;
const Status = styled.h4``;

const SearchPresenter = ({
  searchMovie,
  searchTV,
  term,
  isLoading,
  error,
  handleSubmit
}) => {
  const [keyword, setKeyword] = useState("");

  const onChange = e => {
    setKeyword(e.target.value);
    handleSubmit(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder="Type your keyword"
          onChange={onChange}
          value={keyword}
        />
      </Form>
      {keyword && searchMovie && searchMovie.length > 0 && (
        <Section title={`MOVIES`}>
          {searchMovie.map(movie => movie.title)}
        </Section>
      )}
      {keyword && searchTV && searchTV.length > 0 && (
        <Section title={`TV`}>{searchTV.map(tv => tv.name)}</Section>
      )}
    </Container>
  );
};

SearchPresenter.propTypes = {
  searchMovie: PropTypes.array,
  searchTV: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired
};

export default SearchPresenter;
