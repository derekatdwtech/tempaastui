import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/Sidebar";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "./pages/loading";

function App() {
  const [theme, setTheme] = useState("default");

  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();

  if (!isLoading) {
    return (
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
          <BrowserRouter>
            <Route path="/">
              <Dashboard></Dashboard>
            </Route>
          </BrowserRouter>
        </div>
      </div>
    );
  } else {
    return <Loader></Loader>;
  }
}

export default App;
