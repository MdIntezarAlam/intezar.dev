import { projectData } from "../../utils/Contant";
import VideoProject from "./VideoProject";

const Projects = () => {
  return (
    <div className="container-fluid" id="skills">
      <div className="row">
        <VideoProject />
        {projectData.map((data) => (
          <div className="col-sm-6 col-md-6 col-lg-3 mt-5">
            <div class="card text-left bg-dark">
              <img
                class="card-img-top"
                src={data.img}
                alt="img"
                width={100}
                height={185}
              />
              <div class="card-body">
                <h4 class="card-title text-white">{data.title}</h4>
                <p class="card-text  text-white">{data.description}</p>
              </div>
              <div className="d-flex align-items-center justify-content-around mb-2">
                <a href={data.github}>
                  <button className="inner_btn">View on Github</button>
                </a>
                <a href={data.live}>
                  <button className="inner_btn">Live</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <VideoProject />
      </div>
    </div>
  );
};

export default Projects;
