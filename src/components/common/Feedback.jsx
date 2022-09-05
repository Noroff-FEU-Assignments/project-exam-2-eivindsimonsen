import { HeadingFour } from "../layout/Headings";
import profileImg1 from "../../images/profileImgTwo.jpg";
import profileImg2 from "../../images/profileImgThree.jpg";

function Feedback({ visitedFrom1, visitedFrom2 }) {
  return (
    <>
      <div className="feedback-position">
        <div className="feedback">
          <div className="feedback-box">
            <div>
              <div className="quote-block" id="message-user-picture">
                <img src={profileImg1} alt="A users profile headshot" />
              </div>
              <div className="feedback-box-info">
                <HeadingFour title="Kari Nordmann" />
                <i className="fa-solid fa-star star-colored"></i>
                <i className="fa-solid fa-star star-colored"></i>
                <i className="fa-solid fa-star star-colored"></i>
                <i className="fa-solid fa-star star-colored"></i>
                <i className="fa-solid fa-star"></i>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio facere eos praesentium animi officia dolor harum debitis alias voluptatibus. Illum hic accusamus molestias dolorum. Recusandae?</p>
                <p className="feedback-user-location">{visitedFrom1}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="feedback">
          <div className="feedback-box">
            <div>
              <div className="quote-block" id="message-user-picture">
                <img src={profileImg2} alt="A users profile headshot" />
              </div>
              <div className="feedback-box-info">
                <HeadingFour title="Ola Nordmann" />
                <i className="fa-solid fa-star star-colored"></i>
                <i className="fa-solid fa-star star-colored"></i>
                <i className="fa-solid fa-star star-colored"></i>
                <i className="fa-solid fa-star star-colored"></i>
                <i className="fa-solid fa-star star-colored"></i>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio facere eos praesentium animi officia dolor harum debitis alias voluptatibus. Illum hic accusamus molestias dolorum. Recusandae?</p>
                <p className="feedback-user-location">{visitedFrom2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
