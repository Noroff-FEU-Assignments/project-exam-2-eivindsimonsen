import Banner from "../../common/Banner";
import ExploreCard from "../../common/ExploreCard";

function Explore() {
  return (
    <>
      <Banner bannerclass="banner-image-explore" h1="Explore" h2="All available visits" />
      <section id="accommodations">
        <ExploreCard />
      </section>
    </>
  );
}

export default Explore;
