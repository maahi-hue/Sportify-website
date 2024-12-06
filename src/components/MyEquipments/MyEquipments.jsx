import React, { useEffect, useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const MyEquipments = () => {
  const [equipmentList, setEquipmentList] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const { user } = useContext(authContext); // Access user from context
  const navigate = useNavigate();

  // Fetch data
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
  }, [user?.email]); // Re-run the effect when the user's email changes

  // Handle delete
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipmentList.map((equipment) => (
          <div key={equipment._id} className="card bg-base-100 shadow-lg p-5">
            <img
              src={equipment.image}
              alt={equipment.itemName}
              className="rounded mb-4"
            />
            <h2 className="card-title">{equipment.itemName}</h2>
            <p>{equipment.description}</p>
            <p>Price: ${equipment.price}</p>
            <div className="mt-4 flex justify-between">
              <button
                className="btn btn-primary"
                onClick={() => navigate(`/update/${equipment._id}`)}
              >
                Update
              </button>
              <button
                className="btn btn-error"
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
                className="btn btn-secondary"
                onClick={() => setDeleteId(null)}
              >
                Cancel
              </button>
              <button className="btn btn-error" onClick={handleDelete}>
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
