import React, { useState } from "react";
import { Card } from "react-bootstrap";
import a from "../../image/a.png";
import pp2 from "../../image/pp2.jpg";
import c1 from "../../image/c1.png";
import c2 from "../../image/c2.png";
import p3 from "../../image/p3.jpg";

const Projects = () => {
  return (
    <div className="container-fluid" id="skills">
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-3 mt-5">
          <div class="card text-left bg-dark">
            <img class="card-img-top" src={pp2} alt="" width={100} height={122} />
            <div class="card-body">
              <h4 class="card-title text-white">E-commerce web-app</h4>
              <p class="card-text  text-white">
                I have create a  fully responsive e-commerce website using HTML, CSS , Bootstrap and React Js.
              </p>
            </div>
            <div className="text-center m-2">
              <a href="https://github.com/MdIntezarAlam/shoping.git">
                <button className="inner_btn ">View on Github</button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3 mt-5">
          <div class="card text-left bg-dark">
            <img class="card-img-top" src={c1} alt="" width={100} height={122} />
            <div class="card-body">
              <h5 class="card-title text-white">Resume-maker/Builder web-app</h5>
              <p class="card-text  text-white">
                I have create a fully responsive resume maker app where i used Html, Css , Bootstrap,React Js & Firebase
              </p>
            </div>
            <div className="text-center m-2">
              <a href="https://github.com/MdIntezarAlam/cits.git">
                <button className="inner_btn ">View on Github</button>
              </a>
              <a href="https://int-amazon-clone.netlify.app/">
                <button className="inner_btn ">Live</button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3 mt-5">
          <div class="card text-left bg-dark">
            <img class="card-img-top" src={c2} alt="" width={100} height={122} />
            <div class="card-body">
              <h5 class="card-title text-white">Amazon-clone</h5>
              <p class="card-text  text-white">
                I have create a fully responsive Amazon clone app where i used Html, Css ,React Js, react-redux , Express & Mongodb
              </p>
            </div>
            <div className="text-center m-2">
              <a href="https://github.com/MdIntezarAlam/amazon-clone-mern-">
                <button className="inner_btn ">View on Github</button>
              </a>
              <a href="https://int-amazon-clone.netlify.app/">
                <button className="inner_btn ">Live</button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3 mt-5">
          <div class="card text-left bg-dark">
            <img class="card-img-top" src={c2} alt="" width={100} height={122} />
            <div class="card-body">
              <h5 class="card-title text-white">Linkedin-clone</h5>
              <p class="card-text  text-white">
                I have create a fully responsive Linkedin clone app where i used Html, Css ,React Js, react-redux & Firebase
              </p>
            </div>
            <div className="text-center m-2">
              <a href="https://github.com/MdIntezarAlam/linkedin-clone">
                <button className="inner_btn ">View on Github</button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-3 mt-5">
          <div class="card text-left bg-dark">
            <img class="card-img-top" src={p3} alt="" width={100} height={122} />
            <div class="card-body">
              <h5 class="card-title text-white">Wheather-app</h5>
              <p class="card-text  text-white">
                I have create a fully responsive Wheather app where i used Html, Css ,React Js, react-redux & API
              </p>
            </div>
            <div className="text-center m-2 d-flex justify-content-between align-items-center m-auto">
              <a href="https://github.com/MdIntezarAlam/wheather-react-app">
                <button className="inner_btn ">View on Github</button>
              </a>
              <a href="https://int-wheather-app.netlify.app/">
                <button className="inner_btn">Live</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
