
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import courses from "../../utils/constant/Course";
import "./Course.css";

const Course = () => {
  return (
    <section className="course-container">
      {courses.map((course) => (
        <div key={course.id} className="course-card">
          <img src={course.image} alt={course.title} className="course-image" />

          <div className="course-tags">
            <span className="tag" style={{ backgroundColor: course.category1.color }}>
              {course.category1.name}
            </span>
            <span className="tag" style={{ backgroundColor: course.category2.color }}>
              {course.category2.name}
            </span>
          </div>

          <div className="course-details">
            <p className="lessons">
              <FontAwesomeIcon icon={faBook} /> {course.lessons} Lessons
            </p>
            <p className="rating">
              <FontAwesomeIcon icon={faStar} className="star-icon" /> {course.rating} ({course.reviews})
            </p>
          </div>

          <h3 className="course-title">{course.title}</h3>

          <div className="instructor">
            <span className="instructor-name">{course.instructor}</span>
          </div>

          <div className="course-footer">
            <span className="price">{course.price}</span>
            <span className="details-link">
              Know Details <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Course;
