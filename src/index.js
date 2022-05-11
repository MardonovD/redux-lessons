import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
const root = ReactDOM.createRoot(document.getElementById("root"));

const initialState = 0;

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RANDOM":
      return state * action.payload;
    default:
      return state;
  }
};
const store = createStore(reducer); //store...

console.log(store);

const update = () => {
  document.querySelector(".counter").textContent = store.getState();
};

store.subscribe(update);
const inc = () => {
  return {
    type: "INCREMENT",
  };
};
const dec = () => {
  return {
    type: "DECREMENT",
  };
};
const ran = () => {
  let randomValue = Math.floor(Math.random() * 10);
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
  store.dispatch(ran());
});

root.render(
  <React.StrictMode>
    <></>
  </React.StrictMode>
);

// SUBscRiBE--> uzgargan paytini tutib olib bizga aytib turadigan narsa hisoblanadi...
