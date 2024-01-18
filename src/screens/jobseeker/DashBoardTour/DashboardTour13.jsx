import React from "react";
// import downArrowShort from './down_arrow_short.png'
// import './DashBoardTourMiddle.css'
import "../../../css/jobseeker/DashBoardTour13.css";
import { useState } from "react";
import DashBoardTour14 from "./DashBoardTour14.jsx";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";

const DashBoardTour13 = ({ Popups13 }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    Popups13(false);
    navigate("/availablejobs", { replace: "true" });
  };
  const [tours14, setToursm] = useState(false);

  return (
    <>
      <div style={{ outline: "none" }}>
        <Modal
          open={Popups13}
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
            className={tours14 ? "close_popup" : "DashBoardTour-background13"}
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
                      <h3>Contact HR</h3>
                      <p>Skip</p>
                    </div>
                  </div>
                  <div className="DashBoardTour-card-card-child-middle2">
                    <h3>You can share the jobs from here!</h3>
                  </div>
                  <div className="DashBoardTour-card-card-child-bottom2">
                    <p onClick={() => setToursm(true)}>Next</p>
                    {tours14 && <DashBoardTour14 Popups14={setToursm} />}
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

export default DashBoardTour13;
