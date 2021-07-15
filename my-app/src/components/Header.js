import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <div className="right menu">
        <Link to="/" className="item">
          Streamy
        </Link>
      </div>
      <div className="right menu">
        <Link to="/streams/list" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
