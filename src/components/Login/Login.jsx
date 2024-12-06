import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { handleGoogleLogin, handleLogin } = useContext(authContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    handleLogin(email, password)
      .then(() => {
        toast.success("Login Successful!");
        navigate(location.state?.from || "/");
      })
      .catch((err) => {
        toast.error(err.message || "An error occurred during login.");
      });
  };

  const googleLoginHandler = () => {
    handleGoogleLogin()
      .then(() => {
        toast.success("Login Successful!");
        navigate(location.state?.from || "/");
      })
      .catch((err) => {
        toast.error(err.message || "An error occurred during login.");
      });
  };

  return (
    <div className="w-5/12 mx-auto p-6">
      <form onSubmit={handleSubmit}>
        <h1 className="mb-4 font-bold text-3xl text-center">Login Form</h1>
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input
            type="email"
            className="grow text-xs md:text-base"
            placeholder="name@gmail.com"
            name="email"
            required
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          Password
          <input
            type="password"
            className="grow text-xs md:text-base"
            placeholder="........."
            name="password"
            required
          />
        </label>
        <button
          type="submit"
          className="btn bg-base-100  hover:bg-[#766153] font-bold hover:text-white w-full mt-2"
        >
          Login
        </button>
        {error && <p className="text-red-500">{error}</p>}
        <p className="mt-2 font-semibold">
          Not Registered?
          <NavLink className="text-red-600" to="/register">
            Register here
          </NavLink>
        </p>

        <p className="mt-2 font-semibold">
          Login using
          <button className="text-red-600" onClick={googleLoginHandler}>
            Google Account
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
