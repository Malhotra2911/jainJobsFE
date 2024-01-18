import "../../../css/jobseeker/DreamJob.css";
import React from "react";
const DreamJob = () => {
  return (
    <div>
      <div className="Dream_Container">
        <div className="Dream_Content">
          <div className="telegram_img"></div>
          <div style={{marginLeft:"2rem"}} className="dreamjob_heading_main">

          <h1 className="dream_job_heading">
            Find Your <span style={{ color: "#F7701D" }}>Dream Jobs</span>
            {/* <br /> Easy And Fast */}
          </h1>
</div>
          <h3 className="dream_job_content">
            Identify your skills, explore <br />{" "}
            <span style={{ fontWeight: "bold" }}>JAIN</span> take a chance, and
            discover new projects and your dream job with us.ulty.
          </h3>

          {/* <h1 className="dream_job_heading">
            Find Your <span style={{ color: "#F7701D" }}>Dream Job</span> Here{" "}
            <br /> Easy And Fast
          </h1>
          <h3 className="dream_job_content">
            Finding proper jobs in India can be tough. <br />{" "}
            <span style={{ fontWeight: "bold" }}>FINDMYNEXT</span> is a platform
            where you can get desire jobs without any difficulty.
          </h3> */}
        </div>
        
        <div className="Dream_Img">
          <div className="rectangle_img">
            <div className="circle_img">
              <div className="subcircle_img">
                <div className="main_img">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
