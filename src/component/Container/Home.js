import React, { useState } from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Skills } from "./index";
import { homeImageData } from "../../utils/Contant";
import Project from "../../image/Project";
import i1 from '../../image/i1.jpg'
import i2 from '../../image/i2.jpg'
import i3 from '../../image/i3.jpg'

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row p-4">
          <div className="col-md-6">
            <div style={{ width: "100%" }}>
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
                  JavaScript, React Js, Git, GitHub, Node Js, Express Js &
                  MongoDB
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
            </div>
          </div>
          <div className="col-md-6">
            <Card>
              <img src={i1} width={100} height={100} className="rounded" alt="card_mg" />
              <img src={i3} width={100} height={100} className="rounded" alt="card_mg" />
              <img src={i3} width={100} height={100} className="rounded" alt="card_mg" />
            </Card>
          </div>
          <div className="row pt-5">
            <div className="col-md8 col-sm-12 col-lg-8">
              <Card>
                <Card.Body>
                  <Card.Title className="text_technology_heading">
                    Technology
                  </Card.Title>
                  <Card.Text>
                    <span className="fw-bold">React js</span> is a declarative,
                    efficient, and flexible JavaScript library for building
                    reusable UI components.used for building interactive user
                    interfaces and web applications quickly and efficiently with
                    significantly less code.
                    <Card.Text>
                      <span className="fw-bold">Next js</span> uses Node.js (a
                      JavaScript runtime) under the hood, which makes it
                      possible to execute JavaScript server-side—i.e.
                      server-side rendering (SSR).
                      <Card.Text>
                        <span className="fw-bold"> React Native</span> is an
                        open-source JavaScript framework, designed for building
                        apps on multiple platforms like iOS, Android, and also
                        web applications.
                        <Card.Text>
                          <span className="fw-bold"> React Redux</span> It
                          allows React components to read data from a Redux
                          Store, and dispatch Actions to the Store to update
                          data
                          <Card.Text>
                            <span className="fw-bold">CSS:</span>it is used for
                            describing the presentation of a document written in
                            a markup language
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
        </div>

        <div className="row pt-lg-5 p-4">
          <h2 className="text_heading_2 pt-2 pb-md-4">My Awesome Skills</h2>
          <Skills />
          <h5 className="text_heading_3 p-lg-5">My Best Projects</h5>
          <Project />
        </div>
      </div>
    </>
  );
};

export default Home;
