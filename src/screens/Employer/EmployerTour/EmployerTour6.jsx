import React from "react";
import "../../../css/Employer/EmployerTour.css"
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import EmployerTour7 from "./EmployerTour7.jsx";

const EmployerTour6 = ({Tour5 }) => {
  const navigate = useNavigate();
  const handleClose = () =>{
    Tour5(false);
    navigate("/createjobpost", { replace: "true" });

  } 
  const [tour6, setTour6] = useState(false);

  const handleOnClick = () => {
    setTour6(true);
    // Tour1(false);
  }

  return (
    <>
      <div style={{ outline: "none" }}></div>
      <Modal
        open={Tour5}
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
        <div className={tour6 ?"close":"DashBoardTour-background_emp6"}>
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
                    <h3>Activity Book</h3>
                    <p onClick={handleClose}>Skip</p>
                  </div>
                </div>
                <div className="DashBoardTour-card-card-child-middle">
                  <h3>Here you can track and manage of your hiring status.</h3>
                </div>

                <div className="DashBoardTour-card-card-child-bottom">
                  <p onClick={handleOnClick}>Next</p>
                  {tour6 && <EmployerTour7 Tour6={setTour6} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EmployerTour6;