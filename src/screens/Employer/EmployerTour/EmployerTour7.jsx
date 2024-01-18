import React from "react";
import "../../../css/Employer/EmployerTourtop.css"
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import EmployerTour8 from "./EmployerTour8.jsx";

const EmployerTour7  = ({Tour6}) => {
  const navigate = useNavigate();
  const handleClose = () => {
    Tour6(false);
    navigate("/createjobpost", { replace: "true" });
  };
  const [tour7, setTour7] = useState(false);

  return (
    <>
      <div style={{ outline: "none" }}>
        <Modal
          open={Tour6}
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
          <div className={tour7 ? "close_popup":"DashBoardTour-background"}>
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
                  <h3>Manage your Profile!</h3>
                </div>

                <div className="middle-card-box-content-right">
                  <p>Skip</p>
                  <p onClick={() => setTour7(true)}>Next</p>
                  {tour7 && <EmployerTour8 Tour7={setTour7} />}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default EmployerTour7;
