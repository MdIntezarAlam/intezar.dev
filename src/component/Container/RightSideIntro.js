import { Card } from "react-bootstrap";
import a1 from "../../image/a1.png";
import a from "../../image/a.png";
import user from '../../image/user.jpg'
import resume from "../Resume/resume.pdf";
const RightSideIntro = () => {
  return (
    <>
      <div class="right_img_container">
        <div className="top_img">
          <img src={a1} className="img_box img_1" alt="card_mg" />
          <img src={user} className="img_box img_2" alt="card_mg" />
        </div>
        <div className="third_img">
          <img src={a} className="img_box img_3" alt="card_mg" />
        </div>
        <div className="btn_container">
          <a href={resume}>
            <button className="inner_btn">Download Resume</button>
          </a>
          <a href={resume}>
            <button className="inner_btn ">Hire Me</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default RightSideIntro;
