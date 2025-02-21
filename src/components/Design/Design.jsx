
import DesignData from "../../utils/constant/Design";
import "./Design.css";

const Design = () => {
  return (
    <section className="design-container">
      {DesignData.map((course) => (
        <div key={course.id} className="design-card">
          <img src={course.image} alt={course.title} className="design-image" />

          <div className="design-tags">
            <span className="tag" style={{ backgroundColor: course.category1.color }}>
              {course.category1.name}
            </span>
            <span className="tag" style={{ backgroundColor: course.category2.color }}>
              {course.category2.name}
            </span>
          </div>

          <h3 className="design-title">{course.title}</h3>

          <div className="instructor">
            <span className="instructor-name">{course.instructor}</span>
          </div>

          <div className="design-footer">
            <span className="price">{course.price}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Design;
