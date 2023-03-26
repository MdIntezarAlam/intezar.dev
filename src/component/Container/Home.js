import React, { useState } from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Skills } from "./index";
import { homeImageData } from "../../utils/Contant";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row p-4">
        <div className="col-md-6">
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title className="fs-1 bold">Hii I Am</Card.Title>
              <Card.Title className="text_heading_1">
                Md Intezar Alam
              </Card.Title>
              <Card.Text>
                Frontend development using modern technology such as React. I
                follow the best folder structure so that code will be more
                re-usable, scalable and flexibile. I mainly focus on code
                quality and performance. Redux or redux toolkit, localstorage
                and cookies are used for the state management. Html,Css,
                JavaScript, React Js, Git, GitHub, Node Js, Express Js & MongoDB
              </Card.Text>
              <Badge bg="primary" className="w-25 p-2">
                Hire Me
              </Badge>
              <Card.Body className="d-flex justify-content-between m-auto p-4 w-75">
                {homeImageData?.map((data) => (
                  <Link to={data.img_link}>
                    <img
                      src={data.h_img1}
                      alt="img_icon"
                      class="rounded-pill"
                      width={50}
                      height={50}
                    />
                  </Link>
                ))}
              </Card.Body>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title className="text_technology_heading">
                Technology
              </Card.Title>
              <Card.Text>
                <span className="fw-bold">React js</span> is a declarative,
                efficient, and flexible JavaScript library for building reusable
                UI components.used for building interactive user interfaces and
                web applications quickly and efficiently with significantly less
                code.
                <Card.Text>
                  <span className="fw-bold">Next js</span> uses Node.js (a
                  JavaScript runtime) under the hood, which makes it possible to
                  execute JavaScript server-side—i.e. server-side rendering
                  (SSR).
                  <Card.Text>
                    <span className="fw-bold"> React Native</span> is an
                    open-source JavaScript framework, designed for building apps
                    on multiple platforms like iOS, Android, and also web
                    applications.
                    <Card.Text>
                      <span className="fw-bold"> React Redux</span> It allows
                      React components to read data from a Redux Store, and
                      dispatch Actions to the Store to update data
                      <Card.Text>
                        <span className="fw-bold">CSS:</span>it is used for
                        describing the presentation of a document written in a
                        markup language
                      </Card.Text>
                    </Card.Text>
                  </Card.Text>
                </Card.Text>
              </Card.Text>
              <Card.Title className="text-bold">
                Node Js, Express js, MongoDB, Bootstrap, Git, GitHub,
                Material-UI
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row pt-lg-5 p-4">
        <h5 className="text_heading_3">Front-end Developer</h5>
        <Skills />
      </div>
    </div>
  );
};

export default Home;
