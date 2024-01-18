import React from "react";
import "../../../css/jobseeker/DreamJob.css";

export default function Quick() {
  return (
    <>
      <div className="Dream_Container">
        <div className="Dream_Content">
          <div className="telegram_img"></div>
          <div className="dreamjob_heading_main">

          <h1 className="dream_job_heading">
            {/* Save Time and Maximize{" "} */}
            Easy and Effective{" "}
            <span style={{ color: "#F7701D" }}>Job Searches</span>
            {/* <br /> Easy And Fast */}
          </h1>
          </div>
          <h3 className="dream_job_content">
            Get accurate solutions during your search and <br/>find projects that
            suit your skillset or land your desired job, easy and fast.
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
}
