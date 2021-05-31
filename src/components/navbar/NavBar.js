import React from "react";
import NavBarHeader from "./NavBarHeader";

const NavBar = (props) => {
  const themes = ["default", "blue", "green", "pink", "red", "sea", "violet"];
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
            <div class="list-inline-item logout">
              <a id="logout" href="login.html" class="nav-link">
                {" "}
                <span class="d-none d-sm-inline">Logout </span>
                <i class="icon-logout"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
