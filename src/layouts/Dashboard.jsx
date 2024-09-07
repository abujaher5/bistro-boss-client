import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="w-64 min-h-full bg-orange-400">
        <ul>
          <li>
            <NavLink to="/dashboard/cart">My Cart</NavLink>
          </li>
        </ul>
      </div>

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
