import React from "react";

const ModalHeader = (props) => {
  return (
    <div className="modal-header">
      <strong id="exampleModalLabel" className="modal-title">
        {props.title}
      </strong>
      <button
        type="button"
        data-dismiss="modal"
        aria-label="Close"
        className="close"
        onClick={() => props.handleClose()}
      >
        <span aria-hidden="true" >×</span>
      </button>
    </div>
  );
};
export default ModalHeader;
