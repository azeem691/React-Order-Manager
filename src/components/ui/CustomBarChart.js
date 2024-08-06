import Theme from "../../Util/theme";
import { data } from "../../Util/GraphData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';



const CustomBarChart = () => {
  return (
    <div className="bar-chart-container p-4 card" style={{ width: '100%', height: 300, backgroundColor: Theme.secondaryColor}}>
      <h3 className="text-white">Activity</h3>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 25, right: 0, left: 0, bottom: 25,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fill: 'white' }} />
          <YAxis tick={{ fill: 'white' }} />
          <Tooltip />
          <Bar dataKey="uv" fill="#7294ff" radius={[10, 10, 10, 10]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
