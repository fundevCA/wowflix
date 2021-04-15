import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";

const Container = styled.div``;

const HomePresenter = ({
  nowPlaying,
  popular,
  topRated,
  upcoming,
  isLoading,
  error
}) => {
  return (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section
          title="Now Playing"
          children={nowPlaying.map(movie => movie.title)}
        />
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular" children={popular.map(movie => movie.title)} />
      )}
      {topRated && topRated.length > 0 && (
        <Section
          title="Top Rated"
          children={topRated.map(movie => movie.title)}
        />
      )}
      {upcoming && upcoming.length > 0 && (
        <Section
          title="Upcoming"
          children={upcoming.map(movie => movie.title)}
        />
      )}
    </Container>
  );
};

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  upcoming: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;
