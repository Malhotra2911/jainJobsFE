import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Employerhomebanner1 from './Employerhomebanner1'
import Employerhomebanner2 from './Employerhomebanner2'
import Employerhomebanner3 from './Employerhomebanner3';
import Employerhomebanner4 from './Employerhomebanner4';
import Employerhomebanner5 from './Employerhomebanner5';
import Employerhomebanner6 from './Employerhomebanner6';
import Employerhomebanner7 from './Employerhomebanner7';
import Employerhomebanner8 from './Employerhomebanner8';
import Employerhomebanner9 from './Employerhomebanner9';
import Employerhomebanner10 from './Employerhomebanner10';

export default function EmployerHeader() {
  return (
    <div>
          <div className="employerheader_con">
          <Carousel
            infiniteLoop={true}
            autoPlay={true}
            showIndicators={true}
            stopOnHover={true}
            autoFocus={true}
            showStatus={false}
            showThumbs={false}
            showArrows={true}
            dots={true}
          >
            {/* <Employerhomebanner1/> */}
            <Employerhomebanner2/>
            <Employerhomebanner3/>
            <Employerhomebanner4/>
            <Employerhomebanner5/>
            <Employerhomebanner6/>
          </Carousel>
        {/* </div> */}
    </div>
    </div>
  )
}
