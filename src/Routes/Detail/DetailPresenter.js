import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";

const BASE_URL = "https://image.tmdb.org/t/p/original/";
const Container = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 4.5rem);
  background-color: grey;
  padding: 3rem;
`;
const BackPoster = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.back});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.4;
  z-index: 0;
`;
const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Poster = styled.div`
  width: 30%;
  min-width: 20rem;
  height: 100%;
  background-image: url(${props => props.poster});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 1;
  border-radius: 0.4rem;
  flex-wrap: wrap;
`;
const Description = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
  padding-left: 4rem;
  font-size: 1.5rem;
  flex-wrap: wrap;
  > span {
    margin-bottom: 1.5rem;
  }
`;

const Title = styled.span`
  font-size: 3rem;
`;
const Year = styled.span``;
const Genre = styled.span`
  font-size: 1rem;
`;
const Runtime = styled.span``;
const Vote = styled.span``;
const Overview = styled.span`
  width: 100%;
  font-size: 1rem;
`;

const DetailPresenter = ({ detail, isLoading, error, isMovie }) =>
  isLoading ? (
    <Loader />
  ) : (
    <>
      <Container>
        <BackPoster back={BASE_URL + detail.backdrop_path} />
        <Content>
          <Poster poster={BASE_URL + detail.poster_path}></Poster>
          <Description>
            <Title>
              {detail.original_title}
              <Year> ({detail.release_date.slice(0, 4)})</Year>
            </Title>
            <Genre>
              {detail.genres.map((genre, index) =>
                index > 0 ? ` ∙ ` + genre.name : genre.name
              )}
              &nbsp;&nbsp;&nbsp;
              <Runtime>
                {detail.runtime >= 60
                  ? `${Math.floor(detail.runtime / 60)}h ${Math.floor(
                      detail.runtime % 60
                    )}m`
                  : `${detail.runtime % 60}m`}
              </Runtime>
            </Genre>

            <Vote>⭐️{detail.vote_average} / 10</Vote>
            <Overview>{detail.overview}</Overview>
          </Description>
        </Content>

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
