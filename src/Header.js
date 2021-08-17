import React from "react";
import Facts from "./facts";
import Wave from "../src/wave.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = () => {
  const handleClick = (e) => {
    //e.preventDefault();
  };

  return (
    <div id="header">
      <div className="headDiv">
        <div className="headCont text-center">
          <Link to={"/facts/"}>
            <h1 className="">Fun Facts About Web Developers</h1>
          </Link>
          <p className="text-center lead">
            Would you like to know some fun facts about Web Developers? Click an
            option below to learn a few things.
          </p>
        </div>
        <div className="" id="buttons">
          <Link
            to={"/facts/" + Facts[0].id}
            className="btn btn-outline-dark"
            onClick={handleClick}
          >
            Fact 1
          </Link>
          <Link
            to={"/facts/" + Facts[1].id}
            className="btn btn-outline-dark"
            onClick={handleClick}
          >
            Fact 2
          </Link>
          <Link
            to={"/facts/" + Facts[2].id}
            className="btn btn-outline-dark"
            onClick={handleClick}
          >
            Fact 3
          </Link>
        </div>
      </div>
      <img src={Wave} alt="" />
    </div>
  );
};

export default Header;
