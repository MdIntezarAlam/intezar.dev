import { About, Contact, Skills } from "./index";
import Intro from "./Into";
import Project from "./Project";
import Projects from "../Project/Projects";
const Home = () => {
  return (
    <div className="container-fluid  home" id="home">
      <Intro />
      <div className="row pt-lg-5 px-2">
        <h2 className="text_heading_2  pb-md-2">My Awesome Skills</h2>
        <Skills />
        <h5 className="text_heading_3  py-5">My Best Projects</h5>
        <Projects />
        <div className="pt-4">
          <Project />
        </div>
        <div className="mt-5">
          <About />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
