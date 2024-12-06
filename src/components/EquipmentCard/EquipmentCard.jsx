import { NavLink } from "react-router-dom";

const EquipmentCard = ({ equipment }) => {
  const { _id, image, itemName, categoryName, description } = equipment;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl h-[290px] p-6">
        <figure>
          <img src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{itemName}</h2>
          <p>{categoryName}</p>
          <p>{description}</p>
          <div className="card-actions justify-center">
            <NavLink to={`/details/${_id}`}>
              <button className="btn hover:border-gray-500">
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
