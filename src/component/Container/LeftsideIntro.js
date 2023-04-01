import { Link } from "react-router-dom";
import { homeImageData } from "../../utils/Contant";
import { Badge, Card } from "react-bootstrap";

const LeftsideIntro = () => {
  return (
    <div style={{ width: "100%" }}>
      <Card.Body>
        <Card.Title className="fs-1 bold">Hii I Am</Card.Title>
        <Card.Title className="text_heading_1">Md Intezar Alam</Card.Title>
        <Card.Text>
          Frontend development using modern technology such as React. I follow
          the best folder structure so that code will be more re-usable,
          scalable and flexibile. I mainly focus on code quality and
          performance. Redux or redux toolkit, localstorage and cookies are used
          for the state management. Html,Css, JavaScript, React Js, Git, GitHub,
          Node Js, Express Js & MongoDB
        </Card.Text>
        <Badge bg="primary" className="w-25 p-2">
          Hire Me
        </Badge>
        <Card.Body className="d-flex justify-content-lg-between  m-auto p-4  w-75">
          {homeImageData?.map((data) => (
            <Link to={data.img_link}>
              <img
                src={data.h_img1}
                alt="img_icon"
                class="rounded-pill"
                width={50}
                height={50}
                className="rounded-2 me-4"
              />
            </Link>
          ))}
        </Card.Body>
      </Card.Body>
    </div>
  );
};

export default LeftsideIntro;
