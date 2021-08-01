import React, { useState } from "react";

const CheckBoxSection = (props) => {
  const [checkBoxEnabled, setCheckBoxEnabled] = useState(false);

  const checkBoxHandler = (e) => {
    setCheckBoxEnabled(e.target.checked);
  };

  return (
    <div>
      <label htmlFor="termsCheckBox">Agree the terms</label>
      <input type="checkbox" id="termsCheckBox" onChange={checkBoxHandler} />
      <button disabled={!checkBoxEnabled}>Confirm order</button>
    </div>
  );
};

export default CheckBoxSection;
