import placeholder from "../../images/hotel.jpg";
import Heading from "../layout/Heading";
import { NavLink } from "react-router-dom";

function PopularCard() {
  return (
    <>
      <div className="popular-card">
        <div className="popular-card-img">
          <img src={placeholder} alt="Bed and breakfest at a farmhouse" />
        </div>
        <div className="popular-card-details">
          <div className="popular-card-name">
            <h3>
              <Heading title="Farm B & B" />
            </h3>
            <p>A fine farm for B&B</p>
          </div>
          <div className="popular-card-feature">
            <div>2 guests</div>
            <div>1 bedroom</div>
          </div>
          <div className="popular-card-rating">
            <i class="fa-solid fa-star star-colored"></i>
            <i class="fa-solid fa-star star-colored"></i>
            <i class="fa-solid fa-star star-colored"></i>
            <i class="fa-solid fa-star star-colored"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="popular-card-price-booking">
            <p>$42/day</p>
            <NavLink to="/explore" className="cta">
              Book
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularCard;
