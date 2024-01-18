import React from "react";
// import './DashBoardTour.css'
import "../../../css/jobseeker/DashBoardTour7.css";
import { useState } from "react";
import DashBoardTourMiddle from "./DashBoardTourMiddle";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import DashBoardTour8 from "./DashboardTour8";



// import rightArrowImg from './Arrow right.png'

const DashBoardTour7 = ({ Popups7 }) => {
    const navigate = useNavigate();
  const handleClose = () =>{
      Popups7(false);
      navigate("/availablejobs", { replace: "true" });

  }
  const [tours8, setTours] = useState(false);

  return (
    <>
      <div style={{ outline: "none" }}>
        <Modal
          open={Popups7}
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
          <div className={tours8 ? "close_popup":"DashBoardTour-background7"}>
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
                      <h3>Blogs &amp; Activity</h3>
                      <p>Skip</p>
                    </div>
                  </div>
                  <div className="DashBoardTour-card-card-child-middle2">
                    <h3>Check Your Activity!</h3>
                  </div>
                  <div className="DashBoardTour-card-card-child-bottom2">
                    <p onClick={() => setTours(true)}>Next</p>
                    {tours8 && <DashBoardTour8 Popups8={setTours} />}
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

export default DashBoardTour7;
