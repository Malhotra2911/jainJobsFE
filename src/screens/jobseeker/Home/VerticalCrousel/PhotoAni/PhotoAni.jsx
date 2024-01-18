import React from "react";
// import "./PhotoAni.css";
import "../../../../../css/jobseeker/PhotoAni.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Refer from "../../Refer";
import CreateCard from "../../CreateCard";
import Giveget from "../Giveget";

export default function PhotoAni() {
  return (
    <div className="Gallery_Containerrs">
      <div className="All_Sliderss">
        <h3 className="what_client_main_head">
          What can jain job portal help you with?
        </h3>
        <div className="Vertical_Slider">
          <div className="SliderM">
            <div className="Slides">
              <Giveget />
            </div>
            <div className="Slides">
              <CreateCard />
            </div>
            {/* <div className="Slides">
              <Refer />
            </div> */}
            <div className="Slides">
              <Giveget />
            </div>
            <div className="Slides">
              <Refer />
            </div>
            <div className="Slides">
              <CreateCard />
            </div>
            <div className="Slides">
              {/* <Refer/> */}
              <Giveget />
            </div>
            <div className="Slides">
              <CreateCard />
            </div>
            {/* <div className="Slides">
              <Refer />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
