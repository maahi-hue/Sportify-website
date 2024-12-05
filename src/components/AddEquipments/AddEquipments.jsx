import Swal from "sweetalert2";
const AddEquipments = () => {
  const handleAddEquipment = (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.image.value;
    const itemName = form.itemName.value;
    const categoryName = form.categoryName.value;
    const description = form.description.value;
    const price = form.price.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stock = form.stock.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;
    const rating = form.rating.value;
    const newEquipment = {
      image,
      itemName,
      categoryName,
      description,
      price,
      customization,
      processingTime,
      stock,
      userEmail,
      userName,
      rating,
    };
    console.log(newEquipment);

    fetch("http://localhost:5000/equipments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Equipment added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        } else {
          console.error("Unexpected response:", data);
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Add Equipments</h1>
      <form onSubmit={handleAddEquipment}>
        <div className="md:flex gap-6 w-10/12 mx-auto">
          <div className="space-y-3 w-full">
            <label className="input input-bordered flex items-center gap-2 ">
              Image
              <input
                type="text"
                name="image"
                className="grow"
                placeholder="Image URL:https://5r76K34/career.jpg"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Item Name
              <input
                type="text"
                name="itemName"
                className="grow"
                placeholder=" Bat"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Category Name
              <input
                type="text"
                name="categoryName"
                className="grow"
                placeholder="Cricket"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Description
              <input
                type="text"
                name="description"
                className="grow"
                placeholder="Bat is a ........."
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Price
              <input
                type="text"
                name="price"
                className="grow"
                placeholder="340TK"
              />
            </label>
          </div>
          <div className="space-y-3 w-full">
            <label className="input input-bordered flex items-center gap-2">
              Customization
              <input
                type="text"
                name="customization"
                className="grow"
                placeholder="Bat with extra grip"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Processing Time
              <input
                type="text"
                name="processingTime"
                className="grow"
                placeholder="Delivery Time"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Stock Status
              <input
                type="text"
                name="stock"
                className="grow"
                placeholder="Available"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              User Email
              <input
                type="text"
                name="userEmail"
                className="grow"
                placeholder="abc@gmail.com"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              User Name
              <input
                type="text"
                name="userName"
                className="grow"
                placeholder="abc"
              />
            </label>
          </div>
        </div>
        <div>
          <label className="input input-bordered flex mx-auto items-center gap-2 w-10/12 mt-3">
            Rating
            <input
              type="text"
              name="rating"
              className="grow"
              placeholder="4.3"
            />
          </label>
        </div>
        <input
          type="submit"
          value="Add Equipment"
          className="btn font-bold my-6 block mx-auto w-10/12 hover:border-gray-500"
        />
      </form>
    </div>
  );
};

export default AddEquipments;
