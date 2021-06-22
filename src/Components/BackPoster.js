import React from "react";
import styled from "styled-components";
import noBack from "../Assets/no_background.jpeg";

const Back = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => (props.back ? props.back : noBack)});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.4;
  z-index: -1;
`;

const BackPoster = ({ back }) => <Back back={back} />;

export default BackPoster;
