import {
  FaCalendar,
  FaHome,
  FaPhone,
  FaShoppingBag,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { MdBookOnline } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="flex gap-2 uppercase">
      {/*  Side bar */}
      <div className="w-64  min-h-full bg-orange-400">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Bistro Boss</h2>
          <h3 className="text-xl tracking-[.4rem] font-semibold ">
            Restaurant
          </h3>
        </div>
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/paymentHistory">
              <FaWallet></FaWallet>
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addReview">
              <VscFeedback />
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myBooking">
              <MdBookOnline />
              My Booking
            </NavLink>
          </li>
          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <IoIosMenu />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaShoppingBag></FaShoppingBag>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaPhone></FaPhone>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/*  Dashboard content */}

      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
