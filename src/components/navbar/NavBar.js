import React from "react";
import NavBarHeader from "./NavBarHeader";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = (props) => {
  const themes = ["default", "blue", "green", "pink", "red", "sea", "violet"];
  const { isLoading, user, isAuthenticated, logout } = useAuth0();
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <NavBarHeader />
          <div className="right-menu list-inline no-margin-bottom">
            <div className="list-inline-item dropdown">
              <a
                id="navbarDropdownMenuLink1"
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                className="nav-link messages-toggle"
              >
                <i className="icon-settings"></i>
              </a>
            </div>
            <div
              aria-labelledby="navbarDropdownMenuLink1"
              className="dropdown-menu messages"
            >
              {themes.map((theme, index) => {
                return (
                  <a
                    key={index}
                    href="#"
                    className="dropdown-item message d-flex align-items-center"
                    onClick={() => props.setTheme(theme)}
                  >
                    <div className="content">
                      {" "}
                      <strong className="d-block">{theme}</strong>
                    </div>
                  </a>
                );
              })}
            </div>
            {
              isAuthenticated &&
            <div className="list-inline-item logout">
              <a id="logout" onClick={() =>   logout({ returnTo: window.location.origin })} className="nav-link">
                {" "}
                <span className="d-none d-sm-inline">Logout </span>
                <i className="icon-logout"></i>
              </a>
            </div> 
          }
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
