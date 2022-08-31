import Banner from "../../common/Banner";
import ExploreCard from "../../common/ExploreCard";

function Explore() {
  // Removes the active link on nav home link
  const homeLink = document.querySelector(".home-link");
  // This will create an error in the console because the classlists dont exist the first milliesecond
  setTimeout(function () {
    if (homeLink.classList.contains("active")) {
      homeLink.classList.remove("active");
    }
  }, 100);

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
