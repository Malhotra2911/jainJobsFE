import React from "react";
import "../../../css/Employer/EmployerTour.css"
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import EmployerTour4 from "./EmployerTour4.jsx";

const EmployerTour3 = ({Tour2 }) => {
  const navigate = useNavigate();
  const handleClose = () =>{
    Tour2(false);
    navigate("/createjobpost", { replace: "true" });

  } 
  const [tour3, setTour3] = useState(false);

  const handleOnClick = () => {
    setTour3(true);
    // Tour1(false);
  }

  return (
    <>
      <div style={{ outline: "none" }}></div>
      <Modal
        open={Tour2}
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
        <div className={tour3 ?"close":"DashBoardTour-background_emp3"}>
          <div className="DashBoardTour-card-box">
            <div className="DashBoardTour-card-arrow">
              {/* <img src={rightArrowImg} alt="" /> */}
              <img
                src="jobseeker/Arrow right.png"
                alt="_"
              />
            </div>
            <div className="DashBoardTour-card-card">
              <div className="DashBoardTour-card-card-child">
                <div className="DashBoardTour-card-card-child-top">
                  <div>
                    <h3>Create Job Post</h3>
                    <p onClick={handleClose}>Skip</p>
                  </div>
                </div>
                <div className="DashBoardTour-card-card-child-middle">
                  <h3>Here you can create job post.</h3>
                </div>

                <div className="DashBoardTour-card-card-child-bottom">
                  <p onClick={handleOnClick}>Next</p>
                  {tour3 && <EmployerTour4 Tour3={setTour3} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EmployerTour3;