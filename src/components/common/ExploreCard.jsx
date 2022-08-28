import placeholder from "../../images/bandb.jpg";
import { ButtonLinkArrow } from "./Buttons";
import Container from "react-bootstrap/Container";

function ExploreCard() {
  return (
    <Container className="card-container">
      <div className="explore-card">
        <div className="explore-card-img">
          <img src={placeholder} alt="Bed and breakfest at a farmhouse" />
        </div>
        <div className="explore-card-details">
          <div className="explore-card-title">
            <h3>Farm B&B</h3>
            <div className="explore-card-title-ratings">
              <i className="fa-solid fa-star star-colored"></i>
              <i className="fa-solid fa-star star-colored"></i>
              <i className="fa-solid fa-star star-colored"></i>
              <i className="fa-solid fa-star star-colored"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, non. Tempore corporis commodi facilis reiciendis dolorem sapiente dolore doloremque amet nemo alias quos adipisci fugiat perspiciatis atque ducimus, quibusdam doloribus ratione, expedita placeat maxime eligendi quae blanditiis accusantium! Animi, eum.</p>
          </div>
          <div className="explore-card-footer">
            <p>$42/day</p>
            <ButtonLinkArrow location="/explore/accommodationDetails" btnClass="cta" btnText="Read more" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ExploreCard;
