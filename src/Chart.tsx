import Chart from "react-google-charts";

const Charts = () => 
{
  return (
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
      [0.1, 0.2, 0.3, 0.1, 0.2, 0.1, 0.2, 0.3],
      [1.3, 1.2, 1.2, 1.0, 0.9, 1.0, 1.1, 1.4],
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
  )
}

export default Charts;
