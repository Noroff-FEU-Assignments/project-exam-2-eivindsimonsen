import Carousel from "react-bootstrap/Carousel";
import placeholder1 from "../../images/bergen-havn-landscape.jpg";
import placeholder2 from "../../images/bergen-cable-car-landscape.jpg";
import placeholder3 from "../../images/header-image-landscape.jpg";

function CarouselSlider() {
  return (
    <Carousel variant="light">
      <Carousel.Item>
        <img className="d-block w-100" src={placeholder1} alt="Bergen Havn seen across the water" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={placeholder2} alt="Cable car moving upwards in Bergen" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={placeholder3} alt="Landscape of Bergen at night" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlider;
