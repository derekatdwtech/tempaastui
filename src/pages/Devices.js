import React, { useEffect, useState } from "react";
import PageContent from "../components/layout/PageContent";
import Loader from "./loading";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Cardbutton from "../components/buttons/CardButton";

const Devices = () => {
  const [probeConfigs, setProbeConfigs] = useState([]);
  const getProbeConfigs = () => {
    fetch()
  };


  
  const onDeviceClick = (device) => {
      console.log(device);
  }
  useEffect(() => {});
  return (
    <PageContent title="Devices">
      <section className="no-padding-top no-padding-bottom">
        <div className="container-fluid">
          <div className="row">
              <Cardbutton name="28-f0a4e22c" onClick={() => onDeviceClick("28-f0a4e22c")}></Cardbutton>
          </div>
        </div>
      </section>
    </PageContent>
  );
};

export default Devices;
