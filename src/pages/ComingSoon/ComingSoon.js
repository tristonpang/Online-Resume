import React from "react";
import { Link } from "react-router-dom";
import classes from "./ComingSoon.module.css";

const ComingSoon = () => {
  return (
    <div className={classes.mainContentContainer}>
      <h1>Coming soon...</h1>
      <h2>This page is currently under construction</h2>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ComingSoon;
