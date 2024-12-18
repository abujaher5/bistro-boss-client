import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosFetch from "../../../hooks/useAxiosFetch";
import { FaTruck, FaUsers, FaWallet } from "react-icons/fa";
import { LuChefHat } from "react-icons/lu";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosFetch();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });
  console.log(chartData);

  // const {} = useQuery({
  //   queryKey: ["order-stats"],
  //   queryFn: async () => {},
  // });

  // custom shape for the bar chart

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // custom shape for the pie chart

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartData.map((data) => {
    return { name: data.category, value: data.revenue };
  });

  return (
    <div>
      <h2 className="font-semibold text-lg">Hi, Welcome Back!</h2>
      <div className="flex justify-evenly ">
        <div className="stats shadow">
          <div className="stat flex gap-3 justify-center items-center  bg-gradient-to-r from-[#BB34F5] to-[#FCDBFFFF] text-white">
            <div>
              <FaWallet className="text-2xl"></FaWallet>
            </div>
            <div>
              <div className="stat-value ">{stats.revenue}</div>
              <div className=" text-white">Revenue</div>
            </div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat flex gap-3 justify-center items-center  bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] text-white">
            <div>
              <FaUsers className="text-2xl"></FaUsers>
            </div>
            <div>
              <div className="stat-value ">{stats.users}</div>
              <div className=" text-white">Customers</div>
            </div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat flex gap-3 justify-center items-center  bg-gradient-to-r from-[#FE4880] to-[#FECDE9] text-white">
            <div>
              <LuChefHat className="text-2xl"></LuChefHat>
            </div>
            <div>
              <div className="stat-value ">{stats.menuItems}</div>
              <div className=" text-white">Products</div>
            </div>
          </div>
        </div>
        <div className="stats shadow">
          <div className="stat flex gap-3 justify-center items-center  bg-gradient-to-r from-[#BB34F5] to-[#FCDBFFFF] text-white">
            <div>
              <FaTruck className="text-2xl"></FaTruck>
            </div>
            <div>
              <div className="stat-value ">{stats.orders}</div>
              <div className=" text-white">Orders</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2">
          <PieChart width={400} height={400}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
