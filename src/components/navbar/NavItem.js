import React from "react";

const NavItem = (props) => {
    
    console.log(window.location.pathname);
  const activeRoute = window.location.pathname == props.route ? "active" : "";

  return (
    <li className={activeRoute}>
      <a href={props.route}>
        <i className={props.icon}></i>
        {props.label}{" "}
      </a>
    </li>
  );
};
export default NavItem;
