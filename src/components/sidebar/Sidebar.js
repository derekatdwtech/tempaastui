import React from "react";
import routes from "../../config/routes";
import NavItem from '../navbar/NavItem';

const SideBar = (props) => {
  return (
    <nav id="sidebar">
      <div className="sidebar-header d-flex align-items-center">
        <div className="avatar">
          <img
            src="img/avatar-6.jpg"
            alt="..."
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="title">
          <h1 className="h5">Mark Stephen</h1>
          <p>Web Designer</p>
        </div>
      </div>
      <span className="heading">Main</span>
      <ul className="list-unstyled">
        {routes.map((route, i) => {
         return <NavItem key={i} route={route.path} label={route.label} icon={route.icon}></NavItem>;
        })}
      </ul>
    </nav>
  );
};
export default SideBar;
