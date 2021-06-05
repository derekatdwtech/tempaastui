import React from "react";
import PageContent from "../components/layout/PageContent";

const Loader = () => {
  return (
    <PageContent>
      <div className="brand-text brand-big visible text-uppercase" style={{textAlign:"center", fontSize:"3em"}}>
        <strong className="text-primary">Tempaast</strong>
      </div>
      <div
        style={{
          width: "vw",
          height: "vh",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <i
          className="fa fa-spinner fa-spin fa-4x"
          style={{ textAlign: "center" }}
        ></i>
      </div>
    </PageContent>
  );
};

export default Loader;
