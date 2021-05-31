import React, { useEffect, useState } from "react";
import LineChart from "../components/charts/LineChart";
import StatisticBlock from "../components/charts/StatisticBlock";
import PageContent from "../components/layout/PageContent";
import Config from "../config/config";
import {withAuthenticationRequired} from '@auth0/auth0-react';

const Dashboard = () => {
  const now = new Date();
  const [tempData, setTempData] = useState([]);
  const [tempLabels, setTempLabels] = useState();
  const [startTimeFilter, setStartTimeFilter] = useState(
    new Date(now).toISOString()
  );
  const [endTimeFilter, setEndTimeFilter] = useState(
    new Date(now.setMinutes(now.getMinutes() - 60)).toISOString()
  );

  const getTemperatureDate = (startTime, endTime) => {
    let labels = [];
    let readings = [];
    fetch(
      `${Config.apiUrl}/temperature?probeName=${Config.deviceId}&startTime=${endTime}&endTime=${startTime}`
    )
      .then((res) => {
        if (res.ok) {
          console.log(res.url);
          return res.json();
        } else {
          console.log(res.json());
        }
      })
      .then((data) => {
        data.map((d, i) => {
          labels.push(d.time);
        });

        data.map((d, i) => {
          readings.push(+d.temp_c);
        });
        setTempData(readings);
        setTempLabels(labels);
      });
  };

  const average = (numbers) => {
    var sum = 0;
    if (numbers.length > 0) {
      for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return (sum / numbers.length).toFixed(2);
    } else {
      return sum;
    }
  };

  useEffect(() => {
    getTemperatureDate(startTimeFilter, endTimeFilter);
  }, []);
  return (
    <PageContent title="Dashboard" showFilters={true}>
      <section className="no-padding-top no-padding-bottom">
        <div className="container-fluid">
          <div className="row">
            <StatisticBlock title="Temperature Probes Active" value={1} />
            <StatisticBlock
              title="Average Temperature"
              value={average(tempData)}
            />
          </div>
          <div className="row">
            <LineChart
              data={tempData}
              labels={tempLabels}
              title="Temperature"
            ></LineChart>
          </div>
        </div>
      </section>
    </PageContent>
  );
};

export default withAuthenticationRequired(Dashboard, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => (<div>Redirecting you to the login page...</div>)
});
