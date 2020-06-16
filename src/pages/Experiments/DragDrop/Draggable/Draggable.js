import React, { useRef } from "react";
import { useDrag, useDrop } from 'react-dnd';
import classes from './Draggable.module.css';

const TYPE = 'draggable';

const Draggable = ({ draggableId, index }) => {
  const ref = useRef(null);

  // const [, drop] = useDrop({
  //   accept: TYPE,
  //   hove
  // })
  
  console.log('index', index);

  const [{ isDragging }, drag] = useDrag({
    item: { type: TYPE, id: draggableId, index }, //NOTE: index doesn't seem to be working, i might have to do more testing and check for redundancy
    collect: monitor => {
      return {
        isDragging: monitor.isDragging()
      }
    },
  });

  drag(ref);

  return (
    <div ref={ref} className={classes.container} style={{ opacity: isDragging ? 0 : 1 }}>
      <p>Drag me!</p>
    </div>
  );
};

export default Draggable;
