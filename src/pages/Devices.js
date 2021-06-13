import React, { useEffect, useState } from "react";
import PageContent from "../components/layout/PageContent";
import { useAuth0 } from "@auth0/auth0-react";
import Config from "../config/config";
import Cardbutton from "../components/buttons/CardButton";

const Devices = () => {
  const [probes, setProbes] = useState([]);
  const { getAccessTokenSilently } = useAuth0();

  const getProbeConfigs = async () => {
    try {
      const token = await getAccessTokenSilently();
      let headers = { Authorization: `Bearer ${token}` };
      fetch(`${Config.apiUrl}/api/probe/config/list`, { headers: headers })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProbes(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const onDeviceClick = (device) => {
    console.log(device);
  };

  useEffect(() => {
    getProbeConfigs();
  }, []);

  return (
    <PageContent title="Devices">
      <section className="no-padding-top no-padding-bottom">
        <div className="container-fluid">
          <div className="row">
            {probes.length > 0 &&
              probes.map((p, i) => {
               return <Cardbutton
                  key = {i}
                  name={p.nickname}
                  subName={p.rowKey}
                  onClick={() => onDeviceClick(p.rowKey)}
                ></Cardbutton>;
              })}
          </div>
        </div>
      </section>
    </PageContent>
  );
};

export default Devices;
