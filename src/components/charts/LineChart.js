import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = (props) => {

    let chartConfig = {
        labels: props.labels,
        datasets: [
          {
            label: props.title,
            fill: true,
            lineTension: 0.2,
            backgroundColor: "transparent",
            borderColor: '#864DD9',
            pointBorderColor: '#864DD9',
            pointHoverBackgroundColor: '#864DD9',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            borderWidth: 2,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 7,
            pointHoverRadius: 7,
            pointHoverBorderColor: "#fff",
            pointHoverBorderWidth: 2,
            pointRadius: 2,
            pointHitRadius: 4,
            data: props.data,
            spanGaps: false
          },
        ],
      };
  return (
    <div className="col-lg-8">
      <div className="line-cahrt block">
        <Line data={chartConfig} />
      </div>
    </div>
  );
};
export default LineChart;
