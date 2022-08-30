import placeholder from "../../images/bandb.jpg";
import BookingForm from "../forms/BookingForm";
import { HeadingTwo, HeadingThree } from "../layout/Headings";
import { Container } from "react-bootstrap";

// ------------ Accommodation base ------------
export function AccoBase() {
  return (
    <section id="accommodation-base">
      <Container className="acco-wrapper">
        <div className="detail-name-rating">
          <div>
            <HeadingTwo title="Farm bed & breakfast" />
          </div>
          <div>
            <i className="fa-solid fa-star star-colored"></i>
            <i className="fa-solid fa-star star-colored"></i>
            <i className="fa-solid fa-star star-colored"></i>
            <i className="fa-solid fa-star star-colored"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
        <div className="detail-text">
          <p className="detail-text-address">Bergen - Imaginary address 79</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas a hic dolore quo beatae saepe eum nam voluptatem illum quis, error ipsam exercitationem quibusdam, ipsum aliquid corporis assumenda optio ab</p>
        </div>
        <div className="detail-image-box">
          <div>
            <img src={placeholder} alt="Bed and breakfest at a farmhouse" />
          </div>
          <div className="detail-image-box--dark">
            <p>Price a day</p>
            <p>$54</p>
            <BookingForm btnClass="cta" />
          </div>
        </div>
      </Container>
    </section>
  );
}

// ------------ Accommodation description ------------
export function AccoDescription() {
  return (
    <section id="accommodation-descri">
      <Container>
        <div className="acco-description">
          <HeadingThree title="Description" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit consectetur corporis ducimus error est voluptatem deserunt, velit nisi quidem fugit officiis ratione maiores sint ipsam iste ea nam quisquam facilis quia quibusdam. Corporis quibusdam necessitatibus earum ullam vitae nesciunt, adipisci sit rerum architecto quidem quasi dicta facere modi laborum beatae corrupti molestiae ratione quae reprehenderit hic magni similique aliquam! Itaque, optio ipsum. Id cupiditate recusandae a atque illo! Rerum et dicta impedit, beatae quidem iste aliquid qui voluptate id voluptas animi voluptatum ab? Dolorum sunt nobis ullam odit sed. Accusamus officiis numquam asperiores quae aliquam et, sint laboriosam molestiae molestias adipisci nihil nobis in repellat vel rem labore, recusandae nesciunt, ab animi iste cupiditate minima quaerat! Placeat sit suscipit iure?</p>
        </div>
      </Container>
    </section>
  );
}

// ------------ Accommodation images ------------
export function AccoImages() {
  return (
    <section id="accommodation-images">
      <Container className="acco-wrapper">
        <div className="acco-images">
          <div className="acco-images-active">
            <img src={placeholder} alt="Bed and breakfest at a farmhouse" />
          </div>
          <div className="acco-images-thumbnail">
            <div className="acco-images-sub">
              <img src={placeholder} alt="Bed and breakfest at a farmhouse" />
            </div>
            <div className="acco-images-sub">
              <img src={placeholder} alt="Bed and breakfest at a farmhouse" />
            </div>
            <div className="acco-images-sub">
              <img src={placeholder} alt="Bed and breakfest at a farmhouse" />
            </div>
          </div>
        </div>
        <BookingForm btnClass="cta-alt" />
      </Container>
    </section>
  );
}
