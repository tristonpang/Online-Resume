import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Draggable from "./Draggable";

const DragDrop = () => {
  const generateDraggables = (total) => {
    const draggablesList = []
    for (let i = 0; i < total; i++) {
      draggablesList.push(<Draggable draggableId={`drag${i}`} />);
    }
    return draggablesList;
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        {generateDraggables(3)}
      </div>
    </DndProvider>
  );
};

export default DragDrop;
