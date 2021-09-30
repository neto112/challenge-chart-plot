const seconds = 60;
const minutes = 60 * seconds;
const hours = 60 * minutes;
const days = 24 * hours;

const time = {
seconds: seconds,
minutes: minutes,
hours: hours,
days: days
}

const startTime = 1519862400000;
const interval = time.minutes;
const time1 = startTime + 0 * interval;
const time2 = startTime + 1 * interval;
const time3 = startTime + 10 * interval

export const Simulation = {
  dataTxt: `{"type":"start", "timestamp":1519862400000, "select" :["min_response_time", "max_response_time"], "group": ["os", "browser"]}
  {"type":"span", "timestamp":1519862400000, "begin": 1519862400000, "end": 1519864600000}
  {"type":"data", "timestamp":1519862400000, "os": "linux", "browser": "chrome", "min_response_time":0.1, "max_response_time":1.3 }
  {"type":"data", "timestamp":1519862400000, "os": "mac", "browser": "chrome", "min_response_time":0.2, "max_response_time":1.2 }
  {"type":"data", "timestamp":1519862400000, "os": "mac", "browser": "firefox", "min_response_time":0.3, "max_response_time":1.2 }
  {"type":"data", "timestamp":1519862400000, "os": "linux", "browser": "firefox", "min_response_time":0.1, "max_response_time":1.0 }    
  {"type":"data", "timestamp":1519862460000, "os": "linux", "browser": "chrome", "min_response_time":0.2, "max_response_time":0.9 }
  {"type":"data", "timestamp":1519862460000, "os": "mac", "browser": "chrome", "min_response_time":0.1, "max_response_time":1.0 }
  {"type":"data", "timestamp":1519862460000, "os": "mac", "browser": "firefox", "min_response_time":0.2, "max_response_time":1.1 }
  {"type":"data", "timestamp":1519862460000, "os": "linux", "browser": "firefox", "min_response_time":0.3, "max_response_time":1.4 }
  {"type":"stop", "timestamp":151986460000}
  `,

  chartSeries: [
      {
          name: "Series 1",
          type: 'line',
          data: [
              [time1, 0.1],
              [time2, 0.2],
              [time3, 0.3],
          ]
      },
      {
          name: "Series 2",
          type: 'line',
          data: [
              [time1, 0.5],
              [time2, 0.6],
              [time3, 0.7],
          ]
      }]
}