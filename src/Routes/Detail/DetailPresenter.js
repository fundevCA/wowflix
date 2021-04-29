import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import noPoster from "../../Assets/no_poster.png";
import noBack from "../../Assets/no_background.jpeg";

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
  /* justify-content: center; */
  box-sizing: border-box;
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
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;

  padding-left: 4rem;
  font-size: 1.5rem;
  z-index: 1;
  justify-content: space-between;
`;
const TextContainer = styled.div`
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  > span {
    margin-bottom: 1.5rem;
  }
`;
const Title = styled.h3`
  font-size: 3rem;
`;
const ItemContainer = styled.div`
  font-size: 1rem;
  margin: 1rem 0;
`;
const Item = styled.span``;
const Divider = styled.span``;

const Genre = styled.span`
  font-size: 1rem;
`;
const Runtime = styled.span``;
const Vote = styled.span``;
const Tagline = styled.span`
  font-style: italic;
  font-size: 1.2rem;
  margin: 1rem 0;
  /* color: grey; */
`;
const Overview = styled.p`
  width: 70%;
  font-size: 1rem;
  line-height: 1.2;
`;
const VideoContainer = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
  overflow-y: scroll;
`;
const Video = styled.iframe`
  margin-right: 1rem;
  height: 100%;
  width: 100%;
`;

const DetailPresenter = ({ detail, isLoading, error, isMovie }) =>
  isLoading ? (
    <Loader />
  ) : (
    <>
      <Container>
        <BackPoster
          back={
            detail.backdrop_path
              ? `https://image.tmdb.org/t/p/original/${detail.backdrop_path}`
              : noBack
          }
        />
        <Content>
          <Poster
            poster={
              detail.poster_path
                ? `https://image.tmdb.org/t/p/original/${detail.poster_path}`
                : noPoster
            }
          />
          <Description>
            <TextContainer>
              <Title>{isMovie ? detail.original_title : detail.name}</Title>
              <ItemContainer>
                <Item>
                  {" "}
                  {isMovie
                    ? detail.release_date.substring(0, 4)
                    : detail.first_air_date.substring(0, 4)}
                </Item>
                <Divider> ∙ </Divider>
                <Item>
                  {detail.genres.map((genre, index) =>
                    index > 0 ? ` ∙ ` + genre.name : genre.name
                  )}
                  &nbsp;&nbsp;&nbsp;
                </Item>
                <Divider> ∙ </Divider>
                <Item>
                  {detail.runtime ? detail.runtime : detail.episode_run_time[0]}
                  m
                </Item>
                <Divider> ∙ </Divider>
                <Item>
                  <span aria-label="star">⭐️</span> {detail.vote_average} / 10
                </Item>
              </ItemContainer>

              <Tagline>{detail.tagline}</Tagline>
              <Overview>{detail.overview}</Overview>
            </TextContainer>

            {detail.videos ? (
              <VideoContainer>
                {detail.videos.results.map(video => (
                  <Video
                    id={video.id}
                    src={`https://www.youtube.com/embed/${video.key}`}
                  />
                ))}
              </VideoContainer>
            ) : (
              ""
            )}
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
