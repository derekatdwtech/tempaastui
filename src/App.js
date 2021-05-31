import logo from "./logo.svg";
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/Sidebar";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("default");
  return (
    <div>
      <link rel="stylesheet" type="text/css" href={"css/style." + theme + ".css"} />
      <header className="header">
        <NavBar setTheme={setTheme}></NavBar>
      </header>
      <div className="d-flex align-items-stretch">
        <SideBar></SideBar>
        <BrowserRouter>
          <Route path="/"><Dashboard></Dashboard></Route>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
