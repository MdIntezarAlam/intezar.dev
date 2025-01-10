/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/heading-has-content */
import { Badge, Card } from "react-bootstrap";
import resume from "../../component/Resume/resume.pdf";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { RiFacebookCircleFill } from "react-icons/ri";

const text =
  "Working as Frontend React js/ Next Js / React Native Developer in  a Product based Company and having the zeal to up-skill, being efficient & productive for the company & develop as well as diversifying my professional skill-set. Looking forward to work as a software developer in a Multinational Company.Frontend developer using modern technology such as React Js/ Next JS, Typescript,Bootstrap,Tailwind Css,Shadcn, Zustand, Redux or redux toolkit,Git,GitHub,Node Js,ExpressJs & MongoDB. I follow the best folder structure so that code will be more re-usable,scalable and flexibile. I mainly focus on code quality and performance.";

const LeftsideIntro = () => {
  return (
    <Card.Body>
      <Card.Title className="fs-1 text-primary bold">Hii I Am</Card.Title>
      <Card.Title className="text_heading_1">Md Intezar Alam</Card.Title>
      <Card.Text className="text_style">{text}</Card.Text>
      <Badge bg="success" className="w-25 p-3 mb-4 mt-4 " style={{ cursor: "pointer" }}>
        <a href={resume} target="_blank" style={{ textDecoration: "none", color: "inherit", }}>
          Hire Me
        </a>
      </Badge>
      <h1 className="change_content" />
      <Card.Body className="left_social_media_container">
        <a className='social' href="https://www.linkedin.com/in/md-intezar-alam-92814b226/" target="_blank">
          <FaLinkedin size={40} className='linkedin' />
        </a>
        <a className='social' href="https://github.com/MdIntezarAlam" target="_blank">
          <FaSquareGithub size={40} className='github' />
        </a>
        <a className='social' href="https://www.instagram.com/mdintezar123/" target="_blank">
          <FaInstagram size={40} className='red' />
        </a>
        <a className='social' href="https://www.facebook.com/mdintezar.alam.5249" target="_blank">
          <RiFacebookCircleFill size={40} className='facebook' />
        </a>
        <a className='social' href="https://wa.me/6238564088" target="_blank">
          <FaWhatsapp size={40} className='green' />
        </a>
      </Card.Body>
    </Card.Body>
  );
};

export default LeftsideIntro;
