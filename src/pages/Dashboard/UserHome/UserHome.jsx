import { FaHome, FaPhone } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="uppercase text-2xl font-semibold mb-8">
        Hi, Welcome Back!
      </h2>
      <div className="flex justify-evenly text-white gap-4">
        <div className=" flex justify-center items-center bg-gradient-to-r from-[#BB34F5] to-[#FCDBFFFF]  gap-4 p-10 rounded-lg w-full">
          <div className="flex justify-center text-4xl items-center">
            <FaHome></FaHome>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold">205</h2>
            <p>Menu</p>
          </div>
        </div>
        <div className=" flex justify-center items-center bg-gradient-to-r from-[#D3A256] to-[#D3A256FF]  gap-4 p-10 rounded-lg w-full">
          <div className="flex justify-center text-4xl items-center">
            <FaHome></FaHome>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold">103</h2>
            <p>Shop</p>
          </div>
        </div>
        <div className=" flex justify-center items-center bg-gradient-to-r from-[#FE4880] to-[#FECDE9FF]  gap-4 p-10 rounded-lg w-full">
          <div className="flex justify-center text-4xl items-center">
            <FaPhone></FaPhone>
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold">03</h2>
            <p>Contact</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-10   ">
        <div className="flex flex-col justify-center items-center bg-[#FFEDD5]  border-r-4 gap-6 py-8  border-[#D1A054] w-1/2">
          <div className="rounded-full border-2 h-[130px] w-[130px] border-[#D1A054] bg-white p-12">
            hi
          </div>
          <span className="font-semibold">
            {user?.displayName ? user.displayName : "Back"}
          </span>
        </div>
        <div
          className="flex justify-center  flex-col  
        bg-[#FEF9C3] text-start  w-1/2 py-8 pl-10 space-y-6"
        >
          <h2 className="font-semibold text-2xl">Your Activity</h2>

          <div>
            <p>Orders </p>
            <p>Reviews </p>
            <p>Bookings </p>
            <p>Payments </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
