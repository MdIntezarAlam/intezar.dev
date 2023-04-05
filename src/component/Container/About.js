import React from "react";
import a13 from "../../image/a13.jpg";

const About = () => {
  return (
    <div className="container-fluid" id="about">
      <h1 className="text-center text_heading_1">About Us</h1>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div class="card text-left align-items-center py-4 mt-2 hover_effect">
            <img class="about_card_logo" src={a13} alt="about" />
            <div class="card-body">
              <h4 class="card-title">Frontend React Js Developer</h4>
              <p class="card-text">
                Frontend development using modern technology such as React. I
                follow the best folder structure so that code will be more
                re-usable, scalable and flexibile. I mainly focus on code
                quality and performance. Redux or redux toolkit, localstorage
                and cookies 
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div class="card text-left align-items-center py-4 mt-2 hover_effect">
            <img class="about_card_logo" src={a13} alt="about" />
            <div class="card-body">
              <h4 class="card-title">Frontend React Native Developer</h4>
              <p class="card-text">
                I am passionate about new technologies and always wish to know
                more about them by reading books &amp; documentation and
                watching YouTube videos. I have worked in Android developer
                using React Native Language where i worked on front-end part of
                the application
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4">
          <div class="card text-left align-items-center py-4 mt-2 hover_effect">
            <img class="about_card_logo" src={a13} alt="about" />
            <div class="card-body">
              <h4 class="card-title">Frontend Web Developer</h4>
              <p class="card-text">
                Working as a Front-end Web Developer to obtain a responsible and
                challenging Frontend Developer’s position where my education and
                work experience will have valuable application. To take a
                challenging role as Front End Web Developer in a highly
                technical company
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
