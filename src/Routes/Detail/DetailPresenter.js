import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";

const BASE_URL = "https://image.tmdb.org/t/p/original/";
const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 90vh;
  background-color: grey;
`;
const BackPoster = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.back});
  background-position: center center;

  background-size: cover;
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
      <Container>
        <BackPoster back={BASE_URL + detail.backdrop_path} />
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
