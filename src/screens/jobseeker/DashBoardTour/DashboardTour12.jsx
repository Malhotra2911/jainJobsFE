import React from "react";
// import downArrowShort from './down_arrow_short.png'
// import './DashBoardTourMiddle.css'
import "../../../css/jobseeker/DashBoardTour12.css";
import { useState } from "react";
import DashBoardTourEnd from "./DashBoardTourEnd";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import DashBoardTour13 from "./DashboardTour13";

const DashBoardTour12 = ({ Popups12 }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    Popups12(false);
    navigate("/availablejobs", { replace: "true" });
  };
  const [tours13, setToursm] = useState(false);

  return (
    <>
      <div style={{ outline: "none" }}>
        <Modal
          open={Popups12}
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
          <div className={tours13 ? "close_popup":"DashBoardTour-background12"}>
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
                      <h3>Share Job</h3>
                      <p>Skip</p>
                    </div>
                  </div>
                  <div className="DashBoardTour-card-card-child-middle2">
                    <h3>You can share the jobs from here!</h3>
                  </div>
                  <div className="DashBoardTour-card-card-child-bottom2">
                    <p onClick={() => setToursm(true)}>Next</p>
                    {tours13 && <DashBoardTour13 Popups13={setToursm} />}
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

export default DashBoardTour12;
