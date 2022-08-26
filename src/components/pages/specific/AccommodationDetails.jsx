import Banner from "../../common/Banner";
import Breadcrumbs from "../../common/Breadcrumbs";
import { AccoBase, AccoDescription, AccoImages } from "../../common/DetailComponents";
import { Container } from "react-bootstrap";
import Feedback from "../../common/Feedback";
import { HeadingThree } from "../../layout/Headings";

function AccommodationDetails() {
  return (
    <>
      <section id="banner">
        <Banner bannerclass="banner-image-specific" h1="Book your holiday" h2="Book now, pay later" />
      </section>
      <section id="breadcrumbs">
        <Breadcrumbs prev="Explore" current="Details" />
      </section>
      <section id="accommodation-details">
        <section id="accommodation-base">
          <Container className="acco-wrapper">
            <AccoBase />
          </Container>
        </section>
        <section id="accommodation-descri">
          <Container>
            <AccoDescription />
          </Container>
        </section>
        <section id="accommodation-images">
          <Container className="acco-wrapper">
            <AccoImages />
          </Container>
        </section>
        <section id="accommodation-feedback">
          <Container className="acco-wrapper">
            <HeadingThree title="Reviews from this acommondation" />
            <Feedback />
          </Container>
        </section>
      </section>
    </>
  );
}

export default AccommodationDetails;
