import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();

  const noHeaderFooterInLogin = location.pathname.includes("login");
  const noHeaderFooterInRegister = location.pathname.includes("register");
  return (
    <div>
      {noHeaderFooterInLogin || noHeaderFooterInRegister || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooterInLogin || noHeaderFooterInRegister || <Footer></Footer>}
    </div>
  );
};

export default Main;
