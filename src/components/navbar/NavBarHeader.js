import React from "react";

const NavBarHeader = () => {
  return (
    <div className="navbar-header">
      <a href="/" className="navbar-brand">
        <div className="brand-text brand-big visible text-uppercase">
          <strong className="text-primary">Tempaast</strong>
        </div>
        <div className="brand-text brand-sm">
          <strong className="text-primary">T</strong>
          <strong>P</strong>
        </div>
      </a>
      <button className="sidebar-toggle">
        <i className="fa fa-long-arrow-left"></i>
      </button>
    </div>
  );
};

export default NavBarHeader;
