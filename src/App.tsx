import * as React from 'react';
import './App.css';
import { Chart } from "react-google-charts";

function App() {
  return (
    <div className={"my-pretty-chart-container"}>
<Chart
width={1500}
height={300}
chartType="LineChart"
loader={<div>Loading Chart</div>}
data={[
  ['Linux Chrome Min Response Time', 
  'Linux Chrome Max Response Time',
  'Mac Chrome Min Response Time',
  'Mac Chrome Max Response Time',
  'Linux Firefox Min Response Time',
  'Linux Firefox Max Response Time',
  'Mac Firefox Min Response Time',
  'Mac Firefox Max Response Time',
],
  [8175000, 8008000, 8008000, 8008000, 8008000, 8008000, 8008000, 8008000],
  [3792000, 3694000, 8008000, 8008000, 8008000, 8008000, 8008000, 8008000],
  [2695000, 2896000, 8008000, 8008000, 8008000, 8008000, 8008000, 8008000],
  [2099000, 1953000, 8008000, 8008000, 8008000, 8008000, 8008000, 8008000],
  [1526000, 1517000, 8008000, 8008000, 8008000, 8008000, 8008000, 8008000],
]}
options={{
  title: "Neto's Challenge",
  chartArea: { width: '50%' },
  hAxis: {
    title: 'Time',
    minValue: 0,
  },
}}
legendToggle
/>
    </div>
  );
}

export default App;

// <Chart
// width={400}
// height={300}
// chartType="LineChart"
// loader={<div>Loading Chart</div>}
// data={[
//   [
//     { type: 'start', timestamp: 1519780251293, select: ['min_response_time', // 'max_response_time'], group: ['os', 'browser'] },
//     { type: 'span', timestamp: 1519780251293, begin: 1519780251293, end: 1519780260201 },
//     { type: 'data', timestamp: 1519780251000, os: 'linux', browser: 'chrome', // min_response_time: 0.1, max_response_time: 1.3 },
//     { type: 'data', timestamp: 1519780251000, os: 'mac', browser: 'chrome', // min_response_time: 0.2, max_response_time: 1.2 },
//     { type: 'data', timestamp: 1519780251000, os: 'mac', browser: 'firefox', // min_response_time: 0.3, max_response_time: 1.2 },
//     { type: 'data', timestamp: 1519780251000, os: 'linux', browser: 'firefox', // min_response_time: 0.1, max_response_time: 1.0 },
//     { type: 'data', timestamp: 1519780251000, os: 'linux', browser: 'chrome', // min_response_time: 0.2, max_response_time: 0.9 },
//     { type: 'data', timestamp: 1519780251000, os: 'mac', browser: 'chrome', // min_response_time: 0.1, max_response_time: 1.0 },
//     { type: 'data', timestamp: 1519780251000, os: 'mac', browser: 'firefox', // min_response_time: 0.2, max_response_time: 1.1 },
//     { type: 'data', timestamp: 1519780251000, os: 'linux', browser: 'firefox', // min_response_time: 0.3, max_response_time: 1.4 },
//     { type: 'stop', timestamp: 1519780251293 },
//   ],
// ]}
// options={{
//   hAxis: {
//     title: 'Time',
//   },
//   title: "Neto's challenge",
//   intervals: { style: 'sticks' },
//   legend: 'none',
// }}
// rootProps={{ 'data-testid': '1'}}
// />