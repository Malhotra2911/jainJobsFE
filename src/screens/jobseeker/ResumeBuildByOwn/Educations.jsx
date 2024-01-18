import { Button, Divider, Modal } from "@mui/material";
import * as React from "react";
import "../../../css/jobseeker/Educations.css";
import { CssTextField } from "../../../css/Employer/MaterialUicss/OwnCompany";

export default function Educations({ isFrom, onChangeText, educations }) {
  const handleClose = () => educations(false);
  return (
    <>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="education_cont">
          <div className="education_container" >
            <h2>Educations</h2>

            <div className="Education">
              <h3>
                {" "}
                <u> Details 1</u>{" "}
              </h3>
              <CssTextField
                sx={{ color: " #F7701D", width: "90%" }}
                id="outlined-multiline-static"
                label="name of collage"
                size="small"
                color="warning"
                name="ed_clg1"
                value={isFrom.ed_clg1}
                onChange={onChangeText}
              />

              <CssTextField
                sx={{ color: " #F7701D", width: "90%" }}
                id="outlined-multiline-static"
                label="year of passing"
                size="small"
                color="warning"
                type="date"
                name="ed_yearofpassing1"
                value={isFrom.ed_yearofpassing1}
                onChange={onChangeText}
              />

              <CssTextField
                sx={{ color: " #F7701D", width: "90%" }}
                id="outlined-multiline-static"
                label="type of education"
                size="small"
                color="warning"
                name="ed_yeartypepfed1"
                value={isFrom.ed_yeartypepfed1}
                onChange={onChangeText}
              />

              <CssTextField
                sx={{ color: " #F7701D", width: "90%" }}
                id="outlined-multiline-static"
                label="country"
                size="small"
                color="warning"
                name="ed_country1"
                value={isFrom.ed_country1}
                onChange={onChangeText}
              />
            </div>

            <div className="Education">
              <h3>
                <u> Details 2</u>{" "}
              </h3>
              <br />
              <CssTextField
                sx={{ color: " #F7701D", width: "90%" }}
                id="outlined-multiline-static"
                label="nam eof collage"
                size="small"
                color="warning"
                name="ed_clg2"
                value={isFrom.ed_clg2}
                onChange={onChangeText}
              />

              <CssTextField
                sx={{ color: " #F7701D", width: "90%" }}
                id="outlined-multiline-static"
                label="year of passing"
                size="small"
                color="warning"
                type="date"
                name="ed_yearofpassing2"
                value={isFrom.ed_yearofpassing2}
                onChange={onChangeText}
              />

              <CssTextField
                sx={{ color: " #F7701D", width: "90%" }}
                id="outlined-multiline-static"
                label="type of education"
                size="small"
                color="warning"
                name="ed_yeartypepfed2"
                value={isFrom.ed_yeartypepfed2}
                onChange={onChangeText}
              />

              <CssTextField
                sx={{ color: " #F7701D", width: "90%" }}
                id="outlined-multiline-static"
                label="country"
                size="small"
                color="warning"
                name="ed_country2"
                value={isFrom.ed_country2}
                onChange={onChangeText}
              />
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
                onClick={handleClose}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
