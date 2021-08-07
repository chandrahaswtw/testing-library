import React from "react";

const Scoops = ({ imagePath, name }) => {
  return (
    <img src={`http://localhost:3030${imagePath}`} alt={`${name} scoops`} />
  );
};

export default Scoops;
