import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import classes from "./Experiments.module.css";
import ExperimentEntry from '../../components/ExperimentEntry';

const Experiments = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top" className={classes.navbar}>
        <Navbar.Brand href='/'>triston.dev</Navbar.Brand>
        <Nav className={classes.nav}>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/experiments">Experiments</Nav.Link>
        </Nav>
      </Navbar>
      <div className={classes.mainContentContainer}>
        <ExperimentEntry name='Order Shuffler' description='Simple shuffler that randomizes order of names' />
      </div>
    </>
  );
};

export default Experiments;
