import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
// trigger is for 1d displays
const Chart = ({data}) => {
  return (
    <LineChart width={600} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
      <XAxis dataKey="label" />
      <YAxis domain={['dataMin - 1', 'dataMax + 1']}/>
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="close" stroke="#8884d8" dot={false}/>
    </LineChart>
  );
};

export default Chart;
