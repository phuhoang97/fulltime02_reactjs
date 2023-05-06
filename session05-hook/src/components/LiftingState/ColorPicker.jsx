import React from "react";

function ColorPicker(props) {
  const handleChange = (event) => {
    props.onColorChange(event.target.value);
  };

  return (
    <div>
      <input type='color' onChange={handleChange} />
    </div>
  );
}

export default ColorPicker;
