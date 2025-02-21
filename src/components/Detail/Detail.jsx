import details from "../../utils/constant/Detail";
import "./Detail.css";

const Detail = () => {
  return (
    <section className="detail-container">
      <h2 className="detail-heading">Why An Scholercity Out Of The Ordinary</h2>
      <p className="detail-subheading">
        {
          "You Don't Have To Struggle Alone, You've Got Our Assistance And Help."
        }
      </p>
      <div className="card-container">
        {details.map((item) => (
          <div
            key={item.id}
            className="card"
            style={{ backgroundColor: item.color }}
          >
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Detail;
