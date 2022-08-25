import placeholder from "../../images/hotel.jpg";
import { HeadingThree } from "../layout/Headings";
import { ButtonLinkArrow } from "../common/Buttons";

function PopularCard() {
  return (
    <>
      <div className="popular-card">
        <div className="popular-card-img">
          <img src={placeholder} alt="Bed and breakfest at a farmhouse" />
        </div>
        <div className="popular-card-details">
          <div className="popular-card-name">
            <HeadingThree title="Farm B & B" />
            <p>A fine farm for B&B</p>
          </div>
          <div className="popular-card-feature">
            <div>2 guests</div>
            <div>1 bedroom</div>
          </div>
          <div className="popular-card-rating">
            <i className="fa-solid fa-star star-colored"></i>
            <i className="fa-solid fa-star star-colored"></i>
            <i className="fa-solid fa-star star-colored"></i>
            <i className="fa-solid fa-star star-colored"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <div className="popular-card-footer">
            <p>$42/day</p>
            <ButtonLinkArrow location="/accommodationDetails" btnClass="cta" btnText="Read more" />
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularCard;
