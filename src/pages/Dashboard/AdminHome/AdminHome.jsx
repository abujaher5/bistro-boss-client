import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosFetch from "../../../hooks/useAxiosFetch";
import { FaTruck, FaUsers, FaWallet } from "react-icons/fa";
import { LuChefHat } from "react-icons/lu";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosFetch();

  const { data: stats = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  console.log(stats.users);
  console.log(stats.revenue);
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
    </div>
  );
};

export default AdminHome;
