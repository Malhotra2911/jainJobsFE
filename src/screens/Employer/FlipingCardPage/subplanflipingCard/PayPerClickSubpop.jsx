import * as React from "react";
import Modal from "@mui/material/Modal";
import "../../../../css/Employer/SubflipingCard.css";
import Button from "@mui/material/Button";

export const PayPerClickSubpop = ({ OpenComboPlan, setfinaldata }) => {
  const handleClose = () => OpenComboPlan(false);
  return (
    <div>
      <Modal
        open={OpenComboPlan}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="subflipingcard_main">
          <div className="instanthiring_frontcontent">
            <div className="Instant-Head">
              <h2>Per Per Click </h2>
            </div>
            <div className="price_plan">
              <div className="price_sub_plan">
                <ul>
                  <li className="content_li">
                    One time payment of 1300 INR for two openings to begin with.
                    Valid for 20 days.
                  </li>
                  <li className="content_li">
                    Advertisement valid for 20 days. Access to all applied CV'S
                    upto 18
                  </li>
                  <li className="content_li">
                    To access more applied CV'S the employer willl need to
                    purchase subscription for 3/6/9 months.
                  </li>
                </ul>
                <div className="front_btn">
                  <Button
                    sx={{
                      color: "#000000",
                      backgroundColor: "rgba(247, 112, 29, 0.39)",
                      "&:hover": {
                        backgroundColor: "rgba(247, 112, 29, 0.39)",
                      },
                    }}
                    variant="contained"
                    onClick={() => setfinaldata(5, 1300, 0)}
                  >
                    1300 for instant Buy Now
                  </Button>
                </div>
              </div>
              <div className="price_sub_plan">
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
                  <li className="content_li"> Free plan upgrade.</li>
                  <li className="content_li">
                    Connect with the employee of your choice and send invites*
                  </li>
                  <li className="content_li">
                    Access to Premium FMN hiring bid if on a subscription.
                  </li>
                  <li className="content_li">
                    {" "}
                    Get full access in your login portal{" "}
                  </li>
                </ul>
                <div className="front_btn_right">
                  <Button
                    sx={{
                      color: "#000000",
                      backgroundColor: "rgba(247, 112, 29, 0.39)",
                      "&:hover": {
                        backgroundColor: "rgba(247, 112, 29, 0.39)",
                      },
                    }}
                    variant="contained"
                    onClick={() => setfinaldata(5, 3750, 3)}
                  >
                    3750 Inr/3 mon
                  </Button>
                  <Button
                    sx={{
                      // textTransform: "none",
                      color: "#000000",
                      backgroundColor: "rgba(247, 112, 29, 0.39)",
                      "&:hover": {
                        backgroundColor: "rgba(247, 112, 29, 0.39)",
                      },
                    }}
                    variant="contained"
                    onClick={() => setfinaldata(5, 9900, 9)}
                  >
                    9900 Inr/9 mon
                  </Button>
                </div>
                <div className="front_btn_rightsecond">
                  <Button
                    sx={{
                      color: "#000000",
                      backgroundColor: "rgba(247, 112, 29, 0.39)",
                      "&:hover": {
                        backgroundColor: "rgba(247, 112, 29, 0.39)",
                      },
                    }}
                    onClick={() => setfinaldata(5, 7200, 6)}
                    variant="contained"
                  >
                    7200 for 6 months
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
