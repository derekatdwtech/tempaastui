import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
ReactDOM.render(
  <Auth0Provider
    domain="tempaast.us.auth0.com"
    clientId="e5d6SnEoInkzn10MHteTwCU4URJx2Oa7"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
