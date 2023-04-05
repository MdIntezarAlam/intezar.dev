import LeftsideIntro from "./LeftsideIntro";
import RightSideIntro from "./RightSideIntro";

const Intro = () => {
  return (
    <div className="container-fluid pt-4">
      <div className="row">
        <div className="col-md-6">
          <LeftsideIntro />
        </div>
        <div className="col-md-6">
          <RightSideIntro />
        </div>
      </div>
    </div>
  );
};

export default Intro;
