import React from "react";
import DateTimePicker from "react-datetime-picker";

const PageHeader = (props) => {
  return (
    <div className="page-header">
      <div className="container-fluid">
        <h2 className="h5 no-margin-bottom">
          {props.title}
        </h2>
      </div>
    </div>
  );
};

export default PageHeader;
