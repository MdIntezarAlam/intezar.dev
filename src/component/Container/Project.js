import Carousel from "react-bootstrap/Carousel";
import p1 from "../../image/p1.jpg";
import p2 from "../../image/p2.jpg";
import p3 from "../../image/p3.jpg";
import p4 from "../../image/p4.jpg";
import pp1 from "../../image/pp1.jpg";
import pp2 from "../../image/pp2.jpg";
import pp3 from "../../image/pp3.jpg";
function Project () {

  const projectData = [
    { o_1: pp2 },
    { o_1: pp3 },
    { o_1: pp1 },
    { o_1: p1 },
    { o_1: p3 },
    { o_1: p2 },
    { o_1: p4 },
    { o_1: p2 },

  ]
  return (
    <div className="w-50">
      <Carousel
        variant="white"
        className="pb-5"
        property="100"
        controls={true}
        fade={true}
        indicators={true}
        interval={300}
        slide={true}
        touch={true}
      >
        {projectData.map( ( data ) => (
          <Carousel.Item>
            <img className="carasol_img" src={data.o_1} alt="First slide" />
          </Carousel.Item>
        ) )}
      </Carousel>
    </div>
  );
}

export default Project;
