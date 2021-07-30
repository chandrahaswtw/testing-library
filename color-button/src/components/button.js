import React, { useState } from "react";

const ButtonComponent = () => {
  const [btnColor, setBtnColor] = useState(true);
  const [checked, setChecked] = useState(false);
  const checkHandler = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <div>
      <button
        style={{ backgroundColor: checked ? "gray" :btnColor ? "red" : "blue" }}
        disabled={checked}
        onClick={() => {
          setBtnColor(!btnColor);
        }}
      >
        Change to {btnColor ? "blue" : "red"}
      </button>
      <label htmlFor="checkID">CLICK ME</label>
      <input
        type="checkbox"
        onChange={checkHandler}
        checked={checked}
        id="checkID"
      />
    </div>
  );
};

export default ButtonComponent;
