import { HeadingFour } from "../layout/Headings";

function Feedback() {
  return (
    <>
      <div className="feedback-position">
        <div className="feedback">
          <div className="feedback-box">
            <div>
              <div className="feedback-box-user">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="feedback-box-info">
                <HeadingFour title="Kari Nordmann" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio facere eos praesentium animi officia dolor harum debitis alias voluptatibus. Illum hic accusamus molestias dolorum. Recusandae?</p>
                <p className="feedback-user-location">
                  Visited Hotel Bristol through <span>Holidaze</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="feedback">
          <div className="feedback-box">
            <div>
              <div className="feedback-box-user">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="feedback-box-info">
                <HeadingFour title="Ola Nordmann" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio facere eos praesentium animi officia dolor harum debitis alias voluptatibus. Illum hic accusamus molestias dolorum. Recusandae?</p>
                <p className="feedback-user-location">
                  Visited Farm B&B through <span>Holidaze</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
