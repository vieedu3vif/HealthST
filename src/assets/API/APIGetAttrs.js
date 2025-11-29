const jwtToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtaW5obGFtdnU2MkBnbWFpbC5jb20iLCJ1c2VySWQiOiJlNWU5MTVjMC1jYjljLTExZjAtYWVkZi02NWEyNTU5YjFkMzYiLCJzY29wZXMiOlsiVEVOQU5UX0FETUlOIl0sInNlc3Npb25JZCI6IjY3NWY4MzllLWY3OTgtNDNkZi1iODI5LTg2MmZiODI3ODlhMyIsImV4cCI6MTc2NjA1MzUyNywiaXNzIjoidGhpbmdzYm9hcmQuaW8iLCJpYXQiOjE3NjQyNTM1MjcsImZpcnN0TmFtZSI6Im1pbmggbGFtIiwibGFzdE5hbWUiOiJ2dSIsImVuYWJsZWQiOnRydWUsInByaXZhY3lQb2xpY3lBY2NlcHRlZCI6dHJ1ZSwiaXNQdWJsaWMiOmZhbHNlLCJ0ZW5hbnRJZCI6ImU1Y2JhMmIwLWNiOWMtMTFmMC1hZWRmLTY1YTI1NTliMWQzNiIsImN1c3RvbWVySWQiOiIxMzgxNDAwMC0xZGQyLTExYjItODA4MC04MDgwODA4MDgwODAifQ.ktgQC287NQX-9vWhM3oLUXT0e7IDOCQdVK1JKP8QhCSPhskTuktUGX80iybhw4k17aMl_Hr6CWl_Zcu0ahWQIA";


const fetchLatestTelemetryDataDevice = async (deviceId) => {
    try {
  
        const response = await fetch(`http://demo.thingsboard.io/api/plugins/telemetry/DEVICE/${deviceId}/values/timeseries`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${jwtToken}`,
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          const data = await response.json();
  
          return  data;
        } else {
          console.error(`Failed to fetch latest telemetry data for device ${deviceId}`);
        }
      
  
    } catch (error) {
      console.error('Error fetching latest telemetry data:', error);
    }
  };
  
export default fetchLatestTelemetryDataDevice;