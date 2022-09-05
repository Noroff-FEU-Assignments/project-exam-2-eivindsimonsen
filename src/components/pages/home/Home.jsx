import { HeadingTwo, HeadingThree, Quote } from "../../layout/Headings";
import Banner from "../../common/Banner";
import PopularCard from "../../common/PopularCard";
import Feedback from "../../common/Feedback";
import Container from "react-bootstrap/Container";
import { ButtonLink } from "../../common/Buttons";
import CarouselSlider from "../../common/Carousel";
import userProfile from "../../../images/quote-image.jpg";

function Home() {
  return (
    <>
      <Banner bannerclass="banner-image-index" h1="Visit Bergen City" h2="Hotels / B n B / Guesthouses" />
      <Container>
        <section id="popular-visits">
          <HeadingTwo title="Popular visits" />
          <PopularCard />
        </section>
        <section className="explore-more">
          <ButtonLink location="/explore" btnClass="cta-alt" btnText="Explore more" />
        </section>
      </Container>
      <section id="feedback-messages">
        <Container>
          <HeadingThree title="Messages from Holidaze users" />
          <Feedback visitedFrom1="Visited Hotel Bristol through Holidaze" visitedFrom2="Visited Castle BnB through Holidaze" />
        </Container>
      </section>
      <section id="carousel">
        <Container className="carousel-container">
          <Quote text="Bergen City must be one of the most beautiful places I've ever been!" profileImg={userProfile} user="-Jackie" />
          <CarouselSlider />
        </Container>
      </section>
    </>
  );
}

export default Home;
