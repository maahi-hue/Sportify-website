import { NavLink } from "react-router-dom";

const EquipmentCard = ({ equipment }) => {
  const { _id, image, price, itemName, categoryName, description } = equipment;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl h-[290px] p-6">
        <figure>
          <img src={image} />
        </figure>
        <div className="card-body text-sm text-center">
          <h2 className="text-2xl font-bold">{itemName}</h2>
          <p>Category: {categoryName}</p>
          <p>{description}</p>
          <p>Price: {price}</p>
          <div className="card-actions justify-center">
            <NavLink to={`/details/${_id}`}>
              <button className="btn hover:bg-[#cad2c5] hover:text-[#2f3e46] font-bold">
                View Details
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentCard;
