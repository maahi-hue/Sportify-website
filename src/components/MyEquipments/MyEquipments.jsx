import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const MyEquipments = () => {
  const [equipmentList, setEquipmentList] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const { user } = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      const fetchEquipment = async () => {
        const res = await fetch(
          `http://localhost:5000/equipments?email=${user.email}`
        );
        const data = await res.json();
        setEquipmentList(data);
      };

      fetchEquipment();
    }
  }, [user?.email]);

  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:5000/equipments/${deleteId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setEquipmentList(equipmentList.filter((item) => item._id !== deleteId));
        setDeleteId(null);
      }
    } catch (error) {
      console.error("Error deleting equipment:", error);
    }
  };

  return (
    <div className="m-10">
      <h1 className="text-2xl font-bold mb-5">My Equipment List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {equipmentList.map((equipment) => (
          <div
            key={equipment._id}
            className="card bg-base-100 shadow-lg p-5 flex flex-row justify-center items-center gap-2"
          >
            <div className="w-1/3">
              <img
                src={equipment.image}
                alt={equipment.itemName}
                className="rounded mb-4"
              />
            </div>

            <div className="w-1/3 space-y-2 text-center">
              <div>
                <h2 className="text-2xl font-bold">{equipment.itemName}</h2>
              </div>{" "}
              <div className="text-sm">
                <p>{equipment.description}</p>
              </div>
              <div className="text-sm">
                <p>Price: {equipment.price}</p>
              </div>
            </div>
            <div className=" w-1/3 flex flex-col">
              <button
                className="btn hover:bg-[#354f52] hover:text-[#cad2c5] font-bold "
                onClick={() => navigate(`/update/${equipment._id}`)}
              >
                Update
              </button>
              <button
                className="btn hover:bg-[#354f52] hover:text-[#cad2c5] font-bold my-4"
                onClick={() => setDeleteId(equipment._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {deleteId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
            <p>Are you sure you want to delete this item?</p>
            <div className="mt-4 flex justify-end gap-4">
              <button
                className="btn hover:bg-[#354f52] hover:text-[#cad2c5] font-bold"
                onClick={() => setDeleteId(null)}
              >
                Cancel
              </button>
              <button
                className="btn hover:bg-[#354f52] hover:text-[#cad2c5] font-bold"
                onClick={handleDelete}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyEquipments;
