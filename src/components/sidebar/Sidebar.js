import React from "react";
import routes from "../../config/routes";
import NavItem from "../navbar/NavItem";
import { useAuth0 } from "@auth0/auth0-react";

const SideBar = (props) => {
  const { user } = useAuth0();
  console.log(user);
  return (
    <nav id="sidebar">
      <div className="sidebar-header d-flex align-items-center">
        <div className="avatar">
          <img
            src={user.picture}
            alt="..."
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="title">
          <h1 className="h5">{user.name}</h1>
          <p>{user.email}</p>
        </div>
      </div>
      <span className="heading">Main</span>
      <ul className="list-unstyled">
        {routes.map((route, i) => {
          return (
            <NavItem
              key={i}
              route={route.path}
              label={route.label}
              icon={route.icon}
            ></NavItem>
          );
        })}
      </ul>
    </nav>
  );
};
export default SideBar;
