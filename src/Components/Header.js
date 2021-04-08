import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
`;
const List = styled.li`
  margin: 1.2em 2em;
  background-color: #56776c;
  font-family: "Roboto", sans-serif;
  padding: 0.5em 1.2em;
  border-radius: 2em;
  width: 5vw;
  text-align: center;
  &:hover {
    background-color: #464f41;
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <>
      <Ul>
        <List>
          <Link to="/">Home</Link>
        </List>
        <List>
          <Link to="/tv">TV</Link>
        </List>
        <List>
          <Link to="/search">Search</Link>
        </List>
        <List>
          <Link to="/detail">Detail</Link>
        </List>
      </Ul>
    </>
  );
};

export default Header;
