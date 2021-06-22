import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const List = styled.li`
  margin: 1.2em 1.4em;
  font-family: "Roboto", sans-serif;
  padding: 0.8em;
  width: 80px;
  text-align: center;

  border-bottom: 0.3em solid ${props => (props.current ? "red" : "transparent")};
  &:hover {
    background-color: #464f41;
    cursor: pointer;
  }
  transition: border-bottom 0.5s ease-in-out;
`;
const glow = keyframes`
    from {
      color: #fff;
      text-shadow: 0 0 10px #be0000, 0 0 20px #be0000, 0 0 30px #be0000,
        0 0 40px #be0000, 0 0 50px #be0000, 0 0 60px #be0000, 0 0 70px #be0000,
        0 0 90px #be0000;
    }
    to {
      color: gray;
      text-shadow: 0 0 20px #be0000, 0 0 30px #be0000, 0 0 40px #be0000,
        0 0 50px #be0000, 0 0 60px #be0000, 0 0 70px #be0000, 0 0 80px #be0000,
        0 1 90px #be0000;
    }
`;
const Logo = styled(List)`
  width: 120px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  border-bottom: none;
  -webkit-animation: ${glow} 2s ease-in-out infinite alternate;
  -moz-animation: ${glow} 2s ease-in-out infinite alternate;
  animation: ${glow} 2s ease-in-out infinite alternate;
`;

const Header = ({ location: { pathname } }) => (
  <>
    <Ul>
      <Link to="/">
        <Logo current={pathname === "/"}>WOWFLIX</Logo>
      </Link>
      <Link to="/">
        <List current={pathname === "/"}>Home</List>
      </Link>
      <Link to="/tv">
        <List current={pathname === "/tv"}>TV</List>
      </Link>
      <Link to="/search">
        <List current={pathname === "/search"}>Search</List>
      </Link>
    </Ul>
  </>
);

export default withRouter(Header);
