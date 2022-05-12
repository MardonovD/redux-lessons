import React from "react";

import ReactDOM from "react-dom/client";

import { createStore } from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const initialState = { value: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + 1 };
    case "DECREMENT":
      return { ...state, value: state.value - 1 };
    case "RANDOM":
      return { ...state, value: state.value * action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log(store);

const update = () => {
  document.querySelector(".counter").textContent = store.getState().value;
};

store.subscribe(update);
const inc = () => ({
  type: "INCREMENT",
});

const dec = () => ({
  type: "DECREMENT",
});

const ran = (randomValue) => {
  return {
    type: "RANDOM",
    payload: randomValue,
  };
};

document.getElementById("increment").addEventListener("click", () => {
  store.dispatch(inc());
});

document.getElementById("decrement").addEventListener("click", () => {
  store.dispatch(dec());
});

document.getElementById("random").addEventListener("click", () => {
  let randomValue = Math.floor(Math.random() * 10);
  store.dispatch(ran(randomValue));
});

root.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>
);

// SUBscRiBE--> uzgargan paytini tutib olib bizga aytib turadigan narsa hisoblanadi...
