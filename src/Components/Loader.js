import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  font-size: 3rem;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

const Loader = () => (
  <Container>
    <span role="img" aria-label="Loading">
      ⏰
    </span>
  </Container>
);

export default Loader;
