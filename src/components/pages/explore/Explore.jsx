import Banner from "../../common/Banner";
import ExploreCard from "../../common/ExploreCard";

function Explore() {
  return (
    <>
      <section id="banner">
        <Banner bannerclass="banner-image-explore" h1="Explore" h2="All available visits" />
      </section>
      <section id="accommodations">
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
      </section>
    </>
  );
}

export default Explore;
