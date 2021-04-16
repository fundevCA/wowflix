import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";

const Container = styled.div``;
const Title = styled.span``;

const HomePresenter = ({
  nowPlaying,
  popular,
  topRated,
  upcoming,
  isLoading,
  error
}) =>
  isLoading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section
          title="Now Playing"
          children={nowPlaying.map(movie => (
            <Title key={movie.id}>{movie.title}</Title>
          ))}
        />
      )}
      {popular && popular.length > 0 && (
        <Section
          title="Popular"
          children={popular.map(movie => (
            <Title key={movie.id}>{movie.title}</Title>
          ))}
        />
      )}
      {topRated && topRated.length > 0 && (
        <Section
          title="Top Rated"
          children={topRated.map(movie => (
            <Title key={movie.id}>{movie.title}</Title>
          ))}
        />
      )}
      {upcoming && upcoming.length > 0 && (
        <Section
          title="Upcoming"
          children={upcoming.map(movie => (
            <Title key={movie.id}>{movie.title}</Title>
          ))}
        />
      )}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  upcoming: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;
