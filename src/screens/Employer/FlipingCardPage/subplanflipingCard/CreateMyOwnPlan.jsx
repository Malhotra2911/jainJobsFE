import React from "react";
import Modal from "@mui/material/Modal";
import "../../../../css/Employer/SubflipingCard.css";
import Button from "@mui/material/Button";

export const CreateMyOwnPlan = ({ ownplanopen, setfinaldata }) => {
  const handleClose = () => ownplanopen(false);
  return (
    <div>
      <div>
        <Modal
          open={ownplanopen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="subflipingcard_main">
            <div className="instanthiring_frontcontent">
              <div className="Instant-Head">
                <h2>Create My Own Plan </h2>
              </div>
              <div className="price_plan">
                <div className="price_sub_plan">
                  <h3>Completely Own Creation</h3>
                  <ul>
                    <li className="content_li">
                      Fully customisable. This is a subscription based service
                    </li>
                    <li className="content_li">
                      Hire within your budget If the employer goes for
                      subscription plan then the following benefits will be
                      given.{" "}
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
                      onClick={() => setfinaldata(3,1800,0)}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>

                <div className="price_sub_plan">
                  <ul>
                    <h3 style={{ textAlign: "center" }}>
                      Monthly Type Subscription
                    </h3>
                    <li className="content_li">
                      To unlock one time payment of 6 months and 9 months.
                      500*6=3000 450*9=4050 Customize your hiring completely
                    </li>
                    <li className="content_li">
                      {" "}
                      To FMN bidding Requires 100 INR to place your bid
                    </li>
                    <li className="content_li">
                      For placing more than 2 bids in a month please switch to
                      bidding subscription. 350*6=2100 INR
                    </li>
                  </ul>
                  <div className="front_btn_right">
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
                      onClick={() => setfinaldata(3,3000,6)}
                    >
                      ₹3000 /6 months
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
                      onClick={() => setfinaldata(3,4500,9)}
                    >
                      ₹4500 /9 months
                    </Button>
                  </div>                 
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};
