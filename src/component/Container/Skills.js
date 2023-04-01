import React, { useState } from "react";
import {Card } from "react-bootstrap";
import { SkiilsData } from '../../utils/Contant'


const Skills = () => {
  const [skills, setSkiils] = useState(SkiilsData)

  return (
    <div className="container-fluid">
      <div className="row">
      <h5 className="text_heading_3">Front-end Developer</h5>
        {skills && skills.length > 0 ? skills.map((data) => (
          <div className="col-md-6 col-lg-3 col-sm-6 col-12 mb-4">
            <div className="card">
              <Card>
                <Card.Img variant="top" src={data.skillsImg} height={190} />
                <Card.Body>
                  <Card.Title>{data.skiilsTitle}</Card.Title>
                  <Card.Text>{data.skillsText}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        )) : <span>no data</span>}
      </div>
    </div>
  );
};

export default Skills;
