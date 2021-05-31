import React from "react";

const StatisticBlock = (props) => {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="statistic-block block">
        <div className="progress-details d-flex align-items-end justify-content-between">
          <div className="title">
            <div className="icon">
              <i className="icon-user-1"></i>
            </div>
            <strong>{props.title}</strong>
          </div>
          <div className="number dashtext-1">{props.value}</div>
        </div>
        <div className="progress progress-template">
          <div
            role="progressbar"
            style={{width: "30%"}}
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="100"
            className="progress-bar progress-bar-template dashbg-1"
          ></div>
        </div>
      </div>
    </div>
  );
};
export default StatisticBlock;
