import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";

const Container = styled.div`
  display: flex;
  justify-content: center;

  background-color: red;
  width: 100vw;
  height: 90vh;
`;
const Poster = styled.div``;
const Title = styled.div`
  color: white;
`;
const Genre = styled.div``;

const DetailPresenter = ({ detail, isLoading, error, isMovie }) =>
  isLoading ? (
    <Loader />
  ) : (
    <Container>
      {error && error.length > 0 && <Message text={error} color="#bbbbbb" />}
    </Container>
  );

DetailPresenter.propTypes = {
  detail: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  isMovie: PropTypes.bool.isRequired
};

export default DetailPresenter;
