const jwtToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkdWNtaW5ocGhvY29AZ21haWwuY29tIiwidXNlcklkIjoiMDgyOTQxNzAtOWMyMS0xMWVmLWI1YTgtZWQxYWVkOWE2NTFmIiwic2NvcGVzIjpbIlRFTkFOVF9BRE1JTiJdLCJzZXNzaW9uSWQiOiIxMTllZmE2OS1hYmJiLTRmYzMtODYyYi00ZjExMGRkMzIwZTEiLCJleHAiOjE3MzI2ODUxMzksImlzcyI6InRoaW5nc2JvYXJkLmlvIiwiaWF0IjoxNzMwODg1MTM5LCJmaXJzdE5hbWUiOiJuZ3V5ZW4iLCJsYXN0TmFtZSI6ImR1YyBtaW5oIiwiZW5hYmxlZCI6dHJ1ZSwicHJpdmFjeVBvbGljeUFjY2VwdGVkIjp0cnVlLCJpc1B1YmxpYyI6ZmFsc2UsInRlbmFudElkIjoiMDZhYzY1NzAtOWMyMS0xMWVmLWI1YTgtZWQxYWVkOWE2NTFmIiwiY3VzdG9tZXJJZCI6IjEzODE0MDAwLTFkZDItMTFiMi04MDgwLTgwODA4MDgwODA4MCJ9.eE7i2EN-fXGgRgytAru8yWiFTXWfMlRAyhR2KdRUnl2W2-WmOhswSDha9J-NX66Zxi5Gv0CmbZ5xMkG1JC3IIg";

const fetchHistoricalTelemetryData = async (deviceId, key, code) => {
  const currentTime = new Date();
const twel = new Date(currentTime.getTime() - 1 * 60 * 60 * 1000); // 1 giờ trước

const startTimestamp = twel.getTime() 
const endTimestamp = currentTime.getTime() 


  try {

      const response = await fetch(`http://demo.thingsboard.io/api/plugins/telemetry/DEVICE/${deviceId}/values/timeseries?keys=${key}&startTs=${startTimestamp}&endTs=${endTimestamp}&interval=60000&limit=100&agg=${code}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${jwtToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error(`Failed to fetch historical telemetry data for device ${deviceId}`);
      }

  } catch (error) {
    console.error('Error fetching historical telemetry data:', error);
  }
};
export default fetchHistoricalTelemetryData