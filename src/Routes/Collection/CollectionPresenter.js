import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import BackPoster from "../../Components/BackPoster";
import Loader from "../../Components/Loader";
import CollectionCard from "../../Components/CollectionCard";
import Collection from "../../Components/Collection";
import Helmet from "react-helmet";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 4.5rem);

  padding: 3rem;
`;
const Content = styled.div`
  height: 100%;
  width: 100%;
  /* display: flex; */
  box-sizing: border-box;
`;
const Title = styled.h3`
  font-size: 3.5em;

  color: #f9f6f7;
  letter-spacing: 5px;
  top: 50%;
  text-shadow: -1px -1px 0px #151515, 3px 3px 0px #151515, 6px 6px 0px #151515;
`;
const Card = styled(CollectionCard)``;
const Item = styled.div`
  display: flex;
  margin-top: -1rem;
  margin-bottom: 2rem;
  align-items: center;
`;
const CollectionPoster = styled(Collection)``;
const Collections = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 21rem);
  grid-gap: 3rem;
  padding-left: 1.5rem;
`;
const BASE_URL = `https://image.tmdb.org/t/p/original/`;

const CollectionPresenter = ({ detail, isLoading, error }) =>
  isLoading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>{detail.name}</title>
      </Helmet>
      <Container>
        <BackPoster back={`${BASE_URL}${detail.backdrop_path}`} />
        <Content>
          <Item>
            <Title>{detail.name}</Title>
            <Card id={detail.id} poster={BASE_URL + detail.poster_path} />
          </Item>
          <Collections>
            {detail.parts
              ? detail.parts.map(collection => (
                  <CollectionPoster
                    key={collection.id}
                    id={collection.id}
                    title={collection.title}
                    poster={collection.poster_path}
                    date={collection.release_date}
                  />
                ))
              : ""}
          </Collections>
        </Content>
      </Container>
    </>
  );

CollectionPresenter.propTypes = {
  detail: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default CollectionPresenter;
