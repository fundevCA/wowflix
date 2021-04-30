import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import BackPoster from "../../Components/BackPoster";
import Loader from "../../Components/Loader";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 4.5rem);
  background-color: grey;
  padding: 3rem;
`;
const Back = styled(BackPoster)`
  height: 50%;
  width: 100%;
`;

const CollectionPresenter = ({ detail, isLoading, error }) =>
  isLoading ? (
    <Loader />
  ) : (
    <Container>
      <BackPoster
        back={`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
      />
    </Container>
  );

CollectionPresenter.propTypes = {
  detail: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default CollectionPresenter;
