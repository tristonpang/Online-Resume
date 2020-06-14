import React, { useState } from "react";
import classes from "./OrderShuffler.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NameItem from './NameItem';

const OrderShuffler = () => {
  const [order, setOrder] = useState([]);
  const [inputNames, setInputNames] = useState("");

  const addNames = (newNames) => {
    const parsedNewNames = newNames.split("\n");

    const newOrder = [...order, ...parsedNewNames];
    setOrder(newOrder);
    setInputNames('');
  };

  const removeName = (name) => {
    const newOrder = order.filter((currentName) => currentName !== name);
    setOrder(newOrder);
  };

  const removeAllNames = () => {
    setOrder([]);
  };

  const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  const shuffleOrder = () => {
    const shuffledOrder = shuffle([...order]); // create new array to signal state change, re-render
    console.log(shuffledOrder);
    setOrder(shuffledOrder);
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Form
        controlId="order-shuffler-input"
        style={{
          width: "25%",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Form.Row style={{ paddingBottom: 20 }}>
          <Form.Label>Name(s) input</Form.Label>
          <Form.Control
            className={classes.formTextArea}
            as="textarea"
            placeholder="Add names here..."
            onChange={(e) => setInputNames(e.target.value)}
            value={inputNames}
          />
          <Button
            className={classes.formButton}
            onClick={() => addNames(inputNames)}
          >
            Add
          </Button>
          <Button
            className={classes.formButton}
            onClick={() => shuffleOrder()}
          >
            Shuffle
          </Button>
          <Button
            className={classes.formButton}
            style={{ backgroundColor: '#E30000' }}
            onClick={() => removeAllNames()}
          >
            Clear All
          </Button>
          <Form.Label>Order List in Text (for copy/pasting)</Form.Label>
          <Form.Control className={classes.formTextArea} readOnly as='textarea' value={order}/>
        </Form.Row>
      </Form>
      <div className={classes.nameItemsContainer}>
        <h2 className={classes.text} style={{ paddingBottom: 12 }}>Order List</h2>
        {order.map((name) => (
          <NameItem name={name} onRemove={() => removeName(name)} />
        ))}
      </div>
    </div>
  );
};



export default OrderShuffler;
