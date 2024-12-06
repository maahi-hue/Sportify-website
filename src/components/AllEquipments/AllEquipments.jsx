import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import EquipmentCard from "../EquipmentCard/EquipmentCard";

const AllEquipments = () => {
  const equipments = useLoaderData();
  const [sortedEquipments, setSortedEquipments] = useState(equipments);

  const sortEquipments = (order) => {
    const sorted = [...sortedEquipments].sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
      const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));
      return order === "asc" ? priceA - priceB : priceB - priceA;
    });
    setSortedEquipments(sorted);
  };

  return (
    <div className="m-20">
      <h1 className="text-3xl font-bold text-center mb-6">All Equipments</h1>

      <div className="flex justify-center gap-4 mb-6">
        <button
          className="btn bg-[#84a98c] text-white font-bold hover:bg-[#354f52] hover:text-[#cad2c5]"
          onClick={() => sortEquipments("asc")}
        >
          Sort by Price (Low to High)
        </button>
        <button
          className="btn bg-[#84a98c] text-white font-bold hover:bg-[#354f52] hover:text-[#cad2c5]"
          onClick={() => sortEquipments("desc")}
        >
          Sort by Price (High to Low)
        </button>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 p-6 mx-auto w-11/12">
        {sortedEquipments.map((equipment) => (
          <EquipmentCard
            key={equipment._id}
            equipment={equipment}
          ></EquipmentCard>
        ))}
      </div>
    </div>
  );
};

export default AllEquipments;
