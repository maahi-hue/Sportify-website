import { useLoaderData } from "react-router-dom";
import EquipmentCard from "../EquipmentCard/EquipmentCard";
import { useState } from "react";
import Banner from "../Banner/Banner";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import SportsJourney from "../SportsJourney/SportsJourney";
import { Slide } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  const equipments = useLoaderData() || [];
  const [filteredEquipments, setFilteredEquipments] = useState(equipments);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categories = [
    "All",
    ...(Array.isArray(equipments)
      ? [...new Set(equipments.map((equipment) => equipment.categoryName))]
      : []),
  ];

  const handleCategoryClick = (category) => {
    if (category === "All") {
      setFilteredEquipments(equipments);
    } else {
      setFilteredEquipments(
        equipments.filter((equipment) => equipment.categoryName === category)
      );
    }
    setDropdownOpen(false);
  };

  if (!Array.isArray(equipments)) {
    return <p>Error loading data. Please try again later.</p>;
  }

  return (
    <div>
      <div className="h-[60vh]">
        <Banner />
      </div>

      <div className="bg-[#52796f] p-7">
        <Slide>
          <h1 className="text-3xl font-bold text-center mt-4">Equipments</h1>
        </Slide>

        <div className="p-4 bg-[#52796f]">
          <div className="relative inline-block">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center bg-base-100 font-semibold py-2 px-4 rounded hover:bg-[#cad2c5]"
            >
              Categories
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 ml-2 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <ul className="absolute z-10 mt-2 bg-white border border-gray-300 rounded shadow-lg w-48">
                {categories.map((category, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleCategoryClick(category)}
                      className="block w-full text-left px-4 py-2 hover:bg-[#cad2c5] hover:text-[#2f3e46]"
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 p-6 bg-[#52796f] mx-auto">
          {filteredEquipments.map((equipment) => (
            <EquipmentCard
              key={equipment._id}
              equipment={equipment}
            ></EquipmentCard>
          ))}
        </div>

        <div className="flex justify-center my-6">
          <NavLink to="/AllEquipments">
            <button className="btn bg-[#cad2c5] text-[#2f3e46] hover:bg-[#2f3e46] hover:text-[#cad2c5] font-bold transition-colors duration-300">
              See All Equipments
            </button>
          </NavLink>
        </div>
      </div>

      <WhyChooseUs />
      <SportsJourney />
      <div className="bg-[#cad2c5] p-7">
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
