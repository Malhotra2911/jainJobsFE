import React from "react";
import "../../../css/Employer/FlippingCard.css";

export default function FlippingCard({ FlipingCard }) {
  return (
    
    <div className="subscriptionFlippingcard_container">
      <div className="flippingcard_container">
        <div className="instanthiringcard1">
          <div className="fliping_close_btn">
            <button onClick={() => FlipingCard(false)}>X</button>
          </div>
          <div className="instanthiring_frontcontent">
            <div className="Instant-Head">
              <img
                src="employer/tele.png"
                alt=""
              />
              <h2>Instant hiring </h2>
            </div>
            <ul>
              <li>One time payment of 800 INR . Serves one opening.</li>
              <li>
                Advertisement valid for 10 days. Access to all applied CV'S upto
                12
              </li>
              <li>
                To access more applied CV'S the employer willl need to purchase
                subscription for 3/6/9 months.
              </li>
              <li>
                If the employer goes for subscription plan then the following
                benefits will be given.{" "}
              </li>
            </ul>
            <div className="front_btn">
              <button className="btn_buynowF">Buy Now</button>
            </div>
          </div>
          <div className="instanthiring_backcontent">
            <div className="backcontent_img">
              <h2>Benefits</h2>
              <img
                src="employer/benefit.png"
                alt=""
              />
            </div>
            <ul>
              <li>
                Unlimited Access to all applied CV'S
                <li> Filtering of relevant CV</li>
                <li> Access of GET and PET candidates</li>
                <li> Access of premium CV</li>
                <li>
                  RDA limited upto 50 relevant CV in a month as per your
                  opening.
                </li>
                <li> Can post 2 openings every month in total.</li>
                <li>
                  Referral benefits allowed while making payment. 1 referral max
                </li>
                <li> Free plan upgrade.</li>
                <li>
                  Connect with the employee of your choice and send invites*
                </li>
                <li>
                  Customize your hiring with FMN boost option for any existing
                  active opening.
                </li>
                <li>Access to Premium FMN hiring bid if on a subscription.</li>
                <li> Get full access in your login portal </li>
              </li>
            </ul>
            {/* </div> */}

            <div className="back_btn">
              <button className="btn_buynowB">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
