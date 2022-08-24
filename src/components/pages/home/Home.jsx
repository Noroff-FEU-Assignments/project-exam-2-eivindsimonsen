/* import Heading from "../../layout/Heading"; */
import { HeadingTwo, HeadingThree } from "../../layout/Headings";
import Banner from "../../common/Banner";
import PopularCard from "../../common/PopularCard";
import Feedback from "../../common/Feedback";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/explore" className="cta-alt">
            Explore more
          </NavLink>
        </section>
      </Container>
      <section id="feedback-messages">
        <Container>
          <HeadingThree title="Messages from Holidaze users" />
          <Feedback />
        </Container>
      </section>
      <section id="carousel"></section>
    </>
  );
}

export default Home;
