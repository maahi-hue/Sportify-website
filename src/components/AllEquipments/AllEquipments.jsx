import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import EquipmentCard from "../EquipmentCard/EquipmentCard";

const AllEquipments = () => {
  const equipments = useLoaderData();
  const [sortedEquipments, setSortedEquipments] = useState(equipments);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const sortEquipments = (order) => {
    const sorted = [...sortedEquipments].sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
      const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));
      return order === "asc" ? priceA - priceB : priceB - priceA;
    });
    setSortedEquipments(sorted);
    setDropdownOpen(false); // Close dropdown after sorting
  };

  return (
    <div className="m-20">
      <h1 className="text-3xl font-bold text-center mb-6">All Equipments</h1>

      {/* Dropdown for Sorting */}
      <div className="flex justify-center mb-6">
        <div className="relative inline-block">
          <button
            className="btn bg-[#84a98c] text-white font-bold px-4 py-2 rounded-lg hover:bg-[#354f52] hover:text-[#cad2c5]"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            Sort
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-5 h-5 ml-2 inline-block transform transition-transform ${
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
            <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-10">
              <li>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-[#84a98c] hover:text-white"
                  onClick={() => sortEquipments("asc")}
                >
                  Price: Low to High
                </button>
              </li>
              <li>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-[#84a98c] hover:text-white"
                  onClick={() => sortEquipments("desc")}
                >
                  Price: High to Low
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Equipment Cards */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 p-6 mx-auto w-11/12">
        {sortedEquipments.map((equipment) => (
          <EquipmentCard key={equipment._id} equipment={equipment} />
        ))}
      </div>
    </div>
  );
};

export default AllEquipments;
