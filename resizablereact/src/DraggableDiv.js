import React, { useState, useRef, useEffect } from "react";

function ResizableDraggableDiv() {
  const [dimensions, setDimensions] = useState({ width: 200, height: 200 });
  const [dragging, setDragging] = useState(false);
  const dragRef = useRef(null);

  const handleMouseDown = (event) => {
    setDragging(true);
  };

  const handleMouseMove = (event) => {
    if (dragging && dragRef.current) {
      const newWidth = dragRef.current.offsetWidth + event.movementX;
      const newHeight = dragRef.current.offsetHeight + event.movementY;
      setDimensions({ width: newWidth, height: newHeight });
    }
  };

  const handleMouseUp = (event) => {
    setDragging(false);
  };

  useEffect(() => {
    if (dragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }
  }, [dragging]);

  return (
    <div
      style={{
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
        border: "1px solid black",
        position: "relative",
      }}
    >
      <div
        ref={dragRef}
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "gray",
          position: "absolute",
          bottom: "0",
          right: "0",
          cursor: "nwse-resize",
        }}
        onMouseDown={handleMouseDown}
      />
    </div>
  );
}

export default ResizableDraggableDiv;
