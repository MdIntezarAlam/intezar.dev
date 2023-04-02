import { Skills } from "./index";
import Project from "../../image/Project";
import Intro from "./Into";
import Technology from "./Technology";

const Home = () => {
  return (
    <div className="container-fluid">
      <Intro />
      <div className="row pt-lg-5 p-4">
        <h2 className="text_heading_2   pb-md-4">My Awesome Skills</h2>
        <Skills />
        <h5 className="text_heading_3  py-5">My Best Projects</h5>
        <Project />
        {/* <Technology /> */}
      </div>
    </div>
  );
};

export default Home;
