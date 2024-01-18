import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ImQuotesLeft } from "react-icons/im";
import "../../../css/jobseeker/WhatClientSays.css";
import DreamJob from "./DreamJob"
import FreelancerHeader from "./FreelancerHeader"
import Quick from "./Quick";
import Global from "./Global";
import Boost from "./Boost";
import Boost2 from "./Boost2";
import Global2 from "./Global2";
import Quick2 from "./Quick2";
import FreelancerHeader2 from "./FreelancerHeader2"

import Dream2 from "./Dream2"
export default function TopHeader() {
  return (
    <div className="WhatClientSays">
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
        <DreamJob />
        <Dream2 />
        <FreelancerHeader />
        <FreelancerHeader2 />

        <Quick />
        <Quick2 />
        <Boost2 />

        <Global />
        <Global2 />

        <Boost />
        <Dream2 />
        <FreelancerHeader />
        <Quick2 />
        <Global2 />
        <Boost />

      </Carousel>
    </div>
  );
}
