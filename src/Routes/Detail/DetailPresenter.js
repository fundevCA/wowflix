import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";

const BASE_URL = "https://image.tmdb.org/t/p/original/";
const Container = styled.div`
  width: 100vw;
  height: 90vh;
`;
const BackPoster = styled.div`
  position: absolute;
  display: block;
  width: 90vw;
  height: 90vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => props.back});
  opacity: 0.4;
`;
const Grid = styled.div``;
const Poster = styled.div`
  width: 20rem;
  height: 27rem;
  background-image: url(${props => props.poster});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Description = styled.div`
  color: white;
`;
const Genre = styled.div``;

const DetailPresenter = ({ detail, isLoading, error, isMovie }) =>
  isLoading ? (
    <Loader />
  ) : (
    <>
      <BackPoster back={BASE_URL + detail.backdrop_path} />
      <Container>
        <Grid>
          <Poster poster={BASE_URL + detail.poster_path}></Poster>
          <Description>Hi</Description>
        </Grid>

        {error && error.length > 0 && <Message text={error} color="#bbbbbb" />}
      </Container>
    </>
  );

DetailPresenter.propTypes = {
  detail: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  isMovie: PropTypes.bool.isRequired
};

export default DetailPresenter;
