import React from "react";
// import downArrowShort from './down_arrow_short.png'
// import './DashBoardTourMiddle.css'
import "../../../css/jobseeker/DashBoardTour14.css";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
// import DashBoardTourMiddle from "./DashBoardTourMiddle";

const DashBoardTour14 = ({ Popups14 }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    Popups14(false);
    navigate("/availablejobs", { replace: "true" });
  };
  const [tours15, setToursm] = useState(false);

  return (
    <>
      <div style={{ outline: "none" }}>
        <Modal
          open={Popups14}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            "& .MuiBackdrop-root": {
              background: "transparent",
            },
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          <div
            className={tours15 ? "close_popup" : "DashBoardTour-background14"}
          >
            <div className="DashBoardTour-card-box10">
              <div className="DashBoardTour-card-arrow21">
                {/* <img src={rightArrowImg} alt="" /> */}
                <img
                  src=
                    "jobseeker/down_arrow_short.png"
                  
                  alt="_"
                />
              </div>
              <div className="DashBoardTour-card-card2">
                <div className="DashBoardTour-card-card-child2">
                  <div className="DashBoardTour-card-card-child-top2">
                    <div>
                      <h3>Saved Job</h3>
                      <p>Skip</p>
                    </div>
                  </div>
                  <div className="DashBoardTour-card-card-child-middle2">
                    <h3>You can save the jobs from here!</h3>
                  </div>
                  <div className="DashBoardTour-card-card-child-bottom2">
                    <p onClick={handleClose}>Next</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default DashBoardTour14;
