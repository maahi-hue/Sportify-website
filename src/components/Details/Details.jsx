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
      <div className="items-center flex flex-col  bg-base-100 shadow-xl">
        <div className="">
          <img src={image} alt={itemName} />
        </div>
        <div className="text-center">
          <div>
            <h2 className="">{itemName}</h2>
          </div>
          <div>
            <p>{categoryName}</p>
          </div>
          <div>
            <p>{description}</p>
          </div>
          <div>
            <p>{price}</p>
          </div>
          <div>
            <p>{customization}</p>
          </div>
          <div>
            <p>{processingTime}</p>
          </div>
          <div>
            <p>{stock}</p>
          </div>
          <div>
            <p>{userEmail}</p>
          </div>
          <div>
            <p>{userName}</p>
          </div>
          <div>
            <p>{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
