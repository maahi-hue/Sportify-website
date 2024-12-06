import { useEffect, useState, useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, loading, handleLogout } = useContext(authContext);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/users?email=${user.email}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch user details");
          }
          return response.json();
        })
        .then((data) => {
          setUserDetails(data);
        })
        .catch((error) => console.error("Error fetching user details:", error));
    }
  }, [user]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  if (loading) {
    return (
      <div className="navbar bg-[#c4bbaf]">
        <div className="navbar-center">Loading...</div>
      </div>
    );
  }

  const displayName = user?.displayName;
  const photoURL = user?.photoURL;

  return (
    <div>
      <div className="navbar bg-[#c4bbaf]">
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
              className="space-x-2 menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "btn bg-[#766153] font-bold text-white"
                    : "btn bg-base-100 font-bold"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/contactUs"
                className={({ isActive }) =>
                  isActive
                    ? "btn bg-[#766153] font-bold text-white"
                    : "btn bg-base-100 font-bold"
                }
              >
                Contact Us
              </NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">EquiSports</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "btn bg-[#766153] font-bold text-white"
                  : "btn bg-base-100 font-bold"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/contactUs"
              className={({ isActive }) =>
                isActive
                  ? "btn bg-[#766153] font-bold text-white"
                  : "btn bg-base-100 font-bold"
              }
            >
              Contact Us
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          {user?.email && userDetails ? (
            <div className="flex justify-between items-center">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar relative"
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      src={photoURL}
                      title={displayName}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <NavLink to="/profile">Profile</NavLink>
                  </li>
                </ul>
              </div>
              <div>
                <button
                  className="btn bg-base-100  hover:bg-[#766153] font-bold hover:text-white"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <NavLink to="/login">
              <a className="btn bg-base-100 hover:bg-[#766153] font-bold hover:text-white">
                Login
              </a>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
