import { Link } from "react-router-dom";
import loginImage from "../../assets/others/authentication1.png";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";

const Login = () => {
  const captchaRef = useRef(null);

  const [disable, setDisable] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(2);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const captcha = form.captcha.value;
    console.log(email, password, captcha);
  };
  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;

    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      alert("Captcha Does Not Match");
      setDisable(true);
    }
  };

  return (
    <div className="  bg-base-200">
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
              <div className="form-control">
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
              <div className="form-control">
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

              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  ref={captchaRef}
                  name="captcha"
                  placeholder="Enter Captcha"
                  className="input input-bordered"
                  required
                />

                <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-xs mt-2"
                >
                  Validate
                </button>
              </div>

              <div className="form-control mt-6">
                <button
                  disabled={disable}
                  className="btn  border-none  bg-[#D1A054B3]"
                >
                  Sign In
                </button>
              </div>

              <div className="text-center space-y-4">
                <div className="text-[#D1A054B3]">
                  New here?
                  <Link to="/register">
                    <p className="font-bold">Create a New Account</p>
                  </Link>
                </div>
                <p className="font-semibold">Or sign in with</p>
                <p className="flex items-center justify-center  text-2xl gap-4">
                  <FaFacebook></FaFacebook>
                  <FaGoogle></FaGoogle>
                  <FaGithub></FaGithub>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
