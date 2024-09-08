import React from "react";
import { aboutData } from "../../utils/Contant";

const About = () => {
  return (
    <div id="about">
      <h1 className="text-center text_heading__1">About Us</h1>
      <div className="row">
        {aboutData.map((data,id) => (
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4" key={id}>
            <div class="card text-left align-items-center py-4 mt-2 hover_effect">
              <img class="img_box about_card_logo" src={data.img} alt="about" />
              <div class="card-body">
                <h4 class="card-title">{data.heading}</h4>
                <p class="card-text">{data.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
