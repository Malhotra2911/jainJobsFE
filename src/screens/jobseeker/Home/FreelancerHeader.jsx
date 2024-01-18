import "../../../css/jobseeker/DreamJob.css";
import React from "react";
const FreelancerHeader = () => {
  return (
    <>
      <div className="Dream_Container">
        <div className="Dream_Content">
          <div className="telegram_img"></div>
          <div className="dreamjob_heading_main">
          <h1 className="dream_job_heading">
            Save your time for{" "}
            <span style={{ color: "#F7701D" }}>applying</span>
            {/* <br /> Easy And Fast */}
          </h1>
</div>
          <h3 className="dream_job_content">
          We help you prioritize <br />{" "}
             your long and short term goals during the
          search and reduce your time and effort.
  </h3>
          {/* <h1 className="freelancer_job_heading">
          Get Registered as <span style={{color: "#F7701D"}}>freelancer</span><br /> and start hiring
         </h1>
         <h3 className="freelancer_job_content">
          Develope your existing skills with FMN <br /> specialised services.
         </h3> */}
        </div>
        <div className="Dream_Img">
          <div className="rectangle_img">
            <div className="circle_img">
              <div className="subcircle_img">
                <div className="main_freelancing_img">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreelancerHeader;
