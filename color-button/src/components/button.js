import React, { useState } from "react";
import classes from "./button.module.css";

const ButtonComponent = () => {
  const [btnColor, setBtnColor] = useState(true);
  const [checked, setChecked] = useState(false);
  const checkHandler = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <div>
      <section className={classes.header}>
        <p>COLOR BUTTON : TESTING</p>
      </section>
      <section className={classes.container}>
        <button
          style={{
            backgroundColor: checked ? "gray" : btnColor ? "red" : "blue",
          }}
          disabled={checked}
          onClick={() => {
            setBtnColor(!btnColor);
          }}
        >
          Change to {btnColor ? "blue" : "red"}
        </button>
        <br />
        <label htmlFor="checkID">CLICK ME</label>
        <input
          type="checkbox"
          onChange={checkHandler}
          checked={checked}
          id="checkID"
        />
      </section>
    </div>
  );
};

export default ButtonComponent;
