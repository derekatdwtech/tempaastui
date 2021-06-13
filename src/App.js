import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/Sidebar";
import { Route, Router, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import {
  Auth0Provider,
  withAuthenticationRequired
} from "@auth0/auth0-react";
import { createBrowserHistory } from "history";
import Profile from "./pages/Profile";
import Devices from './pages/Devices';
import Alerts from "./pages/Alerts";

export const history = createBrowserHistory();

const ProtectedRoute = ({ component, ...args }) => (
  <Route component={withAuthenticationRequired(component)} {...args} />
);

const onRedirectCallback = (appState) => {
  // Use the router's history module to replace the url
  history.replace(appState?.returnTo || window.location.pathname);
};

export default function App() {
  const [theme, setTheme] = useState("default");

  return (
    <Auth0Provider
      domain="tempaast.us.auth0.com"
      clientId="e5d6SnEoInkzn10MHteTwCU4URJx2Oa7"
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience="app.tempaast.com"
    >
      <div>
        <link
          rel="stylesheet"
          type="text/css"
          href={"css/style." + theme + ".css"}
        />
        <header className="header">
          <NavBar setTheme={setTheme}></NavBar>
        </header>
          <div className="d-flex align-items-stretch">
            <SideBar></SideBar>
            <Router history={history}>
              <Switch>
                <ProtectedRoute
                  exact
                  path="/"
                  component={Dashboard}
                ></ProtectedRoute>
                <ProtectedRoute
                  path="/profile"
                  component={Profile}
                ></ProtectedRoute>
                <ProtectedRoute path="/devices"
                component={Devices}></ProtectedRoute>
                <ProtectedRoute path="/alerts" component={Alerts}></ProtectedRoute>
              </Switch>
            </Router>
          </div>
      </div>
    </Auth0Provider>
  );
}
