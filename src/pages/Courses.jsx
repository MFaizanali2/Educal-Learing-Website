import Course from "../components/Course/Course"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

const Courses = () => {
  return (
    <div>
      <Header />
      <div className="courses">
        <h2>Find The Right <br />
        Online Course For You</h2>
        <h6>{
          "You Don't Have To Struggle Alone, You've Got Our Assistance And Help."
        }</h6>
        <Course />
      </div>
      <Footer />
    </div>
  )
}

export default Courses
