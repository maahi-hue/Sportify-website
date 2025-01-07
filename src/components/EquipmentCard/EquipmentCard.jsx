import { NavLink } from "react-router-dom";

const EquipmentCard = ({ equipment }) => {
  const { _id, image, price, itemName, categoryName } = equipment;

  return (
    <div>
      <div className="card border border-inherit bg-base-100 shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <figure className="relative h-[150px] overflow-hidden">
          <img
            src={image}
            alt={itemName}
            className="w-32 p-2 object-cover hover:scale-110 transition-transform duration-300"
          />
        </figure>
        <div className="card-body p-4 text-center">
          <h2 className="text-xl font-bold mb-2">{itemName}</h2>
          <p>Category: {categoryName}</p>
          <p className="text-lg font-semibold mb-4">Price: ${price}</p>
          <div className="card-actions">
            <NavLink to={`/details/${_id}`}>
              <button className="btn bg-[#cad2c5] text-[#2f3e46] hover:bg-[#2f3e46] hover:text-[#cad2c5] font-bold transition-colors duration-300">
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
