import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import { Helmet } from "react-helmet";

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
    <Helmet>
      <title>MOVIE | WOWFLIX</title>
      <Loader />
    </Helmet>
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section
          title="Now Playing"
          children={nowPlaying.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              date={movie.release_date}
              isMovie={true}
            ></Poster>
          ))}
        />
      )}
      {popular && popular.length > 0 && (
        <Section
          title="Popular"
          children={popular.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              date={movie.release_date}
              isMovie={true}
            ></Poster>
          ))}
        />
      )}
      {topRated && topRated.length > 0 && (
        <Section
          title="Top Rated"
          children={topRated.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              date={movie.release_date}
              isMovie={true}
            ></Poster>
          ))}
        />
      )}
      {upcoming && upcoming.length > 0 && (
        <Section
          title="Upcoming"
          children={upcoming.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              date={movie.release_date}
              isMovie={true}
            ></Poster>
          ))}
        />
      )}
      {error && error.length > 0 && <Message text={error} color="#bbbbbb" />}
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
