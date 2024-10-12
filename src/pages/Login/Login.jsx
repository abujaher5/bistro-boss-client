import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../assets/others/authentication1.png";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  // const captchaRef = useRef(null);
  const [disable, setDisable] = useState(true);
  const { logIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // console.log("state in the location", location.state);

  useEffect(() => {
    loadCaptchaEnginge(4);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const captcha = form.captcha.value;
    console.log(email, password, captcha);

    logIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Log In Successfully",

        showClass: {
          popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
          `,
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
          `,
        },
      });
      navigate(from, { replace: true });
    });
  };

  const handleValidateCaptcha = (e) => {
    // const user_captcha_value = captchaRef.current.value;
    const user_captcha_value = e.target.value;

    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      alert("Captcha Does Not Match");
      setDisable(true);
    }
  };

  return (
    <div className="  bg-base-200">
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="flex justify-evenly items-center gap-5 md:gap-0 p-20 flex-col  lg:flex-row">
        <div>
          <img className="h-[250px] w-[450px]" src={loginImage} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div>
            <form onSubmit={handleLogin} className="card-body">
              <div className="from-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="from-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="from-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  // ref={captchaRef}
                  name="captcha"
                  placeholder="Enter Captcha"
                  className="input input-bordered"
                  required
                />

                {/* <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-xs mt-2"
                >
                  Validate
                </button> 
                
                // if need to validate captcha
                */}
              </div>

              <div className="from-control mt-6">
                <input
                  type="submit"
                  disabled={disable}
                  className="btn  border-none  bg-[#D1A054B3] w-full"
                  value="Sign In"
                />
                {/* <button
                  disabled={disable}
                  className="btn  border-none  bg-[#D1A054B3]"
                >
                  Sign In
                </button> */}
              </div>

              <div className="text-center space-y-4">
                <div>
                  <p className="text-[#D1A054B3]">New here?</p>
                  <Link to="/register">
                    <p className="font-bold text-[#D1A054B3]">
                      Create a New Account
                    </p>
                  </Link>
                </div>
                <div className="mt-2">
                  <SocialLogin></SocialLogin>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
