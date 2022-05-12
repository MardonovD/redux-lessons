import React from "react";

import ReactDOM from "react-dom";
import { reducer } from "./redux/reducers";
import { createStore, bindActionCreators } from "redux";
import * as actions from "./redux/actions";
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(reducer);
const { dispatch, subscribe, getState } = store;
console.log(store);
subscribe(() => {
  document.querySelector(".counter").textContent = getState().value;
});

const { inc, dec, ran } = bindActionCreators(actions, dispatch);

// const incHandler = bindActionCreator(inc, dispatch);
// const decHandler = bindActionCreator(dec, dispatch);

// const randomHandler = bindActionCreator(ran, dispatch);
document.getElementById("increment").addEventListener("click", inc);

document.getElementById("decrement").addEventListener("click", dec);

document.getElementById("random").addEventListener("click", () => {
  let randomValue = Math.floor(Math.random() * 10);
  ran(randomValue);
});

root.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>
);

// SUBscRiBE--> uzgargan paytini tutib olib bizga aytib turadigan narsa hisoblanadi...
