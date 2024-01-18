import React from "react";
import { useState } from "react";
import "../../../css/Employer/FlippingCardPage.css";
import { CombohiringSubpopup } from "./subplanflipingCard/CombohiringSubpopup";
import { CreateMyOwnPlan } from "./subplanflipingCard/CreateMyOwnPlan";
import { useDispatch, useSelector } from "react-redux";
import { Get_Plans } from "../../../redux/action/CommonAction";
import { InstanthairingSubpop } from "./subplanflipingCard/InstanthairingSubpop";
import { PayPerClickSubpop } from "./subplanflipingCard/PayPerClickSubpop";
import { useNavigate, useParams } from "react-router-dom";
import { makesubscribation } from "../../../redux/action/JobSeekerAction";
import { CircularLoding } from "../../../redux/action/AuthAction";
import Swal from "sweetalert2";
import { displayRazorpay } from "../../../RazorPay/RazorPay";
import { toast } from "react-toastify";
import axiosInstance from "../../../utils/axiosInstance";
import { BidSubpopup } from "./subplanflipingCard/BidSubpopup";

export const FlipingCardPage = () => {
  const [openInstantplan, setopenInstantplan] = useState(false);
  const [opencomboplan, setOpenComboPlan] = useState(false);
  const [ownPlanOpen, setOwnPlanOpen] = useState(false);
  const [opayperplan, setopayperplan] = useState(false);
  const [openbidplan, setopenbidplan] = useState(false);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { credit } = useSelector((state) => state.AuthReducer);
  var { TYPE, USER_ID } = useParams();

  React.useEffect(() => {
    dispatch(Get_Plans());
  }, []);

  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  };
  const setfinaldata = (PLANTYPE, money, month) => {
    if (!TYPE && !USER_ID && !PLANTYPE && !money && !month) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      }).then(() => {
        window.location.reload();
        return false;
      });
    }

    let price = credit;
    let reduceamount = credit;

    if (price > 1) {
      if (price > money) {
        price = 1;
        reduceamount = credit - money;
      } else {
        price = money - price;
      }

      setopenInstantplan(false);
      setOpenComboPlan(false);
      setOwnPlanOpen(false);
      setopayperplan(false);
      setopenbidplan(false);
      Swal.fire({
        title: "Do You Want to add your credit ",
        text: `if you will add credit your payable ammount will be ${price}`,
        icon: "warning",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "yes add",
        denyButtonText: `Don't add`,
      }).then((result) => {
        if (result.isConfirmed) {
          axiosInstance
            .post("employer/update-credit", { minuscredit: reduceamount })
            .then((res) => {
              if (res.data.status === 1) {
                makeprice(PLANTYPE, 1, month);
              } else {
                toast.error(res.data.message);
              }
            });
        } else if (result.isDenied) {
          makeprice(PLANTYPE, money, month);
        }
      });
    } else {
      makeprice(PLANTYPE, money, month);
    }
  };

  const makeprice = (PLANTYPE, price, month) => {
    const userdata = {
      userid: USER_ID,
      ammount: price,
    };

    displayRazorpay(userdata, (data) => {
      const userdata = {
        USER_ID: USER_ID,
        AMMOUNT: price,
        SUB_PLAN: 0,
        PAYMENT_ID: data.razorpay_order_id,
        TYPE_OF_PLAN: PLANTYPE,
        SUB_TYPE_OF_PLAN: 0,
        LENGTH_OF_PLAN: parseInt(month) * 30,
      };
      dispatch(
        makesubscribation(userdata, Loading, (res) => {
          if (res.data.status === 1) {
            if (parseInt(TYPE) == 2) {
              Swal.fire({
                icon: "success",
                title: "your have successfully purches this plan :)",
                showConfirmButton: false,
                timer: 1500,
              }).then(() => {
                navigation("/subscriptiondetails");
                setTimeout(() => {
                  window.location.reload();
                }, 1500);
              });
            }

            if (parseInt(TYPE) === 1) {
              Swal.fire({
                icon: "success",
                title:
                  "your have successfully purches this plan :)   please login and continue ",
                showConfirmButton: false,
                timer: 1500,
              }).then(() => {
                navigation("/signuplogin");
                setTimeout(() => {
                  window.location.reload();
                }, 1500);
              });
            }
          }

          if (res.data.status === 0) {
          }
        })
      );
    });
  };

  return (
    <div>
      <div className="subscriptionFlippingcard_containers">
        <div className="top2_card">
          {/* //instant hireing */}
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
                    Advertisement valid for 10 days. Access to all applied CV'S
                    upto 12
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
                  <button
                    className="btn_buynowF"
                    onClick={() => {
                      setopenInstantplan(true);
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="instanthiring_backcontent">
                <div className="backcontent_img">
                  <h2>Benefits</h2>
                  <img src="employer/benefit.png" alt="" />
                </div>
                <ul>
                  <li className="content_li">
                    Unlimited Access to all applied CV'S
                    <li className="content_li"> Filtering of relevant CV</li>
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
                      Referral benefits allowed while making payment. 1 referral
                      max
                    </li>
                    <li className="content_li"> Free plan upgrade.</li>
                    <li className="content_li">
                      Connect with the employee of your choice and send invites*
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
                <div className="back_btn">
                  <button
                    className="btn_buynowBackend"
                    onClick={() => {
                      setopenInstantplan(true);
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>

              {openInstantplan && (
                <InstanthairingSubpop
                  OpenComboPlan={setopenInstantplan}
                  setfinaldata={setfinaldata}
                />
              )}
            </div>
          </div>
          {/* combo hiring */}

          <div className="flippingcard_container_main">
            <div className="instanthiringcard_main">
              <div className="instanthiring_frontcontent">
                <div className="Instant-Head">
                  <img src="employer/tele.png" alt="" />
                  <h2>Combo hiring </h2>
                </div>
                <ul>
                  <li className="content_li">
                    One time payment of 1300 INR for two openings to begin with.
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
                  <button
                    className="btn_buynowF"
                    onClick={() => setOpenComboPlan(true)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="instanthiring_backcontent">
                <div className="backcontent_img">
                  <h2>Benefits</h2>
                  <img src="employer/benefit.png" alt="" />
                </div>
                <ul>
                  <li className="content_li">
                    Unlimited Access to all applied CV'S
                    <li className="content_li"> Filtering of relevant CV</li>
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
                      Referral benefits allowed while making payment. 1 referral
                      max
                    </li>
                    <li className="content_li"> Free plan upgrade.</li>
                    <li>
                      Connect with the employee of your choice and send invites*
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
                  <CombohiringSubpopup
                    setfinaldata={setfinaldata}
                    OpenComboPlan={setOpenComboPlan}
                  />
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
                    Create your own plan support upto 4 new hirings in every
                    month.
                  </li>
                  <li className="content_li">
                    Fully customisable. This is a subscription based service.
                  </li>
                  <li className="content_li"></li>
                  <li className="content_li"></li>
                </ul>
                <div className="front_btn">
                  <button
                    className="btn_buynowF"
                    onClick={() => setOwnPlanOpen(true)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="instanthiring_backcontent">
                <div className="backcontent_img">
                  <h2>Benefits</h2>
                  <img src="employer/benefit.png" alt="" />
                </div>

                <ul>
                  <li className="content_li">
                    Unlimited Access to all applied CV'S
                    <li className="content_li"> Filtering of relevant CV</li>
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
                      Referral benefits allowed while making payment. 1 referral
                      max
                    </li>
                    <li className="content_li"> Free plan upgrade.</li>
                    <li className="content_li">
                      Connect with the employee of your choice and send invites*
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
                <div className="back_btn">
                  <button
                    className="btn_buynowBackend"
                    onClick={() => setOwnPlanOpen(true)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {ownPlanOpen && (
          <CreateMyOwnPlan
            ownplanopen={setOwnPlanOpen}
            setfinaldata={setfinaldata}
          />
        )}

        {/* pay per click */}

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
                    One time payment of 1300 INR for two openings to begin with.
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
                  <button
                    className="btn_buynowF"
                    onClick={() => {
                      setopayperplan(true);
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="instanthiring_backcontent">
                <div className="backcontent_img">
                  <h2>Benefits</h2>
                  <img src="employer/benefit.png" alt="" />
                </div>
                <ul>
                  <li className="content_li">
                    Unlimited Access to all applied CV'S
                    <li className="content_li"> Filtering of relevant CV</li>
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
                      Referral benefits allowed while making payment. 1 referral
                      max
                    </li>
                    <li className="content_li"> Free plan upgrade.</li>
                    <li>
                      Connect with the employee of your choice and send invites*
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

                <div className="back_btn">
                  <button
                    className="btn_buynowBackend"
                    onClick={() => {
                      setopayperplan(true);
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {opayperplan && (
            <PayPerClickSubpop
              OpenComboPlan={setopayperplan}
              setfinaldata={setfinaldata}
            />
          )}

          {/* fmn bid */}
          <div className="flippingcard_container_main">
            <div className="instanthiringcard_main">
              <div className="instanthiring_frontcontent">
                <div className="Instant-Head">
                  <img src="employer/tele.png" alt="" />
                  <h2>FMN Bid </h2>
                </div>
                <ul>
                  <li className="content_li">
                    One time payment of 1300 INR for two openings to begin with.
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
                  <button
                    className="btn_buynowF"
                    onClick={() => {
                      setopenbidplan(true);
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="instanthiring_backcontent">
                <div className="backcontent_img">
                  <h2>Benefits</h2>
                  <img src="employer/benefit.png" alt="" />
                </div>

                <ul>
                  <li className="content_li">
                    Unlimited Access to all applied CV'S
                    <li className="content_li"> Filtering of relevant CV</li>
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
                      Referral benefits allowed while making payment. 1 referral
                      max
                    </li>
                    <li className="content_li"> Free plan upgrade.</li>
                    <li>
                      Connect with the employee of your choice and send invites*
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

                <div className="back_btn">
                  <button
                    className="btn_buynowBackend"
                    onClick={() => {
                      setopenbidplan(true);
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {openbidplan && (
            <BidSubpopup
              OpenComboPlan={setopenbidplan}
              setfinaldata={setfinaldata}
            />
          )}
        </div>
      </div>
    </div>
  );
};
