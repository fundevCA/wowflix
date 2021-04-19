import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: inherit;
  padding: 1rem 2rem;
  :not(:last-child) {
    margin-bottom: 3rem;
  }
`;
const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 1.4rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 10rem);
  grid-gap: 0.5rem;
  padding-left: 1.5rem;
`;

const Section = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>{children}</Grid>
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Section;
