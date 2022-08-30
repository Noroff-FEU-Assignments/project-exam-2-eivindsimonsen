import { HeadingOne, HeadingTwo } from "../layout/Headings";

function Banner({ bannerclass, h1, h2 }) {
  return (
    <section id="banner">
      <div className={bannerclass}>
        <div className="banner-heading">
          <HeadingOne title={h1} />
          <HeadingTwo title={h2} />
        </div>
      </div>
    </section>
  );
}

export default Banner;
