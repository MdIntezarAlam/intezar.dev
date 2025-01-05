import React from "react";
import contact_logo from "../../image/contact_logo.svg";
import c1 from "../../image/c1.svg";
import c2 from "../../image/c2.svg";
const Contact = () => {
  return (
    <div className="container mt-5" id="contact">
      <div className="row  align-items-center ">
        <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
          <img
            src={contact_logo}
            alt="contact logo"
            width={300}
            height={300}
          />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 mt-3">
          <h1 style={{ color: "#fff" }}>Hi There,</h1>
          <h3 style={{ color: "#fff" }}>Glad to contact me</h3>
          <div className="mt-3 d-flex align-items-center justify-content-start">
            <img src={c1} alt="email" width={20} height={20} />
            <span className="ms-4 fs-5 fw-medium">mdintezara35@gmail.com</span>
          </div>
          <div className="mt-3 d-flex align-items-center justify-content-start">
            <img src={c2} alt="email" width={20} height={20} />
            <span className="ms-4 fs-5 fw-medium">+91 6238564088</span>
          </div>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
