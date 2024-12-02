import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PayPalScriptProvider
      options={{
        "client-id": "AeiCJwy4cQzRC7uT_j-ILzNK-vnlr6eWwSyiavS5MMdC7KlDa5M2VJVlBlfCHHdvStWDGK3JbmMjrbTi",
      }}
    >
      <App />
    </PayPalScriptProvider>
  </React.StrictMode>
);
