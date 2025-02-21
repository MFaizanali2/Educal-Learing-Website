import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import bannerData from "../../utils/constant/Banner";
import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Banner = () => {
  return (
    <section className="banner-container">
      <div className="banner-content">
        <h1>{bannerData.title}</h1>
        <p className="description">{bannerData.description}</p>
        <p className="price">{bannerData.price}</p>
        <div className="search-container">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          <input
            type="text"
            placeholder={bannerData.searchPlaceholder}
            className="input"
          />
        </div>
        <p className="guarantee">{bannerData.guaranteeText}</p>
      </div>

      <div className="banner-image">
        <img src={bannerData.image} alt="Student" />
        {bannerData.notifications.map((note) => (
          <div key={note.id} className="notification">
            <i className={`fa ${note.icon}`} aria-hidden="true"></i>
            <div>
              <h4>{note.title}</h4>
              <p>{note.message}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
