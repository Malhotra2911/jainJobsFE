import React from "react";
// import "./Industry.css"
import { Modal, Button } from "@mui/material";
import "../../../css/jobseeker/Industry.css";
import { CssTextField } from "../../../css/Employer/MaterialUicss/OwnCompany";

export default function Industry({ isFrom, onChangeText, industries }) {
  const handleClose = () => industries(false);

  return (
    <>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="industries_cont">
          <div className="industry_container">
            <div className="industryy">
              <h2>Project:1 Details</h2>
              <div className="industry_ip_label">
                <CssTextField
                  sx={{ color: " #F7701D", width: "90%" }}
                  id="outlined-multiline-static"
                  label="name of project"
                  size="small"
                  color="warning"
                  name="proect_name1"
                  value={isFrom.proect_name1}
                  onChange={onChangeText}
                />
                <CssTextField
                  sx={{ color: " #F7701D", width: "90%" }}
                  id="outlined-multiline-static"
                  label="Project description"
                  size="small"
                  color="warning"
                  name="project_desi1"
                  value={isFrom.project_desi1}
                  onChange={onChangeText}
                />
                <CssTextField
                  sx={{ color: " #F7701D", width: "90%" }}
                  id="outlined-multiline-static"
                  label="Roles &amp; Responsibilities"
                  size="small"
                  color="warning"
                  name="project_respo1"
                  value={isFrom.project_respo1}
                  onChange={onChangeText}
                />
              </div>
              <br />
              <h2>Project:2 Details</h2>
              <div className="industry_ip_label">
                <CssTextField
                  sx={{ color: " #F7701D", width: "90%" }}
                  id="outlined-multiline-static"
                  label="name of project"
                  size="small"
                  color="warning"
                  name="proect_name2"
                  value={isFrom.proect_name2}
                  onChange={onChangeText}
                />
                <CssTextField
                  sx={{ color: " #F7701D", width: "90%" }}
                  id="outlined-multiline-static"
                  label="Project description"
                  size="small"
                  color="warning"
                  name="project_desi2"
                  value={isFrom.project_desi2}
                  onChange={onChangeText}
                />
                <CssTextField
                  sx={{ color: " #F7701D", width: "90%" }}
                  id="outlined-multiline-static"
                  label="Roles &amp; Responsibilities"
                  size="small"
                  color="warning"
                  name="project_respo2"
                  value={isFrom.project_respo2}
                  onChange={onChangeText}
                />
              </div>

              <div className="button_e">
                <Button
                  sx={{
                    width: "25%",
                    textTransform: "none",
                    color: "#000000",
                    backgroundColor: "rgba(247, 112, 29, 0.39)",
                    "&:hover": {
                      backgroundColor: "#F7701D",
                    },
                  }}
                  onClick={handleClose}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* </div> */}
      </Modal>
    </>
  );
}
