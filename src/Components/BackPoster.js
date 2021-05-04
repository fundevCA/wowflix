import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Back = styled.div`
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
  z-index: -1;
`;

const BackPoster = ({ back }) => <Back back={back} />;

BackPoster.propTypes = {
  back: PropTypes.string.isRequired
};

export default BackPoster;
