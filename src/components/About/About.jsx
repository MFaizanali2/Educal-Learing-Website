/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./About.css";

// eslint-disable-next-line react/prop-types
const About = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const { subTitle, title, text1, text2, text3, imgUrl, btn } = data;
  return (
    <div className="about-wrapper">
      <div className="about-content">
        <div className="about-img">
          <img src={imgUrl} alt="About" />
        </div>

        <div className="about-text">
          <h1>{title}</h1>
          <p>
            <span>{subTitle}</span>
          </p>
          <h6><FontAwesomeIcon icon={faCheck} className="icon"/>
            {text1}</h6>
          <h6><FontAwesomeIcon icon={faCheck} className="icon"/>
            {text2}</h6>
          <h6><FontAwesomeIcon icon={faCheck} className="icon"/>
            {text3}</h6>
          <button className="btn">{btn}</button>
        </div>
      </div>
    </div>
  );
};

export default About;
