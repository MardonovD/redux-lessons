import React from "react";

import ReactDOM from "react-dom";
import { reducer } from "./redux/reducers";
import { createStore } from "redux";

import App from "./components/App";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(reducer);

// subscribe(() => {
//   document.querySelector(".counter").textContent = getState().value;
// });

// const { inc, dec, ran } = bindActionCreators(actions, dispatch);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// SUBscRiBE--> uzgargan paytini tutib olib bizga aytib turadigan narsa hisoblanadi...
