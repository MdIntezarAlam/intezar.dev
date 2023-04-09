import React from "react";
import { videoProjectData } from "../../utils/Contant";
const VideoProject = () => {
  return (
    <>
      {videoProjectData.map((data) => (
        <div className="col-sm-6 col-md-6 col-lg-3 mt-5">
          <div class="card text-left bg-dark">
            <video autoPlay muted loop>
              <source src={data.img} type="video/mp4" />
            </video>
            <div class="card-body">
              <h4 class="card-title text-white">{data.tilte}</h4>
              <p class="card-text  text-white">{data.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default VideoProject;
