import React from "react";
import { useState } from "react";
import "../../../css/Employer/FlippingCardPage.css";
import { SubflipingCard } from "./subplanflipingCard/SubflipingCard";
import { CombohiringSubpopup } from "./subplanflipingCard/CombohiringSubpopup";
import { CreateMyOwnPlan } from "./subplanflipingCard/CreateMyOwnPlan";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "@mui/material";

export const EmpPlanDetails = () => {
  const [openPlan, setOpenPlan] = useState(false);
  const [opencomboplan, setOpenComboPlan] = useState(false);
  const [ownPlanOpen, setOwnPlanOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <div className="subscriptionFlippingcard_containers">
            <div className="top2_card">
              <div className="flippingcard_container_main">
                <div className="instanthiringcard_main">
                  <div className="instanthiring_frontcontent">
                    <div className="Instant-Head">
                      <img
                        src="employer/tele.png"
                        alt=""
                        className="front_img_flip"
                      />
                      <h2>Instant hiring </h2>
                    </div>
                    <ul>
                      <li className="content_li">
                        One time payment of 800 INR . Serves one opening.
                      </li>
                      <li className="content_li">
                        Advertisement valid for 10 days. Access to all applied
                        CV'S upto 12
                      </li>
                      <li className="content_li">
                        To access more applied CV'S the employer willl need to
                        purchase subscription for 3/6/9 months.
                      </li>
                      <li className="content_li">
                        If the employer goes for subscription plan then the
                        following benefits will be given.{" "}
                      </li>
                    </ul>
                    <div className="front_btn">
                      <button className="btn_buynowF">Buy Now</button>
                    </div>
                  </div>
                  <div className="instanthiring_backcontent">
                    <div className="backcontent_img">
                      <h2>Benefits</h2>
                      <img src="employer/benefit.png" alt="" />
                    </div>

                    {/* <div className="backcontent"> */}
                    <ul>
                      <li className="content_li">
                        Unlimited Access to all applied CV'S
                        <li className="content_li">
                          {" "}
                          Filtering of relevant CV
                        </li>
                        <li className="content_li">
                          {" "}
                          Access of GET and PET candidates
                        </li>
                        <li className="content_li"> Access of premium CV</li>
                        <li className="content_li">
                          RDA limited upto 50 relevant CV in a month as per your
                          opening.
                        </li>
                        <li className="content_li">
                          {" "}
                          Can post 2 openings every month in total.
                        </li>
                        <li className="content_li">
                          Referral benefits allowed while making payment. 1
                          referral max
                        </li>
                        <li className="content_li"> Free plan upgrade.</li>
                        <li className="content_li">
                          Connect with the employee of your choice and send
                          invites*
                        </li>
                        <li className="content_li">
                          Customize your hiring with FMN boost option for any
                          existing active opening.
                        </li>
                        <li className="content_li">
                          Access to Premium FMN hiring bid if on a subscription.
                        </li>
                        <li className="content_li">
                          {" "}
                          Get full access in your login portal{" "}
                        </li>
                      </li>
                    </ul>
                    {/* </div> */}

                    <div className="back_btn">
                      <button
                        className="btn_buynowBackend"
                        onClick={() => setOpenPlan(true)}
                      >
                        Buy Now
                      </button>
                      {openPlan && <SubflipingCard openplan={setOpenPlan} />}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flippingcard_container_main">
                <div className="instanthiringcard_main">
                  <div className="instanthiring_frontcontent">
                    <div className="Instant-Head">
                      <img src="employer/tele.png" alt="" />
                      <h2>Combo hiring </h2>
                    </div>
                    <ul>
                      <li className="content_li">
                        One time payment of 1300 INR for two openings to begin
                        with.
                      </li>
                      <li className="content_li">
                        Valid for 20 days. Access to all applied CV upto 18. To
                        access more switch to subscription
                      </li>
                      <li className="content_li">3 subscription plans---</li>
                      <li className="content_li">3 months 3750 INR</li>
                      <li className="content_li">6 months 7200 INR a</li>
                      <li className="content_li">9 months for 9900 INR.</li>
                    </ul>
                    <div className="front_btn">
                      <button className="btn_buynowF">Buy Now</button>
                    </div>
                  </div>
                  <div className="instanthiring_backcontent">
                    <div className="backcontent_img">
                      <h2>Benefits</h2>
                      <img src="employer/benefit.png" alt="" />
                    </div>

                    {/* <div className="backcontent"> */}
                    <ul>
                      <li className="content_li">
                        Unlimited Access to all applied CV'S
                        <li className="content_li">
                          {" "}
                          Filtering of relevant CV
                        </li>
                        <li className="content_li">
                          {" "}
                          Access of GET and PET candidates
                        </li>
                        <li className="content_li"> Access of premium CV</li>
                        <li className="content_li">
                          RDA limited upto 50 relevant CV in a month as per your
                          opening.
                        </li>
                        <li className="content_li">
                          {" "}
                          Can post 2 openings every month in total.
                        </li>
                        <li className="content_li">
                          Referral benefits allowed while making payment. 1
                          referral max
                        </li>
                        <li className="content_li"> Free plan upgrade.</li>
                        <li>
                          Connect with the employee of your choice and send
                          invites*
                        </li>
                        <li className="content_li">
                          Customize your hiring with FMN boost option for any
                          existing active opening.
                        </li>
                        <li className="content_li">
                          Access to Premium FMN hiring bid if on a subscription.
                        </li>
                        <li className="content_li">
                          {" "}
                          Get full access in your login portal{" "}
                        </li>
                      </li>
                    </ul>
                    {/* </div> */}

                    <div className="back_btn">
                      <button
                        className="btn_buynowBackend"
                        onClick={() => setOpenComboPlan(true)}
                      >
                        Buy Now
                      </button>
                    </div>
                    {opencomboplan && (
                      <CombohiringSubpopup OpenComboPlan={setOpenComboPlan} />
                    )}
                  </div>
                </div>
              </div>
              <div className="flippingcard_container_main">
                <div className="instanthiringcard_main">
                  <div className="instanthiring_frontcontent">
                    <div className="Instant-Head">
                      <img src="employer/tele.png" alt="" />
                      <h2>Create My Own Plan </h2>
                    </div>
                    <ul>
                      <li className="content_li">
                        {/* One time payment of 800 INR . Serves one opening. */}
                        Create your own plan support upto 4 new hirings in every
                        month.
                      </li>
                      <li className="content_li">
                        {/* Advertisement valid for 10 days. Access to all applied CV'S
                    
                    upto 12 */}
                        Fully customisable. This is a subscription based
                        service.
                      </li>
                      <li className="content_li">
                        {/* To access more applied CV'S the employer willl need to
                    purchase subscription for 3/6/9 months. */}
                      </li>
                      <li className="content_li">
                        {/* If the employer goes for subscription plan then the
                    following benefits will be given.{" "} */}
                      </li>
                    </ul>
                    <div className="front_btn">
                      <button className="btn_buynowF">Buy Now</button>
                    </div>
                  </div>
                  <div className="instanthiring_backcontent">
                    <div className="backcontent_img">
                      <h2>Benefits</h2>
                      <img src="employer/benefit.png" alt="" />
                    </div>

                    {/* <div className="backcontent"> */}
                    <ul>
                      <li className="content_li">
                        Unlimited Access to all applied CV'S
                        <li className="content_li">
                          {" "}
                          Filtering of relevant CV
                        </li>
                        <li className="content_li">
                          {" "}
                          Access of GET and PET candidates
                        </li>
                        <li className="content_li"> Access of premium CV</li>
                        <li className="content_li">
                          RDA limited upto 50 relevant CV in a month as per your
                          opening.
                        </li>
                        <li className="content_li">
                          {" "}
                          Can post 2 openings every month in total.
                        </li>
                        <li className="content_li">
                          Referral benefits allowed while making payment. 1
                          referral max
                        </li>
                        <li className="content_li"> Free plan upgrade.</li>
                        <li className="content_li">
                          Connect with the employee of your choice and send
                          invites*
                        </li>
                        <li className="content_li">
                          Customize your hiring with FMN boost option for any
                          existing active opening.
                        </li>
                        <li className="content_li">
                          Access to Premium FMN hiring bid if on a subscription.
                        </li>
                        <li className="content_li">
                          {" "}
                          Get full access in your login portal{" "}
                        </li>
                      </li>
                    </ul>
                    {/* </div> */}

                    <div className="back_btn">
                      <button
                        className="btn_buynowBackend"
                        onClick={() => setOwnPlanOpen(true)}
                      >
                        Buy Now
                      </button>
                    </div>
                    {ownPlanOpen && (
                      <CreateMyOwnPlan ownplanopen={setOwnPlanOpen} />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="bottomtwocard">
              <div className="flippingcard_container_main">
                <div className="instanthiringcard_main">
                  <div className="instanthiring_frontcontent">
                    <div className="Instant-Head">
                      <img src="employer/tele.png" alt="" />
                      <h2>Pay Per Click </h2>
                    </div>
                    <ul>
                      <li className="content_li">
                        One time payment of 1300 INR for two openings to begin
                        with.
                      </li>
                      <li className="content_li">
                        Valid for 20 days. Access to all applied CV upto 18. To
                        access more switch to subscription
                      </li>
                      <li className="content_li">3 subscription plans---</li>
                      <li className="content_li">3 months 3750 INR</li>
                      <li className="content_li">6 months 7200 INR a</li>
                      <li className="content_li">9 months for 9900 INR.</li>
                    </ul>
                    <div className="front_btn">
                      <button className="btn_buynowF">Buy Now</button>
                    </div>
                  </div>
                  <div className="instanthiring_backcontent">
                    <div className="backcontent_img">
                      <h2>Benefits</h2>
                      <img src="employer/benefit.png" alt="" />
                    </div>

                    {/* <div className="backcontent"> */}
                    <ul>
                      <li className="content_li">
                        Unlimited Access to all applied CV'S
                        <li className="content_li">
                          {" "}
                          Filtering of relevant CV
                        </li>
                        <li className="content_li">
                          {" "}
                          Access of GET and PET candidates
                        </li>
                        <li className="content_li"> Access of premium CV</li>
                        <li className="content_li">
                          RDA limited upto 50 relevant CV in a month as per your
                          opening.
                        </li>
                        <li className="content_li">
                          {" "}
                          Can post 2 openings every month in total.
                        </li>
                        <li className="content_li">
                          Referral benefits allowed while making payment. 1
                          referral max
                        </li>
                        <li className="content_li"> Free plan upgrade.</li>
                        <li>
                          Connect with the employee of your choice and send
                          invites*
                        </li>
                        <li className="content_li">
                          Customize your hiring with FMN boost option for any
                          existing active opening.
                        </li>
                        <li className="content_li">
                          Access to Premium FMN hiring bid if on a subscription.
                        </li>
                        <li className="content_li">
                          {" "}
                          Get full access in your login portal{" "}
                        </li>
                      </li>
                    </ul>
                    {/* </div> */}

                    <div className="back_btn">
                      <button className="btn_buynowBackend">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flippingcard_container_main">
                <div className="instanthiringcard_main">
                  <div className="instanthiring_frontcontent">
                    <div className="Instant-Head">
                      <img src="employer/tele.png" alt="" />
                      <h2>FMN Bid </h2>
                    </div>
                    <ul>
                      <li className="content_li">
                        One time payment of 1300 INR for two openings to begin
                        with.
                      </li>
                      <li className="content_li">
                        Valid for 20 days. Access to all applied CV upto 18. To
                        access more switch to subscription
                      </li>
                      <li className="content_li">3 subscription plans---</li>
                      <li className="content_li">3 months 3750 INR</li>
                      <li className="content_li">6 months 7200 INR a</li>
                      <li className="content_li">9 months for 9900 INR.</li>
                    </ul>
                    <div className="front_btn">
                      <button className="btn_buynowF">Buy Now</button>
                    </div>
                  </div>
                  <div className="instanthiring_backcontent">
                    <div className="backcontent_img">
                      <h2>Benefits</h2>
                      <img src="employer/benefit.png" alt="" />
                    </div>

                    {/* <div className="backcontent"> */}
                    <ul>
                      <li className="content_li">
                        Unlimited Access to all applied CV'S
                        <li className="content_li">
                          {" "}
                          Filtering of relevant CV
                        </li>
                        <li className="content_li">
                          {" "}
                          Access of GET and PET candidates
                        </li>
                        <li className="content_li"> Access of premium CV</li>
                        <li className="content_li">
                          RDA limited upto 50 relevant CV in a month as per your
                          opening.
                        </li>
                        <li className="content_li">
                          {" "}
                          Can post 2 openings every month in total.
                        </li>
                        <li className="content_li">
                          Referral benefits allowed while making payment. 1
                          referral max
                        </li>
                        <li className="content_li"> Free plan upgrade.</li>
                        <li>
                          Connect with the employee of your choice and send
                          invites*
                        </li>
                        <li className="content_li">
                          Customize your hiring with FMN boost option for any
                          existing active opening.
                        </li>
                        <li className="content_li">
                          Access to Premium FMN hiring bid if on a subscription.
                        </li>
                        <li className="content_li">
                          {" "}
                          Get full access in your login portal{" "}
                        </li>
                      </li>
                    </ul>
                    {/* </div> */}

                    <div className="back_btn">
                      <button className="btn_buynowBackend">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
