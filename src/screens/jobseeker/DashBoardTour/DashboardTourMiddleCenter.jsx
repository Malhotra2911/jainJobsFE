import React from "react";
// import downArrowShort from './down_arrow_short.png'
// import './DashBoardTourMiddle.css'
import "../../../css/jobseeker/DashBoardTourMiddle.css";
import { useState } from "react";
import DashBoardTourEnd from "./DashBoardTourEnd";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";

const DashBoardTourMiddleCenter = ({ Popupstour }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    Popupstour(false);
    navigate("/availablejobs", { replace: "true" });
  };
  const [toursm, setToursm] = useState(false);

  return (
    <>
      <div style={{ outline: "none" }}>
        <Modal
          open={Popupstour}
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
          <div className={toursm ? "close_popup":"DashBoardTour-background"}>
            <div className="middle-card-box">
              <div className="middle-card-box-img">
                {/* <img src={downArrowShort} alt="" /> */}
                <img
                  src=
                  "jobseeker/down_arrow_short.png"
                  
                  alt="_"
                />
              </div>

              <div className="middle-card-box-content">
                <div className="middle-card-box-content-left">
                  {" "}
                  <h3>check Your Credit here!</h3>
                </div>

                <div className="middle-card-box-content-right">
                  <p>Skip</p>
                  <p onClick={() => setToursm(true)}>Next</p>
                  {toursm && <DashBoardTourEnd Popupstour={setToursm} />}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default DashBoardTourMiddleCenter;
