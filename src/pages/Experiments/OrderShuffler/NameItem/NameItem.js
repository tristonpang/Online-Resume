import React, { useState } from "react";
import classes from "./NameItem.module.css";
import { MdDelete } from "react-icons/md";

const NameItem = (props) => {
  const [isRemoveDisplayed, setIsRemoveDisplayed] = useState(false);

  return (
    <div
      className={classes.nameItem}
      onMouseEnter={() => setIsRemoveDisplayed(true)}
      onMouseLeave={() => setIsRemoveDisplayed(false)}
      style={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {props.name}
      {isRemoveDisplayed && <button className={classes.deleteButton} onClick={props.onRemove}>
        <MdDelete style={{ color: "#E30000", height: "100%", width: 25 }} />
      </button>}
    </div>
  );
};

export default NameItem;
