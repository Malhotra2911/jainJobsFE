import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ImQuotesLeft } from "react-icons/im";
import "../../../css/jobseeker/WhatClientSays.css";

export default function WhatClientSays() {
  return (
    <div className="WhatClientSays">
      <div className="whatclientsays">
        <div className="WhatClientSays-Head">
          <h1>What Client Says</h1>
        </div>
        <div className="WhatClientSays-car">
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
            <div className="WhatClientSays-card">
              {/* <div className='card-head-what'></div> */}
              <div className="name_location">
                <img
                  src="jobseeker/Profilephoto.svg"
                  alt=""
                  className="What-IMG"
                />
              </div>
              <h5 className="what-message-1">
                <ImQuotesLeft /> Omkar Hill, it is situated in developing area
                of Vatva, Narol. It is very nearby the old and famous lambha
                temple. It has five blocks having 1, 2 and 3 BHK option. It has
                very beautiful garden. All blocks have their own parking space.
                It has it's shopping complex itself. Divine Life International
                School is also nearb
              </h5>
              <h2 className="What-Name">Joggy Mathur</h2>
              <h3 className="What-loc">INDIA</h3>
            </div>
            <div className="WhatClientSays-card">
              {/* <div className='card-head-what'></div> */}
              <div className="name_location">
                <img
                  src="jobseeker/Profilephoto.svg"
                  alt=""
                />
              </div>
              <h5 className="what-message-1">
                <ImQuotesLeft /> Omkar Hill, it is situated in developing area
                of Vatva, Narol. It is very nearby the old and famous lambha
                temple. It has five blocks having 1, 2 and 3 BHK option. It has
                very beautiful garden. All blocks have their own parking space.
                It has it's shopping complex itself. Divine Life International
                School is also nearb
              </h5>
              <h2 className="What-Name">Ramalinga Reddy</h2>
              <h3 className="What-loc">INDIA</h3>
            </div>
            <div className="WhatClientSays-card">
              <div className="name_location">
                <img
                  src="jobseeker/Profilephoto.svg"
                  alt=""
                />
              </div>
              <h5 className="what-message-1">
                <ImQuotesLeft />
                Omkar Hill, it is situated in developing area of Vatva, Narol.
                It is very nearby the old and famous lambha temple. It has five
                blocks having 1, 2 and 3 BHK option. It has very beautiful
                garden. All blocks have their own parking space. It has it's
                shopping complex itself. Divine Life International School is
                also nearb
              </h5>
              <h2 className="What-Name">Basavaraj Bommai</h2>
              <h3 className="What-loc">INDIA</h3>
            </div>
            <div className="WhatClientSays-card">
              <div className="name_location">
                <img
                  src="jobseeker/Profilephoto.svg"
                  alt=""
                />
              </div>
              <h5 className="what-message-1">
                <ImQuotesLeft />
                Omkar Hill, it is situated in developing area of Vatva, Narol.
                It is very nearby the old and famous lambha temple. It has five
                blocks having 1, 2 and 3 BHK option. It has very beautiful
                garden. All blocks have their own parking space. It has it's
                shopping complex itself. Divine Life International School is
                also nearb
              </h5>
              <h2 className="What-Name">Charan Gurrupa</h2>
              <h3 className="What-loc">INDIA</h3>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
