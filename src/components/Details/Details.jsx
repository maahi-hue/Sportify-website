import { useLoaderData } from "react-router-dom";

const Details = () => {
  const {
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
  } = useLoaderData();

  return (
    <div className="m-20">
      <div className="p-3 flex flex-col lg:flex-row bg-base-100 shadow-xl rounded-lg overflow-hidden">
        <div className="lg:w-1/2">
          <img
            src={image}
            alt={itemName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="lg:w-1/2 p-6 flex flex-col justify-between">
          <div className="mb-6">
            <h2 className="text-3xl font-bold  mb-4">{itemName}</h2>
            <p className="text-lg  mb-2">
              <span className="font-semibold">Category: </span>
              {categoryName}
            </p>
            <p className="text-lg  mb-4">
              <span className="font-semibold">Description: </span>
              {description}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 ">
            <p>
              <span className="font-semibold">Price: </span>${price}
            </p>
            <p>
              <span className="font-semibold">Customization: </span>
              {customization}
            </p>
            <p>
              <span className="font-semibold">Processing Time: </span>
              {processingTime}
            </p>
            <p>
              <span className="font-semibold">Stock: </span>
              {stock}
            </p>
            <p>
              <span className="font-semibold">Adder Email: </span>
              {userEmail}
            </p>
            <p>
              <span className="font-semibold">Added By: </span>
              {userName}
            </p>
            <p>
              <span className="font-semibold">Rating: </span>
              {rating} ⭐
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
