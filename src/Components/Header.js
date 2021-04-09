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
    {console.log(pathname)}
    <Ul>
      <List current={pathname === "/"}>
        <Link to="/">Home</Link>
      </List>
      <List current={pathname === "/tv"}>
        <Link to="/tv">TV</Link>
      </List>
      <List current={pathname === "/search"}>
        <Link to="/search">Search</Link>
      </List>
      <List current={pathname === "/detail"}>
        <Link to="/detail">Detail</Link>
      </List>
    </Ul>
  </>
);

export default withRouter(Header);
