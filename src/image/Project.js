import Carousel from "react-bootstrap/Carousel";
import p1 from "../image/p1.jpg";
import p2 from "../image/p2.jpg";
import p3 from "../image/p3.jpg";
import p4 from "../image/p4.jpg";
import pp1 from "../image/pp1.jpg";
import pp2 from "../image/pp2.jpg";
import pp3 from "../image/pp3.jpg";
import pp4 from "../image/pp4.jpg";
import i1 from "../image/i1.jpg";
import p11 from "../image/p11.jpeg";
import p12 from "../image/p12.jpeg";
import p13 from "../image/p13.jpeg";
import p14 from "../image/p14.jpeg";
import p15 from "../image/p15.jpeg";
import p16 from "../image/p16.jpeg";
function Project() {
  return (
    <Carousel variant="dark" className="pb-5" property="100"  controls={true} fade={true} indicators={true}  interval={1000}>
      <Carousel.Item>
        <img className="d-block w-100" src={pp2} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={pp3} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={pp4} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={pp1} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={p3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={p2} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={p1} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={p2} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={p3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={p4} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Project;
