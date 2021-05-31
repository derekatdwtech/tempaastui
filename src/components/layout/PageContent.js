import React from "react";
import PageHeader from "./PageHeader";

const PageContent = (props) => {
  return (
    <div className="page-content">
      <PageHeader title={props.title}></PageHeader>
      {props.children}
    </div>
  );
};

export default PageContent;
