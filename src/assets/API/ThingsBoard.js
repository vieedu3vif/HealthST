import React, { useEffect, useState } from 'react';


const jwtToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtaW5obGFtdnU2MkBnbWFpbC5jb20iLCJ1c2VySWQiOiJlNWU5MTVjMC1jYjljLTExZjAtYWVkZi02NWEyNTU5YjFkMzYiLCJzY29wZXMiOlsiVEVOQU5UX0FETUlOIl0sInNlc3Npb25JZCI6IjY3NWY4MzllLWY3OTgtNDNkZi1iODI5LTg2MmZiODI3ODlhMyIsImV4cCI6MTc2NjA1MzUyNywiaXNzIjoidGhpbmdzYm9hcmQuaW8iLCJpYXQiOjE3NjQyNTM1MjcsImZpcnN0TmFtZSI6Im1pbmggbGFtIiwibGFzdE5hbWUiOiJ2dSIsImVuYWJsZWQiOnRydWUsInByaXZhY3lQb2xpY3lBY2NlcHRlZCI6dHJ1ZSwiaXNQdWJsaWMiOmZhbHNlLCJ0ZW5hbnRJZCI6ImU1Y2JhMmIwLWNiOWMtMTFmMC1hZWRmLTY1YTI1NTliMWQzNiIsImN1c3RvbWVySWQiOiIxMzgxNDAwMC0xZGQyLTExYjItODA4MC04MDgwODA4MDgwODAifQ.ktgQC287NQX-9vWhM3oLUXT0e7IDOCQdVK1JKP8QhCSPhskTuktUGX80iybhw4k17aMl_Hr6CWl_Zcu0ahWQIA";

const currentTime = new Date();
const oneHourAgo = new Date(currentTime.getTime() - 10 * 60 * 1000);

const startTimestamp = oneHourAgo.getTime();
const endTimestamp = currentTime.getTime();


const ThingsBoard = ({ onDataFetched }) => {
  const [telemetryData, setTelemetryData] = useState({});
  const [historyData, setHistoryData] = useState({});
  const deviceIds = [
    "cc518ae0-cb9f-11f0-aedf-65a2559b1d36",
    "4c1cbb90-cba1-11f0-aedf-65a2559b1d36"  
  ];

  
  const fetchLatestTelemetryData = async () => {
    try {
      const allData = {};

      for (let deviceId of deviceIds) {
        const response = await fetch(`http://demo.thingsboard.io/api/plugins/telemetry/DEVICE/${deviceId}/values/timeseries`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${jwtToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          allData[deviceId] = data;
        } else {
          console.error(`Failed to fetch latest telemetry data for device ${deviceId}`);
        }
      }

      setTelemetryData(allData);  
      onDataFetched(allData);  

    } catch (error) {
      console.error('Error fetching latest telemetry data:', error);
    }
  };

  
  const fetchHistoricalTelemetryData = async () => {
    try {
      const allHistory = {};

      for (let deviceId of deviceIds) {
        const response = await fetch(`http://demo.thingsboard.io/api/plugins/telemetry/DEVICE/${deviceId}/values/timeseries?keys=temperature,humidity&startTs=${startTimestamp}&endTs=${endTimestamp}&limit=100`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${jwtToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          allHistory[deviceId] = data;
        } else {
          console.error(`Failed to fetch historical telemetry data for device ${deviceId}`);
        }
      }

      setHistoryData(allHistory); 

    } catch (error) {
      console.error('Error fetching historical telemetry data:', error);
    }
  };

  useEffect(() => {
    fetchHistoricalTelemetryData();

    const intervalId = setInterval(fetchLatestTelemetryData, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return null;
};

export default ThingsBoard;