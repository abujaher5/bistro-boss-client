import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();

  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contactUs">Contact Us</Link>
      </li>
      <li>
        <a>Dashboard</a>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      {
        // user ? 'true' : 'false'
        // user ? condition ? 'double true' : 'one true' : 'false'
      }
      {user && isAdmin && (
        <li>
          <Link to="/dashboard/adminHome">Dashboard</Link>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link to="/dashboard/userHome">Dashboard</Link>
        </li>
      )}
      <li>
        <Link to="/dashboard/cart">
          <button className="btn">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>

      {user ? (
        <>
          <li>
            <button onClick={handleLogOut}>Log Out</button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-10 text-white max-w-7xl bg-opacity-30 bg-red-800">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-black bg-base-100 rounded-box w-40"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  flex items-center justify-center">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn">
          Login
        </Link>
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
