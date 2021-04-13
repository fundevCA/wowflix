import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
`;
const List = styled.li`
  margin: 1.2em 1.4em;
  font-family: "Roboto", sans-serif;
  padding: 0.7em;
  width: 6vw;
  text-align: center;

  border-bottom: 0.3em solid ${props => (props.current ? "red" : "transparent")};
  &:hover {
    background-color: #464f41;
    cursor: pointer;
  }
  transition: border-bottom 0.5s ease-in-out;
`;

const Header = ({ location: { pathname } }) => (
  <>
    <Ul>
      <Link to="/">
        <List current={pathname === "/"}>Home</List>
      </Link>
      <Link to="/tv">
        <List current={pathname === "/tv"}>tv</List>
      </Link>
      <Link to="/search">
        <List current={pathname === "/search"}>Search</List>
      </Link>
      <Link to="/detail">
        <List current={pathname === "/detail"}>Detail</List>
      </Link>
    </Ul>
  </>
);

export default withRouter(Header);
