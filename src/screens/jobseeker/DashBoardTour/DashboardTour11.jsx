import React from "react";
// import downArrowShort from './down_arrow_short.png'
// import './DashBoardTourMiddle.css'
import "../../../css/jobseeker/DashBoardTour11.css";
import { useState } from "react";
import DashBoardTourEnd from "./DashBoardTourEnd";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import DashBoardTour12 from "./DashboardTour12";

const DashBoardTour11 = ({ Popups11 }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    Popups11(false);
    navigate("/availablejobs", { replace: "true" });
  };
  const [tours12, setToursm] = useState(false);

  return (
    <>
      <div style={{ outline: "none" }}>
        <Modal
          open={Popups11}
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
          <div className={tours12 ? "close_popup":"DashBoardTour-background11"}>
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
                      <h3>View Job</h3>
                      <p>Skip</p>
                    </div>
                  </div>
                  <div className="DashBoardTour-card-card-child-middle2">
                    <h3>You can view the no. of people see this job!</h3>
                  </div>
                  <div className="DashBoardTour-card-card-child-bottom2">
                    <p onClick={() => setToursm(true)}>Next</p>
                    {tours12 && <DashBoardTour12 Popups12={setToursm} />}
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

export default DashBoardTour11;
