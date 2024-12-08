import { useEffect, useState, useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = () => {
  const { user, loading, handleLogout } = useContext(authContext);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/equipments?email=${user.email}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch equipment data");
          }
          return response.json();
        })
        .then((data) => {
          setUserDetails(data);
        })
        .catch((error) => console.error("Error fetching equipments:", error));
    }
  }, [user]);

  if (loading) {
    return (
      <div className="navbar bg-[#c4bbaf]">
        <div className="navbar-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="navbar bg-[#2f3e46] text-white">
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
                  ? "btn bg-[#cad2c5] font-bold text-[#2f3e46]"
                  : "btn bg-base-100 font-bold"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/AllEquipments"
              className={({ isActive }) =>
                isActive
                  ? "btn bg-[#cad2c5] font-bold text-[#2f3e46]"
                  : "btn bg-base-100 font-bold"
              }
            >
              All Sports Equipments
            </NavLink>
            <NavLink
              to="/AddEquipments"
              className={({ isActive }) =>
                isActive
                  ? "btn bg-[#cad2c5] font-bold text-[#2f3e46]"
                  : "btn bg-base-100 font-bold"
              }
            >
              Add Equipment
            </NavLink>
            <NavLink
              to="/MyEquipments"
              className={({ isActive }) =>
                isActive
                  ? "btn bg-[#cad2c5] font-bold text-[#2f3e46]"
                  : "btn bg-base-100 font-bold"
              }
            >
              My Equipment List
            </NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">EquiSports</a>
        <ThemeToggle></ThemeToggle>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "btn bg-[#cad2c5] font-bold text-[#2f3e46]"
                : "btn bg-base-100 font-bold"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/AllEquipments"
            className={({ isActive }) =>
              isActive
                ? "btn bg-[#cad2c5] font-bold text-[#2f3e46]"
                : "btn bg-base-100 font-bold"
            }
          >
            All Sports Equipments
          </NavLink>
          <NavLink
            to="/AddEquipments"
            className={({ isActive }) =>
              isActive
                ? "btn bg-[#cad2c5] font-bold text-[#2f3e46]"
                : "btn bg-base-100 font-bold"
            }
          >
            Add Equipment
          </NavLink>
          <NavLink
            to="/MyEquipments"
            className={({ isActive }) =>
              isActive
                ? "btn bg-[#cad2c5] font-bold text-[#2f3e46]"
                : "btn bg-base-100 font-bold"
            }
          >
            My Equipment List
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex justify-between items-center">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar relative"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={userDetails?.photoURL}
                    title={userDetails?.displayName}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            <button
              className="btn bg-base-100 hover:bg-[#cad2c5] font-bold hover:text-[#2f3e46]"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <NavLink to="/login">
              <button className="btn bg-base-100 hover:bg-[#cad2c5] font-bold hover:text-[#2f3e46]">
                Login
              </button>
            </NavLink>
            <NavLink to="/register">
              <button className="btn bg-base-100 hover:bg-[#cad2c5] font-bold hover:text-[#2f3e46]">
                Register
              </button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
