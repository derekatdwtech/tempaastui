import React, { useEffect, useState } from "react";
import PageContent from "../components/layout/PageContent";
import { useAuth0 } from "@auth0/auth0-react";
import Config from "../config/config";
import Cardbutton from "../components/buttons/CardButton";
import Modal from "../components/modal/Modal";


const Devices = () => {
  const [probes, setProbes] = useState([]);
  const [probeFormData, setProbeFormData] = useState({});
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { getAccessTokenSilently } = useAuth0();

  const postProbeConfig = () => {

  }

  const handleFormChange = (event) => {
    setProbeFormData({
      ...probeFormData,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const editProbeConfig = (a) => {
    setProbeFormData(a);
    setIsEditModalVisible(true);
    console.log("Attempting to show Modal");
  };
  const closeModal = () => {
    setProbeFormData({});
    setIsEditModalVisible(false);
  };

  const getProbeModal = () => {
    return (
      <Modal
        show={isEditModalVisible}
        handleClose={() => closeModal()}
        submit={() => postProbeConfig()}
        title="Probe Configuration"
      >
        <form onSubmit={() => postProbeConfig()}>
          <div className="form-group">
            <p>Device ID: {probeFormData? probeFormData.rowKey : ""}</p>
            </div>
          <div className="form-group">
            <label>Nickname</label>
            <input
              type="text"
              placeholder="Nickname"
              className="form-control"
              onChange={handleFormChange}
              name="nickname"
              value={probeFormData ? probeFormData.nickname : ""}
            />
          </div>
          <div className="form-group">
            <label>Reading Interval</label>
            <input
              type="number"
              placeholder="Number in seconds"
              className="form-control"
              onChange={handleFormChange}
              name="readingIntervalInSeconds"
              value={probeFormData ? probeFormData.readingIntervalInSeconds : ""}
            />
          </div>
          <div className="form-group">
            <label>Temperature Threshold</label>
            <input
              type="number"
              placeholder="In Celcius"
              className="form-control"
              onChange={handleFormChange}
              name="tempThresholdInCelcius"
              value={probeFormData ? probeFormData.tempThresholdInCelcius : ""}
            />
          </div>
        </form>
      </Modal>
    );
  };
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
            {getProbeModal()}
            {probes.length > 0 &&
              probes.map((p, i) => {
               return <Cardbutton
                  key = {i}
                  name={p.nickname}
                  subName={p.rowKey}
                  onClick={() => editProbeConfig(p)}
                  styles={{cursor:"pointer"}}
                ></Cardbutton>;
              })}
          </div>
        </div>
      </section>
    </PageContent>
  );
};

export default Devices;
