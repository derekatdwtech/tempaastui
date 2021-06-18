import React, { useEffect, useState } from "react";
import PageContent from "../components/layout/PageContent";
import { useAuth0 } from "@auth0/auth0-react";
import Config from "../config/config";
import Cardbutton from "../components/buttons/CardButton";
import Loader from "./loading";
import Modal from "../components/modal/Modal";

const Alerts = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [alertConfigs, setAlertConfigs] = useState([]);
  const [alertHistory, setAlertHistory] = useState([]);
  const [isCreateAlertButtonDiabled, setIsCreateAlertButtonDisabled] =
    useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const PostApiConfig = async (config) => {
    let token = await getAccessTokenSilently();
    const headers = { Authorization: `Bearer ${token}` };

    fetch(`${Config.apiUrl}/api/alert/config`, {
      headers: headers,
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        setAlertConfigs(data);
      });
  };

  const getAlertHistory = async () => {
    let token = await getAccessTokenSilently();
    const headers = { Authorization: `Bearer ${token}` };

    fetch(`${Config.apiUrl}/api/alert/history?count=5`, { headers: headers })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAlertHistory(data);
      });
  };

  const editAlertConfig = (a) => {
    setIsEditModalVisible(true);
    console.log("Attempting to show Modal");
  };

  const closeModal = () => {
    setIsEditModalVisible(false);
  };

  const getAlertModal = () => {
    return (
      <Modal
        show={isEditModalVisible}
        handleClose={() => closeModal()}
        title="Alert Configuration"
      >
        <form>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="phone"
              placeholder="Phone Number"
              className="form-control"
            />
          </div>
        </form>
      </Modal>
    );
  };
  useEffect(() => {
    async function getAlertConfigs() {
      let token = await getAccessTokenSilently();
      const headers = { Authorization: `Bearer ${token}` };
      fetch(`${Config.apiUrl}/api/alert/config`, { headers: headers })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setAlertConfigs((prevState) => {
            return [...prevState, data];
          });
          setIsLoading(false);
        });
    }
    getAlertHistory();
    getAlertConfigs();
  }, [setAlertConfigs]);

  return (
    <PageContent title="Alerting" isLoading={isLoading}>
      <section className="no-padding-top no-padding-bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="block">
                {getAlertModal()}
                <div className="title">Alert Rules</div>
                <hr></hr>
                {alertConfigs.length > 0 && (
                  <div className="block-body">
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>Device ID</th>
                            <th>Edit</th>
                          </tr>
                        </thead>
                        <tbody>
                          {alertConfigs.map((a, i) => {
                            console.log(a);
                            return (
                              <tr key={i}>
                                <td>{a.firstName}</td>
                                <td>{a.lastName}</td>
                                <td>{a.phoneNumber}</td>
                                <td>{a.probe_id}</td>
                                <td>
                                  <button
                                    type=""
                                    className="btn btn-default"
                                    onClick={() => editAlertConfig(a)}
                                  >
                                    <i className="fa fa-edit"></i>
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {alertConfigs.length === 0 && (
                  <div className="block-body">
                    <p>
                      <i>
                        We found no Alert Configurations. Click the button below
                        to create one!
                      </i>
                    </p>
                  </div>
                )}
                <br></br>
                <button
                  disabled={isCreateAlertButtonDiabled}
                  type=""
                  onClick={() => editAlertConfig()}
                  className="btn btn-primary"
                >
                  Create Alert Configuration
                </button>
              </div>
            </div>
            {/* Recent Alerts */}
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="messages-block block">
                <div className="title">Recent Alerts</div>
                {alertHistory.length === 0 && (
                  <div className="messages">Coming Soon</div>
                )}
                {alertHistory.length > 0 && (
                  <div className="messages">
                    {alertHistory.map((alert, i) => {
                      return (
                        <a
                          className="message d-flex align-items-center"
                          key={i}
                        >
                          <div className="profile">
                            <i className="fa fa-2x fa-exclamation"></i>
                          </div>
                          <div className="content">
                            <strong className="d-block">
                              Probe ID: {JSON.parse(alert.details).probe_id}
                            </strong>
                            <span className="d-block">
                              {JSON.parse(alert.details).temperature.c +
                                "/" +
                                JSON.parse(alert.details).temperature.f}
                            </span>
                            <small className="date d-block">
                              {alert.sendTime}
                            </small>
                          </div>
                          <hr></hr>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContent>
  );
};

export default Alerts;
