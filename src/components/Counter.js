import React from "react";

function Counter({ counter, inc, dec, ran }) {
  return (
    <div>
      <h1 id="counter">
        Counter:<span className="counter">{counter}</span>
      </h1>
      <button onClick={inc} className="btn btn-primary">
        Increment +
      </button>
      <button onClick={dec} className="btn btn-danger">
        Decrement -
      </button>
      <button onClick={ran} className="btn btn-info">
        Random #
      </button>
    </div>
  );
}

export default Counter;
