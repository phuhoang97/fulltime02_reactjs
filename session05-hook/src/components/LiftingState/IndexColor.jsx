import React, { useState } from "react";
import ColorPicker from "./ColorPicker";

function IndexColor() {
  const [color, setColor] = useState("#000000");

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <div>
      <ColorPicker onColorChange={handleColorChange} />
      <div
        style={{ backgroundColor: color, width: "100px", height: "100px" }}
      />
    </div>
  );
}

export default IndexColor;
