import React from "react";
import Loader from "../../pages/loading";
import PageHeader from "./PageHeader";

const PageContent = (props) => {
  if(!props.isLoading){
  return (
    <div className="page-content">
      {props.title  && <PageHeader title={props.title}></PageHeader>}
      {props.children}
    </div>
  );
  }
  else {
    return <Loader></Loader>
  }
};

export default PageContent;
