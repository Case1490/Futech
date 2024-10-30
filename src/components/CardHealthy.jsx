
const CardHealthy = ({ image, title, description }) => {
  return (
    <div className="card">
      <div className="content">
        <h2 className=" text-xl sm:text-2xl font-bold mb-2">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
  );
};

export default CardHealthy