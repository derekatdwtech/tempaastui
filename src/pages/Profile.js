import React, { useEffect, useState } from "react";
import PageContent from "../components/layout/PageContent";
import { useAuth0 } from "@auth0/auth0-react";
import Config from "../config/config";

const Profile = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [apiKeys, setApiKeys] = useState([]);
  const [apiButtonDiabled, setApiButtonDisabled] = useState(false);
  const [token, setToken] = useState();
  const getApiKeys = () => {
    const headers = { Authorization: `Bearer ${token}` };
    fetch(Config.apiUrl + "/api/key", {
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setApiKeys(data);
      });
  };

  const createApiKey = () => {
    setApiButtonDisabled(true);
    const headers = { Authorization: `Bearer ${token}` };

    fetch(Config.apiUrl + "/api/key", {
      method: "POST",
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setApiKeys((prevState) => {
          return [...prevState, data];
        });
        setApiButtonDisabled(false);
      });
  };

  const deleteApiKey = (apiKey) => {
    const headers = { Authorization: `Bearer ${token}` };

    fetch(`${Config.apiUrl}/api/key?apiKey=${apiKey}`, {
      method: "DELETE",
      headers: headers,
    }).then((res) => {
      if (res.ok) {
        console.log(res.url);
        setApiKeys(apiKeys.filter((item) => item.apiKey !== apiKey));
      }
    });
  };

  useEffect(() => {
    getAccessTokenSilently().then((data) => {
      setToken(data);
    });
    getApiKeys();
  }, [user, token, setToken, getAccessTokenSilently]);

  return (
    <PageContent title="Profile">
      <section className="no-padding-top no-padding-bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="block">
                <div className="title">
                  <strong className="d-block">Hello, {user.nickname}</strong>
                </div>
                <hr></hr>
                <div className="body">
                  <span className="d-block">
                    To get started look below and generate a new Api Key. Api
                    Keys are good for 1 year and must be renewed. You can
                    generate as many as you'd like, but if I see too many I'll
                    cut you off! There are a couple recommendations.
                  </span>
                  <ol>
                    <li>
                      I'd generate one Api Key for each Raspberry Pi. Adding
                      descriptions to Api Key's will be released soon.
                    </li>
                    <li>
                      Don't share your Api Keys. They are uniquely tied to your
                      user. If you give your friend your key, you will see your
                      friends' data....and that's just naughty.
                    </li>
                    <li>
                      Expired Api Keys will appear in your dashboard if they've
                      epxpired. Delete them if you'd like.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="block">
                <div className="title">
                  <strong className="d-block">My Information</strong>
                </div>
                <hr></hr>
                <div className="block-body">
                  <form class="form-horizontal">
                    <div class="form-group row">
                      <label class="col-sm-3 form-control-label">Email</label>
                      <div class="col-sm-9">
                        <input
                          id="inputHorizontalSuccess"
                          type="email"
                          placeholder="Email Address"
                          class="form-control form-control-success"
                          disabled
                          value={user.email}
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-sm-3 form-control-label">
                        Full Name
                      </label>
                      <div class="col-sm-9">
                        <input
                          id="inputHorizontalWarning"
                          type="text"
                          placeholder=""
                          class="form-control form-control-warning"
                          value={user.nickname}
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-sm-9 offset-sm-3">
                        <button class="btn btn-primary">Save</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="block">
                <div className="title">
                  <strong className="d-block">Api Keys </strong>

                  <hr></hr>
                </div>
                <div className="block-body">
                  <button
                    disabled={apiButtonDiabled}
                    type=""
                    onClick={() => createApiKey()}
                    class="btn btn-primary"
                  >
                    Generate Api Key!
                  </button>
                </div>
                {apiKeys.length > 0 && (
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Api Key</th>
                          <th>Expiration Date</th>
                          <th>Creation Date</th>
                          <th>Delete?</th>
                        </tr>
                      </thead>
                      <tbody>
                        {apiKeys.map((a, i) => (
                          <tr key={i}>
                            <td>{a.apiKey}</td>
                            <td>
                              {new Date(a.expirationDate).toLocaleDateString()}
                            </td>
                            <td>
                              {new Date(a.creationDate).toLocaleDateString()}
                            </td>
                            <td>
                              <button
                                type=""
                                class="btn btn-danger"
                                onClick={() => deleteApiKey(a.apiKey)}
                              >
                                Delete Key?
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {apiKeys.length === 0 && (
                  <div className="block-body">
                    <p>
                      <i>
                        We found no Api Keys. Click the button below to create
                        one!
                      </i>
                    </p>
                    <br></br>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-lg-12"></div>
          </div>
        </div>
      </section>
    </PageContent>
  );
};

export default Profile;
