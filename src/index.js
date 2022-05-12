import React from "react";

import ReactDOM from "react-dom";
import { reducer } from "./redux/reducers";
import { createStore } from "redux";
import { dec, inc, ran } from "./redux/actions";
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(reducer);
const { dispatch, subscribe, getState } = store;

const update = () => {
  document.querySelector(".counter").textContent = getState().value;
};

subscribe(update);

document.getElementById("increment").addEventListener("click", () => {
  dispatch(inc());
});

document.getElementById("decrement").addEventListener("click", () => {
  dispatch(dec());
});

document.getElementById("random").addEventListener("click", () => {
  let randomValue = Math.floor(Math.random() * 10);
  dispatch(ran(randomValue));
});

root.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>
);

// SUBscRiBE--> uzgargan paytini tutib olib bizga aytib turadigan narsa hisoblanadi...
