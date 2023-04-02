import { Card } from "react-bootstrap";
import a1 from "../../image/a1.png";
import a from "../../image/a.png";
import a13 from "../../image/a13.jpg";
import resume from '../Resume/resume.pdf'

const RightSideIntro = () => {
  return (
    <>
      <div class="right_img_container">
        <img src={a} className="img_box img_1" alt="card_mg" />
        <img src={a1} className="img_box img_2" alt="card_mg" />
        <img src={a13} className="img_box img_3" alt="card_mg" />
      </div>
      <div className="btn_container">
        <a href={resume} className="btn1">
          <button className="btn">Download Resume</button>
        </a>
        <a href={resume} className="btn2">
          <button className="btn ">Hire Me</button>
        </a>
      </div>
    </>
  );
};

export default RightSideIntro;
