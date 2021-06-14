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
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="block">
                <div className="title">
                  Alert Rules
                </div>
                <hr></hr>
                <div className="block-body">
                  Coming Soon
                </div>
              </div>
            </div>
            {/* Recent Alerts */}
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="block">
                <div className="title">
                  Recent Alerts
                </div>
                <hr></hr>
                <div className="block-body">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContent>
  );
};

export default Alerts;
