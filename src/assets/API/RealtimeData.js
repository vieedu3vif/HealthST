import React, { useState } from 'react';
import ThingsBoard from './ThingsBoard';
import { View, Text } from 'react-native';

const RealtimeData = () => {
  const [telemetry, setTelemetry] = useState(null);
  const [history, setHistory] = useState([]);

  const handleDataFetched = (data) => {
    setTelemetry(data);  // Cập nhật telemetryData
    setHistory(prevHistory => [...prevHistory, data]);  // Lưu lịch sử dữ liệu
  };

  return (
    <View style={{ padding: 20 }}>
      <ThingsBoard onDataFetched={handleDataFetched} />
      <Text>Dữ liệu nhận được từ ThingsBoard:</Text>
      {telemetry ? (
        <Text>Temperature: {telemetry.temperature?.[0]?.value} °C</Text>
      ) : (
        <Text>Đang tải dữ liệu...</Text>
      )}

      <Text>Lịch sử Dữ liệu:</Text>
      {history.map((data, index) => (
        <Text key={index}>Lần {index + 1}: Temperature: {data.temperature?.[0]?.value} °C</Text>
      ))}
    </View>
  );
};

export default RealtimeData;
