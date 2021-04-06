import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/tv">TV</Link>
      <Link to="/search">Search</Link>
      <Link to="/detail">Detail</Link>
    </>
  );
};

export default Header;
