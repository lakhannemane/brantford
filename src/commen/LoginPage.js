import React from "react";
import loginImage from "../Assets/loginpageImage.jpg";

const LoginPage = () => {
  return (
    <div
      className=""
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        background: "#",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-sm-12 col-md-6 ">
            <div style={{ marginTop: "45px" }}>
              <img src={loginImage} alt="loginPage" width={580} />
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-6">
            <div style={{ marginTop: "45px" }}>
              <h1>hello</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
