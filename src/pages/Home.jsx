import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Course from "../components/Course/Course";
import Design from "../components/Design/Design";
import Detail from "../components/Detail/Detail";
import Header from "../components/Header/Header";
import Proud from "../components/Proud/Proud";
import Skill from "../components/Skill/Skill";

import { AboutData } from "../utils/constant/About";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      
      <Detail />
      <About data={AboutData} />

      <div className="courses">
        <h2>Find The Right <br />
        Online Course For You</h2>
        <h6>{
          "You Don't Have To Struggle Alone, You've Got Our Assistance And Help."
        }</h6>
        <Course />
      </div>

      <Skill />
      <Proud />

      <div className="design">
        <h2>We Share <br />
        Our Thoughts On Design</h2>
        <h6>{
          "you don't have to struggle alone, you've got our assistance and help."
        }</h6>
        <Design />
      </div>

    </div>
  );
};

export default Home;
