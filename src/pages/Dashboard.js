import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import LineChart from "../components/charts/LineChart";
import StatisticBlock from "../components/charts/StatisticBlock";
import PageContent from "../components/layout/PageContent";
import Config from "../config/config";
import Loader from "./loading";

const Dashboard = () => {
  const now = new Date();
  const [tempData, setTempData] = useState([]);
  const [tempLabels, setTempLabels] = useState();
  const [probes, setProbes] = useState([]);
  const [startTimeFilter, setStartTimeFilter] = useState(
    new Date(now).toISOString()
  );
  const [endTimeFilter, setEndTimeFilter] = useState(
    new Date(now.setMinutes(now.getMinutes() - 60)).toISOString()
  );

  const { getAccessTokenSilently } = useAuth0();
  const [isLoading, setIsLoading] = useState(true);

  const getTemperatureData = (probe, startTime, endTime) => {
    let labels = [];
    let readings = [];
    setIsLoading(true);
    fetch(
      `${Config.apiUrl}/temperature?probeName=${probe}&startTime=${endTime}&endTime=${startTime}`
    )
      .then((res) => {
        if (res.ok) {
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
        setIsLoading(false);
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

  useEffect(async () => {
    const token = await getAccessTokenSilently();
    let headers = { Authorization: `Bearer ${token}` };
    await fetch(`${Config.apiUrl}/api/probe/config/list`, {
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        setProbes(data);
        let probe = data[0].rowKey;
        getTemperatureData(probe, startTimeFilter, endTimeFilter);
      });

    console.log(startTimeFilter, endTimeFilter);
  }, []);

  return (
    <PageContent title="Dashboard" showFilters={true} isLoading={isLoading}>
        <section className="no-padding-top no-padding-bottom">
          <div className="container-fluid">
            <div className="row">
              <StatisticBlock
                title="Devices Active"
                value={probes.length}
                icon={"icon-computer"}
              />
              <StatisticBlock
                title="Average Temperature"
                value={average(tempData)}
                icon="fa fa-calculator"
              />
              <StatisticBlock
                title="Recent Alerts"
                value={5}
                icon="fa fa-bell-o"
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

export default Dashboard;
