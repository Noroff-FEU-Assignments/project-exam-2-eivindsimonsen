import { HeadingTwo, HeadingThree, Quote } from "../../layout/Headings";
import Banner from "../../common/Banner";
import PopularCard from "../../common/PopularCard";
import Feedback from "../../common/Feedback";
import Container from "react-bootstrap/Container";
import { ButtonLink } from "../../common/Buttons";
import CarouselSlider from "../../common/Carousel";

function Home() {
  return (
    <>
      <section id="banner">
        <Banner bannerclass="banner-image-index" h1="Visit Bergen City" h2="Hotels / B&B / Guesthouses" />
      </section>
      <Container>
        <section id="popular-visits">
          <HeadingTwo title="Popular visits" />
          <PopularCard />
          <PopularCard />
          <PopularCard />
        </section>
        <section className="explore-more">
          <ButtonLink location="/explore" btnClass="cta-alt" btnText="Explore more" />
        </section>
      </Container>
      <section id="feedback-messages">
        <Container>
          <HeadingThree title="Messages from Holidaze users" />
          <Feedback />
        </Container>
      </section>
      <section id="carousel">
        <Container className="carousel-container">
          <Quote text="Bergen City must be one of the most beautiful places I've ever been!" />
          <CarouselSlider />
        </Container>
      </section>
    </>
  );
}

export default Home;
