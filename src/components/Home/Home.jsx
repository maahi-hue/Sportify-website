import { useLoaderData } from "react-router-dom";
import EquipmentCard from "../EquipmentCard/EquipmentCard";

const Home = () => {
  const equipments = useLoaderData();
  return (
    <div className="m-20">
      <h1 className="text-3xl font-bold text-center">Equipments</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 p-6 mx-auto w-11/12 ">
        {equipments.map((equipment) => (
          <EquipmentCard
            key={equipment._id}
            equipment={equipment}
          ></EquipmentCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
