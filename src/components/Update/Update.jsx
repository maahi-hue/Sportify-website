import { useLoaderData, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const Update = () => {
  const equipment = useLoaderData();
  const navigate = useNavigate();
  const [updatedEquipment, setUpdatedEquipment] = useState({});

  useEffect(() => {
    if (equipment) {
      setUpdatedEquipment(equipment);
    }
  }, [equipment]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEquipment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { _id, ...updatePayload } = updatedEquipment;

    const res = await fetch(
      `https://equi-sports-server-kappa.vercel.app/equipments/${equipment._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatePayload),
      }
    );

    if (res.ok) {
      Swal.fire({
        title: "Success!",
        text: "Equipment updated successfully.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/MyEquipments");
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Failed to update equipment. Please try again.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  if (!updatedEquipment || !updatedEquipment._id) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-10 p-10 bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-5">Update Equipment</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 font-semibold">Image</label>
          <input
            type="text"
            name="image"
            value={updatedEquipment.image || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Item Name</label>
          <input
            type="text"
            name="itemName"
            value={updatedEquipment.itemName || ""}
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
            value={updatedEquipment.categoryName || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Description</label>
          <textarea
            name="description"
            value={updatedEquipment.description || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Price</label>
          <input
            name="price"
            value={updatedEquipment.price || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Customization</label>
          <input
            type="text"
            name="customization"
            value={updatedEquipment.customization || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Processing Time</label>
          <input
            type="text"
            name="processingTime"
            value={updatedEquipment.processingTime || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Stock</label>
          <input
            type="number"
            name="stock"
            value={updatedEquipment.stock || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">User Email</label>
          <input
            type="email"
            name="userEmail"
            value={updatedEquipment.userEmail || ""}
            className="w-full p-2 border rounded bg-gray-200"
            readOnly
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">User Name</label>
          <input
            type="text"
            name="userName"
            value={updatedEquipment.userName || ""}
            className="w-full p-2 border rounded bg-gray-200"
            readOnly
          />
        </div>
        <button
          type="submit"
          className="btn bg-base-100 hover:bg-[#354f52] hover:text-[#cad2c5] font-bold px-3 py-1 rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
