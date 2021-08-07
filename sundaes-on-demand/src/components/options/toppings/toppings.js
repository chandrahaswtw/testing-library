import React from "react";

const Toppings = ({ imagePath, name }) => {
  return (
    <img src={`http://localhost:3030${imagePath}`} alt={`${name} toppings`} />
  );
};

export default Toppings;
