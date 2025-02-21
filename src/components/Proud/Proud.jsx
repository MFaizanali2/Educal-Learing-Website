import { ProudData } from "../../utils/constant/Proud";
import "./Proud.css";

const Proud = () => {
  return (
    <div className="proud">
        <h1>We Are Proud</h1>
        <h6>
          You dont have to struggle alone, you we got our assistance and help.
        </h6>
      <div className="proud-box">
        {ProudData.map((item, index) => {
          return (
            <div key={index} className="proud-wrapper">
              <div className="proud-content">
                {/* <h1>{item.icon}</h1> */}
                <h1>{item.title}</h1>
                <h6>{item.subTitle}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Proud;
