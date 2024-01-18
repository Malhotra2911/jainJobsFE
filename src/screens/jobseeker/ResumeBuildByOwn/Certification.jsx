import React from "react";
import { Button, Divider, Modal } from "@mui/material";
import "../../../css/jobseeker/Certification.css"
import { CssTextField } from "../../../css/Employer/MaterialUicss/OwnCompany";

export default function Certification({ certifications }) {
  const handleClose = () => certifications(false);
  const [count, setCount] = React.useState(1);
  let Form = [];
  for (let index = 0; index < count; index++) {
    Form.push(
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
        <CssTextField
          sx={{ color: " #F7701D", width: "90%" }}
          id="outlined-multiline-static"
          label="Certified Organisation Name"
          size="small"
          color="warning"
        />
        <CssTextField
          sx={{ color: " #F7701D", width: "90%" }}
          id="outlined-multiline-static"
          label="Certification Link"
          size="small"
          color="warning"
        />
        <div className="certification_Date">
          <CssTextField
            sx={{ color: " #F7701D", width: "40%" }}
            id="date"
            label="Start Date"
            size="small"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <CssTextField
            sx={{ color: " #F7701D", width: "40%" }}
            id="date"
            label="Last Date"
            size="small"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <Divider sx={{ border: "1px solid black", width: "95%" }} />

      </div>
    )
  }

  const AddEducation = () => {
    setCount(count + 1);
  }

  const scrollActive = () => {
    if (count > 1) {
      return true;
    } else {
      return false;
    }
  }


  return (
    <>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <div className="certification_cont">
          <div className="create_own_close_btn">
            <button onClick={() => certifications(false)}>X</button>
          </div>
          <div className="certification_container">
            <div className="certification">
              <h2>Certification</h2>
              <div className="certification_fields">
                <div className={scrollActive() ? "Edufield_input_scroll" : "Edufield_input"}>
                  {Form.map((instance) => instance)}
                  <Button onClick={AddEducation}
                    sx={{
                      width: "auto",
                      margin: "auto",
                      height: "7vh",
                      textTransform: "none",
                      color: "#000000",
                      backgroundColor: "rgba(247, 112, 29, 0.39)",
                      "&:hover": {
                        backgroundColor: "rgba(247, 112, 29, 0.39)",
                      },
                    }}
                  >
                    Add Education
                  </Button>
                </div>
                <div className="button_e_ss">
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
                >
                  Cancel
                </Button>
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
                >
                  Submit
                </Button>
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* </div> */}
      </Modal>
    </>

  );
}
