import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import classes from "./Experiments.module.css";
import ExperimentEntry from "../../components/ExperimentEntry";
import OrderShuffler from './OrderShuffler'
import { Switch, Route, useRouteMatch } from "react-router-dom";
import DragDrop from "./DragDrop";

const Experiments = () => {
  const match = useRouteMatch();

  return (
    <>
      <Navbar bg="dark" variant="dark" className={classes.navbar}>
        <Navbar.Brand href="/">triston.dev</Navbar.Brand>
        <Nav className={classes.nav}>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/experiments">Experiments</Nav.Link>
        </Nav>
      </Navbar>

      {/* TODO: As entries increase, we'll probably have to dynamically generate routes as well */}
      <Switch>
        <div className={classes.mainContentContainer}>
          <Route exact path={match.path}>
            {/* TODO: Create wrapper around entries, extract entries data into seperate file or component */}
            <ExperimentEntry
              name="Order Shuffler"
              description="Simple shuffler that randomizes order of names"
              url={`${match.path}/order-shuffler`}
            />
            <ExperimentEntry
              name="Drag N Drop"
              description="Drag and drop example built to experiment with react-dnd"
              url={`${match.path}/drag-n-drop`}
            />
          </Route>
          <Route exact path={`${match.path}/order-shuffler`}>
            <OrderShuffler />
          </Route>
          <Route exact path={`${match.path}/drag-n-drop`}>
            <DragDrop />
          </Route>
        </div>
      </Switch>
    </>
  );
};

export default Experiments;
