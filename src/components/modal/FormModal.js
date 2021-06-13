import React from "react";

const FormModal = (props) => {
  return (
    <div
      id="myModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      className="modal fade text-left"
    >
      <div role="document" className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <strong id="exampleModalLabel" className="modal-title">
              Signin Modal
            </strong>
            <button
              type="button"
              data-dismiss="modal"
              aria-label="Close"
              className="close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <form>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input type="submit" value="Signin" className="btn btn-primary" />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              data-dismiss="modal"
              className="btn btn-secondary"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormModal;