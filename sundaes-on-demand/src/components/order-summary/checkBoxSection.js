import React, { useState } from "react";

const CheckBoxSection = (props) => {
  const [checkBoxEnabled, setCheckBoxEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);

  const checkBoxHandler = (e) => {
    setCheckBoxEnabled(e.target.checked);
  };

  const mouseHandler = (bool) => {
    setHovered(bool);
  };

  return (
    <div>
      <label htmlFor="termsCheckBox">Agree the terms</label>
      <input type="checkbox" id="termsCheckBox" onChange={checkBoxHandler} />
      <button disabled={!checkBoxEnabled}>Confirm order</button>
      <br />
      <p
        onMouseEnter={() => {
          mouseHandler(true);
        }}
        onMouseLeave={() => {
          mouseHandler(false);
        }}
      >
        Terms and Conditions
      </p>
      {hovered && <p>No terms</p>}
    </div>
  );
};

export default CheckBoxSection;
