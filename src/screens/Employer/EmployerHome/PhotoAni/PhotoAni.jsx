import React from "react";
import "./PhotoAni.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReferCard from "../../../../components/Employer/ReferCard/ReferCard";
import Hirecard from "../Hirecard";
import CreateCard from "../../../jobseeker/Home/CreateCard";
import Refer from "../../../jobseeker/Home/Refer";
// import Refer from "../../Refer";
// import CreateCard from "../../CreateCard";
// import Giveget from "../Giveget";



export default function PhotoAni() {
  return (
    <div className="Gallery_Containerrs">
      <div className="All_Sliderss">
        <h3 className="what_client_main_head">
          What can Jain Jobs help you with?
        </h3>
        <div className="Vertical_Slider">
          <div className="SliderM">
            <div className="Slides">
              <Refer />
            </div>
            <div className="Slides">
              {/* <CreateCard/> */}
              <Hirecard />
            </div>
            <div className="Slides">
              <CreateCard />
            </div>
            <div className="Slides">
              <Refer />
            </div>
            <div className="Slides">
              <CreateCard />
            </div>
            <div className="Slides">
              <CreateCard />
            </div>
            <div className="Slides">
              <Refer />
            </div>
            <div className="Slides">
              <Refer />
            </div>
            <div className="Slides">
              {/* <CreateCard/> */}
              <Hirecard />
            </div>


            <div className="Slides">
              <CreateCard />
            </div>

            <div className="Slides">
              <Refer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
