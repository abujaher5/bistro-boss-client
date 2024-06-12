import { Link } from "react-router-dom";
import loginImage from "../../assets/others/authentication1.png";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
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
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Type Email"
                  className="input input-bordered"
                  required
                />

                <label>
                  <span className="text-sm text-primary">Reload Captcha</span>
                </label>
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Type Email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn  border-none  bg-[#D1A054B3]">
                  Sign In
                </button>
              </div>

              <div className="text-center space-y-4">
                <p className="text-[#D1A054B3]">
                  New here?
                  <Link to="/register">
                    <a className="font-bold">Create a New Account</a>
                  </Link>
                </p>
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
