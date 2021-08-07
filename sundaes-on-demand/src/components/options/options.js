import React, { useState, useEffect } from "react";
import Scoops from "./scoops/scoops.js";
import Toppings from "./toppings/toppings";

const Options = ({ option }) => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  let Component = option === "scoops" ? Scoops : Toppings;

  useEffect(() => {
    fetch(`http://localhost:3030/${option}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        setErr(true);
      });
  }, [option]);

  const theJSX = data.map((el) => (
    <Component
      name={el.name}
      imagePath={el.imagePath}
      key={el.name}
    ></Component>
  ));

  return err ? <div role="alert">some error</div> : <div>{theJSX}</div>;
};

export default Options;
