import React from "react";
import "../../../css/jobseeker/Page404.css";

const Page404 = () => {
  return (
    <>
    <div className="error_container">
      <div className="number">404</div>
      <div className="text">
        <span>Ooops...</span>
        {/* <br> */}
        <br />
        page not found
      </div>
      <a
        className="me"
        href="https://codepen.io/uzcho_/pens/popular/?grid_type=list"
        target="_blank"
      ></a>
        </div>
    </>
  );
};

export default Page404;

