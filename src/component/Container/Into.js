import LeftsideIntro from "./LeftsideIntro";
import RightSideIntro from "./RightSideIntro";
import Technology from "./Technology";

const Intro = () => {
  return (
    <div className="container-fluid">
      <div className="row p-4">
        <div className="col-md-6">
          <LeftsideIntro />
        </div>
        <div className="col-md-6">
          <RightSideIntro />
        </div>
        <div className="row pt-5">
          <Technology />
        </div>
      </div>
    </div>
  );
};

export default Intro;
