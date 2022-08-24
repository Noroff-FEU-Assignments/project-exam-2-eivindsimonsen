import Heading from "../layout/Heading";

function Banner({ bannerclass, h1, h2 }) {
  return (
    <div className={bannerclass}>
      <div className="banner-heading">
        <h1>
          <Heading title={h1} />
        </h1>
        <h2>
          <Heading title={h2} />
        </h2>
      </div>
    </div>
  );
}

export default Banner;
