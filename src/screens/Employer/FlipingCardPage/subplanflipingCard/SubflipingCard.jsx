import * as React from "react";
import Modal from "@mui/material/Modal";
import "../../../../css/Employer/SubflipingCard.css";
import Button from "@mui/material/Button";
import Perfect from "../../../../components/Employer/Popups/Perfect";
import { useDispatch, useSelector } from 'react-redux';
import { Get_Plans } from "../../../../redux/action/CommonAction";

export const SubflipingCard = ({ openplan }) => {
  const handleClose = () => openplan(false);
  const [perfect, setPerfect] = React.useState(false);
  const dispatch = useDispatch();
  const handleOnclick = () => {
    setPerfect(true);
  }
  const FeedbackData = useSelector(
    (state) => state.CommonReducer.plans
  );
  console.log(FeedbackData);

  var planname = "Instant Hiring";

  var PlanData = FeedbackData.filter((el) => {
    return el.PLAN_NAME == planname;
  });

  console.log(PlanData)

  React.useEffect(() => {
    dispatch(Get_Plans());
  }, [])

  return (
    <div>
      <Modal
        open={openplan}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="subflipingcard_main">
          <div className="instanthiring_frontcontent">
            <div className="Instant-Head">
              <h2>Instant Hiring </h2>
            </div>
            <div className="price_plan">
              <div className="price_sub_plan">
                <h3>One Time Payment</h3>
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
                  <Button
                    sx={{
                      // textTransform: "none",
                      color: "#000000",
                      backgroundColor: "rgba(247, 112, 29, 0.39)",
                      "&:hover": { backgroundColor: "rgba(247, 112, 29, 0.39)" },
                    }}
                    onClick={handleOnclick}
                    variant="contained">₹{PlanData[0].PLAN_PRICE} for one time</Button>
                  {perfect && <Perfect perfectPopup={setPerfect} />}
                </div>
              </div>
              <div className="price_sub_plan">
                <h3>Monthly Plan</h3>
                <ul>
                  <li className="content_li">
                    Unlimited Access to all applied CV'S{" "}
                  </li>
                  <li className="content_li">
                    {" "}
                    Can post 2 openings every month in total.
                  </li>
                  <li className="content_li">
                    Referral benefits allowed while making payment. 1 referral
                    max
                  </li>
                  {/* <li className="content_li"> Free plan upgrade.</li> */}
                  <li className="content_li">
                    Connect with the employee of your choice and send invites*
                  </li>
                  {/* <li className="content_li">
                Customize your hiring with FMN boost option for any existing
                active opening.
              </li> */}
                  <li className="content_li">
                    {/* Access to Premium FMN hiring bid if on a subscription. */}
                  </li>
                  <li className="content_li">
                    {" "}
                    Get full access in your login portal{" "}
                  </li>
                </ul>
                <div className="front_btn_right">
                  <Button sx={{
                    // textTransform: "none",
                    color: "#000000",
                    backgroundColor: "rgba(247, 112, 29, 0.39)",
                    "&:hover": { backgroundColor: "rgba(247, 112, 29, 0.39)" },
                  }} variant="contained">₹{PlanData[1].PLAN_PRICE} /3 month</Button>
                  <Button
                    sx={{
                      // textTransform: "none",
                      color: "#000000",
                      backgroundColor: "rgba(247, 112, 29, 0.39)",
                      "&:hover": { backgroundColor: "rgba(247, 112, 29, 0.39)" },
                    }}
                    variant="contained">₹{PlanData[3].PLAN_PRICE} /9 month</Button>
                </div>
                <div className="front_btn_rightsecond">
                  <Button
                    sx={{
                      // textTransform: "none",
                      color: "#000000",
                      backgroundColor: "rgba(247, 112, 29, 0.39)",
                      "&:hover": { backgroundColor: "rgba(247, 112, 29, 0.39)" },
                    }}
                    variant="contained"> ₹{PlanData[2].PLAN_PRICE} for 6 months</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
