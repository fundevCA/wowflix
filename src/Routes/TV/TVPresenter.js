import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div``;
const Title = styled.span``;

const TVPresenter = ({ airingToday, popular, topRated, isLoading, error }) =>
  isLoading ? (
    <Helmet>
      <title>TV | WOWFLIX</title>
      <Loader />
    </Helmet>
  ) : (
    <Container>
      {popular && popular.length && (
        <Section title="Popular">
          {popular.map(tv => (
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
      {airingToday && airingToday.length && (
        <Section title="Airing Today">
          {airingToday.map(tv => (
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
      {topRated && topRated.length && (
        <Section title="Top Rated">
          {topRated.map(tv => (
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
