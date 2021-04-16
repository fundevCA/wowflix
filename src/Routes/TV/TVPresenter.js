import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";

const Container = styled.div``;
const Title = styled.span``;

const TVPresenter = ({ airingToday, popular, topRated, isLoading, error }) =>
  isLoading ? (
    <Loader />
  ) : (
    <Container>
      {airingToday && airingToday.length && (
        <Section title="Airing Today">
          {airingToday.map(tv => (
            <Title key={tv.id}>{tv.name}</Title>
          ))}
        </Section>
      )}
      {popular && popular.length && (
        <Section title="Popular">
          {popular.map(tv => (
            <Title key={tv.id}>{tv.name}</Title>
          ))}
        </Section>
      )}
      {topRated && topRated.length && (
        <Section title="Top Rated">
          {topRated.map(tv => (
            <Title key={tv.id}>{tv.name}</Title>
          ))}
        </Section>
      )}
    </Container>
  );

TVPresenter.propTypes = {
  airingToday: PropTypes.array,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default TVPresenter;
