import { NavLink } from "react-router-dom";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";

const Update = () => {
  const equipment = useLoaderData();
  const navigate = useNavigate();
  const [updatedEquipment, setUpdatedEquipment] = useState(equipment);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEquipment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `http://localhost:5000/equipments/${equipment._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedEquipment),
      }
    );

    if (res.ok) {
      alert("Equipment updated successfully!");
      navigate("/MyEquipments");
    } else {
      alert("Failed to update equipment. Please try again.");
    }
  };

  return (
    <div className="m-10 p-10 bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-5">Update Equipment</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 font-semibold">Item Name</label>
          <input
            type="text"
            name="itemName"
            value={updatedEquipment.itemName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Category</label>
          <input
            type="text"
            name="categoryName"
            value={updatedEquipment.categoryName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Description</label>
          <textarea
            name="description"
            value={updatedEquipment.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Price</label>
          <input
            type="number"
            name="price"
            value={updatedEquipment.price}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Customization</label>
          <input
            type="text"
            name="customization"
            value={updatedEquipment.customization}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Processing Time</label>
          <input
            type="text"
            name="processingTime"
            value={updatedEquipment.processingTime}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Stock</label>
          <input
            type="number"
            name="stock"
            value={updatedEquipment.stock}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">User Email</label>
          <input
            type="email"
            name="userEmail"
            value={updatedEquipment.userEmail}
            className="w-full p-2 border rounded bg-gray-200"
            readOnly
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">User Name</label>
          <input
            type="text"
            name="userName"
            value={updatedEquipment.userName}
            className="w-full p-2 border rounded bg-gray-200"
            readOnly
          />
        </div>
        <NavLink to={`/update/${equipment._id}`}>
          <button className="btn bg-yellow-500 text-white px-3 py-1 rounded">
            Update
          </button>
        </NavLink>
      </form>
    </div>
  );
};

export default Update;
