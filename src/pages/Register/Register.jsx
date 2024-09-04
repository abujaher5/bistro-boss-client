import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import registerImg from "../../assets/others/authentication2.png";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("user profile info updated");
          reset();
          Swal.fire({
            position: "top-left",
            icon: "success",
            title: "User Profile Update Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="  bg-base-200">
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>
      <div className="flex justify-evenly items-center gap-5 md:gap-0 p-20 flex-col  lg:flex-row-reverse">
        <div>
          <img className="h-[250px] w-[450px]" src={registerImg} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="text-center ">
            <h1 className="text-5xl p-6 font-bold">Please Register !</h1>
          </div>

          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  placeholder="Type Name"
                  className="input input-bordered"
                />

                {errors.name?.type === "required" && (
                  <p className="text-red-400">Name is required</p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", {
                    required: true,
                  })}
                  placeholder="photo URL"
                  name="photoURL"
                  className="input input-bordered"
                />
                {errors.photoURL?.type === "required" && (
                  <p className="text-red-400">Photo URL is required</p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", {
                    required: true,
                  })}
                  type="email"
                  placeholder="Type Email"
                  className="input input-bordered"
                />

                {errors.email?.type === "required" && (
                  <p className="text-red-400">Email is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                  })}
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-400">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-400">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-400">
                    Password must less then 20 characters
                  </p>
                )}

                {errors.password?.type === "pattern" && (
                  <p className="text-red-400">
                    Password must have one upper case, one lower case,one number
                    and one special characters
                  </p>
                )}
              </div>

              <div className="form-control mt-6">
                <button className="btn  border-none  bg-[#D1A054B3]">
                  Register
                </button>
              </div>

              <div className="text-center space-y-4">
                <div className="text-[#D1A054B3]">
                  Already have an account !
                  <Link to="/login">
                    <p className="font-bold">Go to Login</p>
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

export default Register;
