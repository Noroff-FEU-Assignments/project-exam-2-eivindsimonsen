import Banner from "../../common/Banner";
import Breadcrumbs from "../../common/Breadcrumbs";
import { AccoBase, AccoDescription, AccoImages } from "../../common/DetailComponents";
import { Container } from "react-bootstrap";
import Feedback from "../../common/Feedback";
import { HeadingThree } from "../../layout/Headings";

function AccommodationDetails() {
  return (
    <>
      <Banner bannerclass="banner-image-specific" h1="Book your holiday" h2="Book now, pay later" />
      <Breadcrumbs prev="Explore" current="Details" />
      <section id="accommodation-details">
        <AccoBase />
        <AccoDescription />
        <AccoImages />
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
