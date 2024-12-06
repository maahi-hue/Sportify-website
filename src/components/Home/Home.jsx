import { useLoaderData } from "react-router-dom";
import EquipmentCard from "../EquipmentCard/EquipmentCard";
import { useState } from "react";
import Banner from "../Banner/Banner";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import SportsJourney from "../SportsJourney/SportsJourney";
import { Slide } from "react-awesome-reveal";

const Home = () => {
  const equipments = useLoaderData();
  const [filteredEquipments, setFilteredEquipments] = useState(equipments);

  const categories = [
    "All",
    ...new Set(equipments.map((equipment) => equipment.categoryName)),
  ];

  const handleCategoryClick = (category) => {
    if (category === "All") {
      setFilteredEquipments(equipments);
    } else {
      setFilteredEquipments(
        equipments.filter((equipment) => equipment.categoryName === category)
      );
    }
  };

  return (
    <div className="mx-10">
      <Banner></Banner>
      <Slide>
        <h1 className="text-3xl font-bold text-center mb-10">Equipments</h1>
      </Slide>
      <div className="flex">
        <div className="w-1/4 p-4 border-r border-gray-300">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <ul className="space-y-3">
            {categories.map((category, index) => (
              <li key={index}>
                <button
                  onClick={() => handleCategoryClick(category)}
                  className="w-full py-2 px-4 text-left font-semibold bg-gray-100 rounded hover:bg-[#766153] hover:text-white"
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/4 grid md:grid-cols-2 grid-cols-1 gap-6 p-6 mx-auto">
          {filteredEquipments.map((equipment) => (
            <EquipmentCard
              key={equipment._id}
              equipment={equipment}
            ></EquipmentCard>
          ))}
        </div>
      </div>
      <WhyChooseUs />
      <SportsJourney />
    </div>
  );
};

export default Home;
