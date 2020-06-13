import React from 'react';
import classes from './ExperimentEntry.module.css';

const ExperimentEntry = (props) => {
    return (
        <div className={classes.container}>
          <h2 className={classes.name}>{props.name}</h2>
          <p>{props.description}</p>
        </div>
    );
}

export default ExperimentEntry