import { About, Contact, Skills } from "./index";
import Intro from "./Into";
// import Project from "./Project";
import Technology from "./Technology";
import Projects from "../Project/Projects";
const Home = () => {
  return (
    <div className="container-fluid pt-1 mt-1 p-4" id="home">
      <Intro />
      <div className="row pt-lg-5 px-2">
        <h2 className="text_heading_2  pb-md-2">My Awesome Skills</h2>
        <Skills />
        <h5 className="text_heading_3  py-5">My Best Projects</h5>
        {/* <Project /> */}
        <Projects />
        {/* <Technology /> i will include later*/}
        <div className="mt-5">
          <About />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
