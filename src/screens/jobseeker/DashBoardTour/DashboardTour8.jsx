import React from "react";
// import './DashBoardTour.css'
import "../../../css/jobseeker/DashBoardTour8.css";
import { useState } from "react";
import DashBoardTourMiddle from "./DashBoardTourMiddle";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import DashBoardTour9 from "./DashboardTour9";



// import rightArrowImg from './Arrow right.png'

const DashBoardTour8 = ({ Popups8 }) => {
    const navigate = useNavigate();
  const handleClose = () =>{
      Popups8(false);
      navigate("/availablejobs", { replace: "true" });

  }
  const [tours9, setTours] = useState(false);

  return (
    <>
      <div style={{ outline: "none" }}>
        <Modal
          open={Popups8}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            "& .MuiBackdrop-root":{
              background:"transparent"
            },
            backgroundColor: 'transparent',
          background:"transparent",
          // border:"3px solid green",
          boxShadow: 'none'}}
        >
          <div className={tours9 ? "close_popup":"DashBoardTour-background8"}>
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
                      <h3>Freelancing World</h3>
                      <p>Skip</p>
                    </div>
                  </div>
                  <div className="DashBoardTour-card-card-child-middle2">
                    <h3>Check Your Activity!</h3>
                  </div>
                  <div className="DashBoardTour-card-card-child-bottom2">
                    <p onClick={() => setTours(true)}>Next</p>
                    {tours9 && <DashBoardTour9 Popups9={setTours} />}
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

export default DashBoardTour8;
