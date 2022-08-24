import Heading from "../../layout/Heading";
import Banner from "../../common/Banner";
import PopularCard from "../../common/PopularCard";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Banner section */}
      <section id="banner">
        <Banner bannerclass="banner-image-index" h1="Visit Bergen City" h2="Hotels / B&B / Guesthouses" />
      </section>
      {/* Index content section */}
      <Container>
        {/* Popular visits section */}
        <section id="popular-visits">
          <h2>
            <Heading title="Popular visits" />
          </h2>
          <PopularCard />
          <PopularCard />
          <PopularCard />
        </section>
        <section className="explore-more">
          <NavLink to="/explore" className="cta-alt">
            Explore more
          </NavLink>
        </section>
        {/* Messages section */}
        <section id="Messages">
          <h3>
            <Heading title="Messages from Holidaze users" />
          </h3>
        </section>
        {/* Carousel section */}
        <section id="Carousel">
          <q>Bergen City must be one of the most beautiful places I've ever been!</q>
        </section>
      </Container>
    </>
  );
}

export default Home;
