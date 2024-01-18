import React from "react";
import "../../../css/Employer/EmployerTourtop.css"
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import EmployerTour11 from "./EmployerTour11.jsx";

const EmployerTour10  = ({Tour9}) => {
  const navigate = useNavigate();
  const handleClose = () => {
    Tour9(false);
    navigate("/createjobpost", { replace: "true" });
  };
  const [tour10, setTour10] = useState(false);

  return (
    <>
      <div style={{ outline: "none" }}>
        <Modal
          open={Tour9}
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
          <div className={tour10 ? "close_popup":"DashBoardTour-background"}>
            <div className="middle-card-box_emp10">
              <div className="middle-card-box-img">
                <img
                  src="jobseeker/down_arrow_short.png"
                  alt="_"
                />
              </div>

              <div className="middle-card-box-content">
                <div className="middle-card-box-content-left">
                  {" "}
                  <h3>You can Create job by click here.</h3>
                </div>

                <div className="middle-card-box-content-right">
                  <p>Skip</p>
                  <p onClick={() => setTour10(true)}>Next</p>
                  {tour10 && <EmployerTour11 Tour10={setTour10} />}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default EmployerTour10;
