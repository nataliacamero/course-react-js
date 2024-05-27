import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [caunter, setCaunter] = useState(value);

  const handleAdd = () => setCaunter(() => caunter + 1);

  const handleSubstract = () => {
    if (caunter <= value) return;
    setCaunter(() => caunter - 1);
  };

  const handleReset = () => setCaunter(value);

  return (
    <>
      <h1>Counter App</h1>
      <h2>{caunter}</h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
