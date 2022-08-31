import { HeadingTwo, HeadingThree, Quote } from "../../layout/Headings";
import Banner from "../../common/Banner";
import PopularCard from "../../common/PopularCard";
import Feedback from "../../common/Feedback";
import Container from "react-bootstrap/Container";
import { ButtonLink } from "../../common/Buttons";
import CarouselSlider from "../../common/Carousel";
import userProfile from "../../../images/quote-image.jpg";

function Home() {
  // If the buttons on popularCard or buttonLink is clicked, the home-link active class will follow, see additional code in explore.jsx and accommodationdetails.jsx
  //This code makes sure the active class on given links are removed, because they stay active if I return to index with the brand link.
  const exploreLink = document.querySelector(".explore-link");
  const loginLink = document.querySelector(".login-link");

  // This will create an error in the console because the classlists dont exist the first milliesecond
  setTimeout(function () {
    if (window.location.pathname === "/") {
      exploreLink.classList.remove("active");
      loginLink.classList.remove("active");
    }
  }, 100);

  return (
    <>
      <Banner bannerclass="banner-image-index" h1="Visit Bergen City" h2="Hotels / B & B / Guesthouses" />
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
          <Feedback />
        </Container>
      </section>
      <section id="carousel">
        <Container className="carousel-container">
          <Quote text="Bergen City must be one of the most beautiful places I've ever been!" profileImg={userProfile} />
          <CarouselSlider />
        </Container>
      </section>
    </>
  );
}

export default Home;
