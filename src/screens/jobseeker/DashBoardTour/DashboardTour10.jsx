import React from "react";
// import downArrowShort from './down_arrow_short.png'
// import './DashBoardTourMiddle.css'
import "../../../css/jobseeker/DashBoardTour10.css";
import { useState } from "react";
import DashBoardTourEnd from "./DashBoardTourEnd";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import DashBoardTour11 from "./DashboardTour11";

const DashBoardTour10 = ({ Popups10 }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    Popups10(false);
    navigate("/availablejobs", { replace: "true" });
  };
  const [tours11, setToursm] = useState(false);

  return (
    <>
      <div style={{ outline: "none" }}>
        <Modal
          open={Popups10}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            "& .MuiBackdrop-root":{
              background:"transparent"
            },
            backgroundColor: 'transparent',
          boxShadow: 'none'}}
        >
          <div className={tours11 ? "close_popup":"DashBoardTour-background10"}>
            <div className="DashBoardTour-card-box10">
              <div className="DashBoardTour-card-arrow21">
                {/* <img src={rightArrowImg} alt="" /> */}
                <img
                  src="jobseeker/down_arrow_short.png"
                  alt="_"
                />
              </div>
              <div className="DashBoardTour-card-card2">
                <div className="DashBoardTour-card-card-child2">
                  <div className="DashBoardTour-card-card-child-top2">
                    <div>
                      <h3>Applay Job</h3>
                      <p>Skip</p>
                    </div>
                  </div>
                  <div className="DashBoardTour-card-card-child-middle2">
                    <h3>You can applay the jobs from here!</h3>
                  </div>
                  <div className="DashBoardTour-card-card-child-bottom2">
                    <p onClick={() => setToursm(true)}>Next</p>
                    {tours11 && <DashBoardTour11 Popups11={setToursm} />}
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

export default DashBoardTour10;
