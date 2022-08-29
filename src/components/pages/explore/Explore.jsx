import Banner from "../../common/Banner";
import ExploreCard from "../../common/ExploreCard";

function Explore() {
  // Removes the active link on nav home link
  const homeLink = document.querySelector(".home-link");
  setTimeout(function () {
    if (homeLink.classList.contains("active")) {
      homeLink.classList.remove("active");
    }
  }, 100);

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
