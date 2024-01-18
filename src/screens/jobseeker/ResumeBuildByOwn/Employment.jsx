import React from "react";
import { Modal, Button } from "@mui/material";
import "../../../css/jobseeker/Employment.css";
import { CssTextField } from "../../../css/Employer/MaterialUicss/OwnCompany";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
export default function Employment({ isFrom, onChangeText, employments }) {
  const handleClose = () => employments(false);

  return (
    <>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="employment_cont">
          <div className="employment_container" style={{"overflowY":"scroll",overflowX:"hidden"}}>
            <div className="Employment" >
              <h2>Employment</h2>
              <div className="Emp">
                <h3>Present Details</h3>
                <CssTextField
                  sx={{ color: " #F7701D", width: "90%" }}
                  id="outlined-multiline-static"
                  label="Name of Company"
                  size="small"
                  color="warning"
                  name="emp_company1"
                  value={isFrom.emp_company1}
                  onChange={onChangeText}
                />
                <div className="Employment-Type">
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Mode of Employement
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="emp_typeofjob1"
                      value={isFrom.emp_typeofjob1}
                      onChange={onChangeText}
                    >
                      <FormControlLabel
                        value="fulltime"
                        control={<Radio color="warning" />}
                        label="FullTime"
                      />
                      <FormControlLabel
                        value="contractual"
                        control={<Radio color="warning" />}
                        label="Contractual"
                      />
                      <FormControlLabel
                        value="intern"
                        control={<Radio color="warning" />}
                        label="Intern"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <CssTextField
                  sx={{ color: " #F7701D", width: "90%" }}
                  id="outlined-multiline-static"
                  label="Designation"
                  size="small"
                  color="warning"
                  name="emp_jobposi1"
                  value={isFrom.emp_jobposi1}
                  onChange={onChangeText}
                />
                <CssTextField
                  sx={{ color: " #F7701D", width: "90%" }}
                  id="outlined-multiline-static"
                  label="Department"
                  size="small"
                  color="warning"
                  name="emp_dept1"
                  value={isFrom.emp_dept1}
                  onChange={onChangeText}
                />
              </div>

              <div className="Emp">
                <h3>Other Employement Details</h3>
                <CssTextField
                  sx={{ color: " #F7701D", width: "90%" }}
                  id="outlined-multiline-static"
                  label="Name of Company"
                  size="small"
                  color="warning"
                  name="emp_company2"
                  value={isFrom.emp_company2}
                  onChange={onChangeText}
                />
                <div className="Employment-Type">
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Mode of Employement
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="emp_typeofjob2"
                      value={isFrom.emp_typeofjob2}
                      onChange={onChangeText}
                    >
                      <FormControlLabel
                        value="fulltime"
                        control={<Radio color="warning" />}
                        label="FullTime"
                      />
                      <FormControlLabel
                        value="contractual"
                        control={<Radio color="warning" />}
                        label="Contractual"
                      />
                      <FormControlLabel
                        value="intern"
                        control={<Radio color="warning" />}
                        label="Intern"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <CssTextField
                  sx={{ color: " #F7701D", width: "90%" }}
                  id="outlined-multiline-static"
                  label="Designation"
                  size="small"
                  color="warning"
                  name="emp_jobposi2"
                  value={isFrom.emp_jobposi2}
                  onChange={onChangeText}
                />
                <CssTextField
                  sx={{ color: " #F7701D", width: "90%" }}
                  id="outlined-multiline-static"
                  label="Department"
                  size="small"
                  color="warning"
                  name="emp_dept2"
                  value={isFrom.emp_dept2}
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
                  onChange={()=>employments(false)}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
