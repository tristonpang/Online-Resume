import React from 'react';
import classes from './ExperimentEntry.module.css';
import { Link } from 'react-router-dom';

const ExperimentEntry = (props) => {
    return (
      <Link to={props.url}>
        <div className={classes.container}>
          <h2 className={classes.name}>{props.name}</h2>
          <p>{props.description}</p>
        </div>
      </Link>
    );
}

export default ExperimentEntry