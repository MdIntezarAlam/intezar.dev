import { Card } from "react-bootstrap";
import { SkiilsData } from '../../utils/Contant'


const Skills = () => {
  return (
    <div className="container-fluid" id="skills">
      <div className="row">
        <h5 className="text_heading_3 py-1">Full Stack Developer</h5>
        {SkiilsData.map( ( data ) => (
          <div className="col-md-6 col-lg-3 col-sm-6 col-12 mb-4">
            <div className="card" style={{ height: "100%" }}>
              <Card style={{ height: "100%" }}>
                <Card.Img variant="top" src={data.skillsImg} height={130} />
                <Card.Body>
                  <Card.Title>{data.skiilsTitle}</Card.Title>
                  <Card.Text>{data.skillsText}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        ) )}
      </div>
    </div>
  );
};

export default Skills;
