import React from "react";
// import './DashBoardTour.css'
import "../../../css/jobseeker/DashBoardTour2.css";
import { useState } from "react";
import DashBoardTourMiddle from "./DashBoardTourMiddle";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import DashBoardTour3 from "./DashboardTour3";

// import rightArrowImg from './Arrow right.png'

const DashBoardTour2 = ({ popup2 }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    popup2(false);
    navigate("/availablejobs", { replace: "true" });
  };
  const [tours, setTours] = useState(false);

  return (
    <>
      <div style={{ outline: "none" }}>
        <Modal
          open={popup2}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            "& .MuiBackdrop-root": {
              background: "transparent",
            },
            backgroundColor: "transparent",
            background: "transparent",
            // border:"3px solid green",
            boxShadow: "none",
          }}
        >
          <div className={tours ? "close_popup" : "DashBoardTour-background2"}>
            <div className="DashBoardTour-card-box2">
              <div className="DashBoardTour-card-arrow2">
                {/* <img src={rightArrowImg} alt="" /> */}
                <img
                  src="jobseeker/Arrow right.png"
                  alt="_"
                />
              </div>
              <div className="DashBoardTour-card-card2">
                <div className="DashBoardTour-card-card-child2">
                  <div className="DashBoardTour-card-card-child-top2">
                    <div>
                      <h3>Applied Jobs</h3>
                      <p>Skip</p>
                    </div>
                  </div>
                  <div className="DashBoardTour-card-card-child-middle2">
                    <h3>Manage your Applied Jobs!</h3>
                  </div>
                  <div className="DashBoardTour-card-card-child-bottom2">
                    <p onClick={() => setTours(true)}>Next</p>
                    {tours && <DashBoardTour3 Popups={setTours} />}
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

export default DashBoardTour2;
