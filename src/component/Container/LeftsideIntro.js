import { Link } from "react-router-dom";
import { homeImageData } from "../../utils/Contant";
import { Badge, Card } from "react-bootstrap";

const text =
  "Frontend development using modern technology such as React. I follow the best folder structure so that code will be more re-usable,scalable and flexibile. I mainly focus on code quality andperformance. Redux or redux toolkit, localstorage and cookies are usedfor the state management. Html,Css, JavaScript, React Js, Git, GitHub,Node Js, Express Js & MongoDB";

const LeftsideIntro = () => {
  return (
      <Card.Body>
        <Card.Title className="fs-1 bold">Hii I Am</Card.Title>
        <Card.Title className="text_heading_1">Md Intezar Alam</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Badge bg="primary" className="w-25 p-2">
          Hire Me
        </Badge>
        <Card.Body className="left_social_media_container">
          {homeImageData?.map((data) => (
            <Link to={data.img_link}>
              <img
                src={data.h_img1}
                alt="img_icon"
                class="rounded-pill"
                width={40}
                height={40}
                className="rounded-2 "
              />
            </Link>
          ))}
        </Card.Body>
      </Card.Body>
  );
};

export default LeftsideIntro;
