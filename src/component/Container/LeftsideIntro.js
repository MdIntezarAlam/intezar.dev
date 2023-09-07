import { homeImageData } from "../../utils/Contant";
import { Badge, Card } from "react-bootstrap";
const text =
  "Working as Frontend React js/ Next Js / React Native Developer in  a Product based Company and having the zeal to up-skill, being efficient & productive for the company & develop as well as diversifying my professional skill-set. Looking forward to working as a software developer in a Multinational Company.Frontend developer using modern technology such as React. I follow the best folder structure so that code will be more re-usable,scalable and flexibile. I mainly focus on code quality and performance.Html,Css,Bootstrap,Tailwind Css, Shascn JavaScript, React Js/ Next JS, Typescript, Zustand, Redux or redux toolkit,, Git, GitHub,Node Js,Node Js,  Express Js & MongoDB";

const LeftsideIntro = () => {
  return (
      <Card.Body>
        <Card.Title className="fs-1 bold">Hii I Am</Card.Title>
        <Card.Title className="text_heading_1">Md Intezar Alam</Card.Title>
        <Card.Text className="text_style">{text}</Card.Text>
        <Badge bg="success" className="w-25 p-3 mb-4 mt-4">
          Hire Me
        </Badge>
        <Card.Body className="left_social_media_container">
          {homeImageData?.map((data) => (
            <a href={data.img_link}>
              <img
                src={data.h_img1}
                alt="img_icon"
                class="rounded-pill"
                width={40}
                height={40}
                className="rounded-2 "
              />
            </a>
          ))}
        </Card.Body>
      </Card.Body>
  );
};

export default LeftsideIntro;
