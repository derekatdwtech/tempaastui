import React from "react";
import DateTimePicker from "react-datetime-picker";

const PageHeader = (props) => {
  if(props.title !== "" || props.title !== undefined) {
  return (
    <div className="page-header">
      <div className="container-fluid">
        <h2 className="h5 no-margin-bottom">
          {props.title}
        </h2>
      </div>
    </div>
  );
  }
  else {
    return <div></div>
  }
};

export default PageHeader;
