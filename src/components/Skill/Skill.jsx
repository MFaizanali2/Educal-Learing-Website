import { skillsData } from "../../utils/constant/Skill";
import "./Skill.css";

const Skill = () => {
  return (
    <div className="skills">
      <h1>What Is Skilline?</h1>
      <h6>
        Sloshed faff about me old mucker blatant bubble and squeak hanky panky
        some dodgy <br />
        chav bevvy arse chimney pot I, ruddy plastered buggered smashing blow
        off Im telling <br />
        up the kyver he legged it bleeder jolly good,
      </h6>

      <div className="skills-content">
        {skillsData.map((item, index) => (
          <div key={index} className="skill-main">
            <img src={item.imgUrl} alt={item.title} />
            <div className="skill-text">
              <h1>{item.title}</h1>
              <button>{item.btn}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
