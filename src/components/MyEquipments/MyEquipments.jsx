import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const MyEquipments = () => {
  const [equipmentList, setEquipmentList] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEquipment = async () => {
      if (user?.email) {
        setLoading(true);
        try {
          const res = await fetch(
            `https://equi-sports-server-kappa.vercel.app/equipments/user/${user?.email}`
          );
          if (!res.ok) throw new Error("Failed to fetch equipment list");
          const data = await res.json();
          setEquipmentList(data);
        } catch (error) {
          console.error("Error fetching equipment:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchEquipment();
  }, [user]);

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `https://equi-sports-server-kappa.vercel.app/equipments/${deleteId}`,
        { method: "DELETE" }
      );
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
      {loading ? (
        <p>Loading...</p>
      ) : equipmentList.length === 0 ? (
        <p>You have not added any equipment yet.</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Item Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Description
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Price
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {equipmentList.map((equipment) => (
              <tr key={equipment._id}>
                <td className="border border-gray-300 px-4 py-2">
                  {equipment.itemName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {equipment.description}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {equipment.price}
                </td>
                <td className="border border-gray-300 px-4 py-2 flex gap-2">
                  <button
                    className="btn hover:bg-[#354f52] hover:text-[#cad2c5] font-bold"
                    onClick={() => navigate(`/update/${equipment._id}`)}
                  >
                    Update
                  </button>
                  <button
                    className="btn hover:bg-[#354f52] hover:text-[#cad2c5] font-bold"
                    onClick={() => setDeleteId(equipment._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

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
