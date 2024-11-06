import React, { useEffect, useState } from 'react';

// JWT Token của bạn
const jwtToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkdWNtaW5ocGhvY29AZ21haWwuY29tIiwidXNlcklkIjoiMDgyOTQxNzAtOWMyMS0xMWVmLWI1YTgtZWQxYWVkOWE2NTFmIiwic2NvcGVzIjpbIlRFTkFOVF9BRE1JTiJdLCJzZXNzaW9uSWQiOiIxMTllZmE2OS1hYmJiLTRmYzMtODYyYi00ZjExMGRkMzIwZTEiLCJleHAiOjE3MzI2ODUxMzksImlzcyI6InRoaW5nc2JvYXJkLmlvIiwiaWF0IjoxNzMwODg1MTM5LCJmaXJzdE5hbWUiOiJuZ3V5ZW4iLCJsYXN0TmFtZSI6ImR1YyBtaW5oIiwiZW5hYmxlZCI6dHJ1ZSwicHJpdmFjeVBvbGljeUFjY2VwdGVkIjp0cnVlLCJpc1B1YmxpYyI6ZmFsc2UsInRlbmFudElkIjoiMDZhYzY1NzAtOWMyMS0xMWVmLWI1YTgtZWQxYWVkOWE2NTFmIiwiY3VzdG9tZXJJZCI6IjEzODE0MDAwLTFkZDItMTFiMi04MDgwLTgwODA4MDgwODA4MCJ9.eE7i2EN-fXGgRgytAru8yWiFTXWfMlRAyhR2KdRUnl2W2-WmOhswSDha9J-NX66Zxi5Gv0CmbZ5xMkG1JC3IIg";  // Thay YOUR_JWT_TOKEN bằng JWT Token của bạn

const currentTime = new Date();
const oneHourAgo = new Date(currentTime.getTime() - 10 * 60 * 1000);  

const startTimestamp = oneHourAgo.getTime();
const endTimestamp = currentTime.getTime();



const ThingsBoard = ({ onDataFetched }) => {
  const [telemetryData, setTelemetryData] = useState(null);
  const [historyData, setHistoryData] = useState([]);  // State để lưu trữ dữ liệu lịch sử

  // Hàm để lấy dữ liệu Telemetry mới nhất
  const fetchLatestTelemetryData = async () => {
    try {
      const response = await fetch(`http://demo.thingsboard.io/api/plugins/telemetry/DEVICE/c7826090-9c28-11ef-b5a8-ed1aed9a651f/values/timeseries`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${jwtToken}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        setTelemetryData(data);  // Lưu dữ liệu mới nhất
        onDataFetched(data);  // Truyền dữ liệu lên component cha
      } else {
        console.error('Failed to fetch latest telemetry data:', data);
      }
    } catch (error) {
      console.error('Error fetching latest telemetry data:', error);
    }
  };

  // Hàm để lấy dữ liệu Telemetry lịch sử
  const fetchHistoricalTelemetryData = async () => {
    try {
      const response = await fetch(`http://demo.thingsboard.io/api/plugins/telemetry/DEVICE/c7826090-9c28-11ef-b5a8-ed1aed9a651f/values/timeseries?keys=temperature,humidity&startTs=${startTimestamp}&endTs=${endTimestamp}&limit=100`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${jwtToken}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        setHistoryData(prevData => [...prevData, data]);  // Lưu dữ liệu lịch sử vào mảng historyData
      } else {
        console.error('Failed to fetch historical telemetry data:', data);
      }
    } catch (error) {
      console.error('Error fetching historical telemetry data:', error);
    }
  };

  useEffect(() => {
    fetchLatestTelemetryData();  // Gọi để lấy dữ liệu mới nhất
    fetchHistoricalTelemetryData();  // Gọi để lấy dữ liệu lịch sử
  }, []);

  return null;  // Không cần hiển thị dữ liệu ngay, chỉ cần lưu lại
};

export default ThingsBoard;
