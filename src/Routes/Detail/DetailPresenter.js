import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import noPoster from "../../Assets/no_poster.png";
import noBack from "../../Assets/no_background.jpeg";
import Helmet from "react-helmet";
import IMDBIMG from "../../Assets/IMDB.png";
import CollectionCard from "../../Components/CollectionCard";
import BackPoster from "../../Components/BackPoster";

const BASE_URL = "https://image.tmdb.org/t/p/original/";
const Container = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 4.5rem);
  padding: 3rem;
`;
const Background = styled(BackPoster)``;

const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
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
  overflow: scroll;
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
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
`;
const Item = styled.span``;
const Divider = styled.span`
  margin: 0 0.4rem;
  &:before {
    content: "∙";
  }
`;

const Genre = styled.span`
  font-size: 1rem;
`;
const Runtime = styled.span``;
const Vote = styled.span``;
const IMDB = styled.div`
  display: inline-block;
  padding: 0;
  margin: 0;
  width: 2rem;
  height: 1rem;
  background-image: url(${IMDBIMG});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  &:hover {
    cursor: pointer;
  }
`;
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
const Card = styled(CollectionCard)`
  height: 100rem;
  width: 30rem;
`;

const DetailPresenter = ({ detail, isLoading, error, isMovie }) =>
  isLoading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>
          {detail.original_title ? detail.original_title : detail.name} |
          WOWFLIX
        </title>
      </Helmet>
      <Container>
        <Background
          back={
            detail.backdrop_path ? `${BASE_URL}${detail.backdrop_path}` : noBack
          }
        />
        <Content>
          <Poster
            poster={
              detail.poster_path ? `${BASE_URL}${detail.poster_path}` : noPoster
            }
          />
          <Description>
            <TextContainer>
              <Title>{isMovie ? detail.original_title : detail.name}</Title>
              {detail.status === "Planned" || detail.status === "Rumored" ? (
                ""
              ) : (
                <ItemContainer>
                  <Item>
                    {" "}
                    {isMovie
                      ? detail.release_date.substring(0, 4)
                      : detail.first_air_date.substring(0, 4)}
                  </Item>
                  <Divider />
                  <Item>
                    <Genre>
                      {detail.genres.map((genre, index) =>
                        index > 0 ? ` ∙ ` + genre.name : genre.name
                      )}
                      &nbsp;
                    </Genre>
                  </Item>

                  <Item>
                    <Runtime>
                      {detail.runtime ? (
                        <>
                          <Divider /> {detail.runtime}m
                        </>
                      ) : (
                        <>
                          <Divider />
                          {detail.episode_run_time[0]}m
                        </>
                      )}
                    </Runtime>
                  </Item>

                  <Item>
                    <Vote>
                      {detail.vote_average ? (
                        <>
                          <Divider />
                          <span aria-label="star">⭐️ </span>
                          <span>{detail.vote_average} / 10</span>
                        </>
                      ) : (
                        ""
                      )}
                    </Vote>
                  </Item>

                  {detail.imdb_id ? (
                    <>
                      <Divider />
                      <a
                        href={`https://www.imdb.com/title/${detail.imdb_id}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <IMDB />
                      </a>
                    </>
                  ) : (
                    ""
                  )}
                </ItemContainer>
              )}

              <ItemContainer>
                <Tagline>{detail.tagline} </Tagline>{" "}
                {detail.belongs_to_collection ? (
                  <Card
                    id={detail.belongs_to_collection.id}
                    poster={`${BASE_URL}${detail.belongs_to_collection.poster_path}`}
                  />
                ) : (
                  ""
                )}
              </ItemContainer>
              <Overview>{detail.overview}</Overview>
            </TextContainer>

            {detail.videos ? (
              <VideoContainer>
                {detail.videos.results.slice(0, 1).map(video => (
                  <Video
                    key={video.id}
                    src={`https://www.youtube.com/embed/${video.key}`}
                    allow={"fullscreen"}
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
