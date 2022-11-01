import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <p>
        <Link to="/" style={{ margin: "0px  10px 0px 0px" }}>
          Home
        </Link>
        <Link to="/add">Add Products</Link>
      </p>
    </div>
  );
};

export default Header;
