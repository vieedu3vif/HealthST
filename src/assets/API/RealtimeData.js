import React, { useState } from 'react';
import ThingsBoard from './ThingsBoard';
import { View, Text } from 'react-native';

const RealtimeData = () => {
  const [telemetry, setTelemetry] = useState({});
  const [history, setHistory] = useState({});

  const handleDataFetched = (data) => {
    setTelemetry(data); 
    setHistory((prevHistory) => {
      const newHistory = { ...prevHistory };
      for (let deviceId in data) {
        newHistory[deviceId] = (newHistory[deviceId] || []).concat(data[deviceId]);
      }
      return newHistory;
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <ThingsBoard onDataFetched={handleDataFetched} />

      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>
        Dữ liệu nhận được từ ThingsBoard:
      </Text>

      {Object.keys(telemetry).length ? (
        Object.keys(telemetry).map((deviceId) => (
          <View key={deviceId} style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Device ID: {deviceId}</Text>
            <Text>Temperature: {telemetry[deviceId].temperature?.[0]?.value} °C</Text>
            <Text>Node ID: {telemetry[deviceId].node_id?.[0]?.value}</Text>
            <Text>SpO2: {telemetry[deviceId].spo2?.[0]?.value} %</Text>
            <Text>Heart Rate: {telemetry[deviceId].heart_rate?.[0]?.value} BPM</Text>
          </View>
        ))
      ) : (
        <Text>Đang tải dữ liệu...</Text>
      )}
    </View>
  );
};

export default RealtimeData;
