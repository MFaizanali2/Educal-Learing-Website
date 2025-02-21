import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Course from "../components/Course/Course";
import Detail from "../components/Detail/Detail";
import Header from "../components/Header/Header";
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

    </div>
  );
};

export default Home;
