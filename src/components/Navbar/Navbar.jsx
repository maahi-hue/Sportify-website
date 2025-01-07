import { useEffect, useState, useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { user, loading, handleLogout } = useContext(authContext);
  const [userDetails, setUserDetails] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://equi-sports-server-kappa.vercel.app/equipments?email=${user.email}`
      )
        .then((response) => response.json())
        .then((data) => {
          setUserDetails(data);
        })
        .catch((error) => console.error("Error fetching equipments:", error));
    }
  }, [user]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="navbar bg-[#c4bbaf]">
        <div className="navbar-center">Loading...</div>
      </div>
    );
  }

  return (
    <div
      className={`navbar sticky top-0 z-50 ${
        isScrolled ? "bg-opacity-80 bg-[#2f3e46]" : "bg-[#2f3e46]"
      } transition-all duration-300 text-white`}
    >
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
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? "btn bg-[#cad2c5] font-bold text-[#2f3e46]"
                  : "btn bg-base-100 font-bold"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive
                  ? "btn bg-[#cad2c5] font-bold text-[#2f3e46]"
                  : "btn bg-base-100 font-bold"
              }
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/support"
              className={({ isActive }) =>
                isActive
                  ? "btn bg-[#cad2c5] font-bold text-[#2f3e46]"
                  : "btn bg-base-100 font-bold"
              }
            >
              Support
            </NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img className="w-40" src={logo} alt="Logo"></img>
        </a>
        <ThemeToggle />
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
            to="/about-us"
            className={({ isActive }) =>
              isActive
                ? "btn bg-[#cad2c5] font-bold text-[#2f3e46]"
                : "btn bg-base-100 font-bold"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive
                ? "btn bg-[#cad2c5] font-bold text-[#2f3e46]"
                : "btn bg-base-100 font-bold"
            }
          >
            Contact Us
          </NavLink>
        </ul>
      </div>

      <div className="navbar-end">
        {user?.email ? (
          <div className="flex justify-between items-center">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar relative"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={user.photoURL}
                    title={user.displayName}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow"
              >
                <NavLink
                  to="/AddEquipments"
                  className="btn bg-base-100 font-bold  hover:bg-[#cad2c5] hover:text-[#2f3e46]"
                >
                  Add Equipment
                </NavLink>
                <NavLink
                  to="/MyEquipments"
                  className="btn bg-base-100 font-bold  hover:bg-[#cad2c5] hover:text-[#2f3e46]"
                >
                  My Equipment List
                </NavLink>
                <button
                  className="btn bg-base-100 font-bold  hover:bg-[#cad2c5] hover:text-[#2f3e46]"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </ul>
            </div>
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
