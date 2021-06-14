import React from "react";
import ModalBody from "./components/ModalBody";
import ModalHeader from "./components/ModalHeader";

const Modal = ({ handleClose, show, children, title }) => {
  const modalClass = show
    ? "modal-open modal fade text-left show"
    : "modal fade text-left";

  const modalStyle = show ? { display: "block" } : { display: "none" };

  return (
    <div
      id="myModal"
      role="dialog"
      aria-modal="true"
      style={modalStyle}
      className={modalClass}
    >
      <div role="document" className="modal-dialog">
        <div className="modal-content">
          <ModalHeader title={title} handleClose={()=> handleClose()}></ModalHeader>
          <ModalBody>{children}</ModalBody>
          <div className="modal-footer">
            <button
              type="button"
              data-dismiss="modal"
              className="btn btn-secondary"
              onClick={() => handleClose()}
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
export default Modal;
