import React, { useEffect, useState } from "react";
import PageContent from "../components/layout/PageContent";
import { useAuth0 } from "@auth0/auth0-react";
import Config from "../config/config";
import Cardbutton from "../components/buttons/CardButton";
import Loader from "./loading";

const Alerts = () => {

  return (
    <PageContent title="Alerting">
      <section className="no-padding-top no-padding-bottom">
        <div className="container-fluid">
          <div className="row">
            <h2>Alert rules coming soon!</h2>
            <Loader></Loader>
          </div>
        </div>
      </section>
    </PageContent>
  );
};

export default Alerts;
