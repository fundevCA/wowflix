import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";

const Container = styled.div``;

const TVPresenter = ({ airingToday, popular, topRated, isLoading, error }) => {
  return (
    <Container>
      {airingToday && airingToday.length && (
        <Section title="Airing Today">
          {airingToday.map(movie => movie.name)}
        </Section>
      )}
      {popular && popular.length && (
        <Section title="Popular">{popular.map(movie => movie.name)}</Section>
      )}
      {topRated && topRated.length && (
        <Section title="Top Rated">{topRated.map(movie => movie.name)}</Section>
      )}
    </Container>
  );
};

TVPresenter.propTypes = {
  airingToday: PropTypes.array,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default TVPresenter;
