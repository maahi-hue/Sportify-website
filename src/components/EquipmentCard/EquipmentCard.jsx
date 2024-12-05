const EquipmentCard = ({ equipment }) => {
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
  } = equipment;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{itemName}</h2>
          <p>{description}</p>
          <div className="card-actions justify-center">
            <button className="btn hover:border-gray-500">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentCard;
