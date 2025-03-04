import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./state/store"; // Import your store from the correct location
import App from "./App"; // Import your App component

// Render the App inside the Provider to give it access to the Redux store
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);