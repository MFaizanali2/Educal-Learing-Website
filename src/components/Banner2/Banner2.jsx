
import { banner2Data } from "../../utils/constant/Banner2";
import "./Banner2.css";

const Banner2 = () => {
  return (
    <div className="banner2">
      <div className="banner2-content">
        <h2>{banner2Data.text}</h2>
        <div className="buttons">
          {banner2Data.buttons.map((btn, index) => (
            <a
              key={index}
              href={btn.link}
              className={`btn ${btn.outlined ? "btn-outlined" : "btn-filled"}`}
            >
              <i className={btn.icon}></i> {btn.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner2;
