import React from "react";
import "../../../css/jobseeker/FeaturedCompanies.css"
export default function FeaturedCompanies() {
  return (

    <div className="FeaturedCompanies" id="Company">
      <div className="featuredcompanies">
        <div className="head-FC">
          {/* <h2>Featured companies actively hiring</h2>
          <h4 className="YFBH">Your Future Begins Here</h4> */}
        </div>
        <div className="body-FC">
          <div className="body-FC-col-1">
            <div className="images_KPIT">
              <img src="jobseeker/KPIT.png" alt="" className="FCIMG" />
            </div>
            <div className="images_HCL">
              <img src= "jobseeker/HCL.png" alt="" className="FCIMG" />
            </div>
            <div className="images_Apple">
              <img src="jobseeker/Apple.png" alt="" className="FCIMG" />
            </div>
            <div className="images_FCart1">
              <img src="jobseeker/FCart.png" alt="" className="FCIMG" />
            </div>
            <div className="images_TCS">
              <img src="jobseeker/TCS.png" alt="" className="FCIMG" />
            </div>
          </div>
          <div className="body-FC-col-2">
            <div className="images_Adobe">
              <img src="jobseeker/Adobe.png" alt="" className="FCIMG" />
            </div>
            <div className="images_FCart">
              <img src="jobseeker/FCart.png" alt="" className="FCIMG" />
            </div>
            <div className="images_Infosys">
              <img src="jobseeker/Infosys.png" alt="" className="FCIMG" />
            </div>
            <div className="images_4">
              <img src="jobseeker/az.png" alt="" className="FCIMG" />
            </div>
            <div className="images_Infosys">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
