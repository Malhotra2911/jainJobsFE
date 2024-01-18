import React from "react";
// import "./PersonalDetail.css";
import "../../../css/jobseeker/PersonalDetail.css";

import { Modal, Button } from "@mui/material";
import { CssTextField } from "../../../css/Employer/MaterialUicss/OwnCompany";
import { useSelector } from "react-redux";

export default function PersonalDetail({
  isFrom,
  onChangeText,
  PersonalDetail,
}) {
  const handleClose = () => PersonalDetail(false);
  const { user } = useSelector((state) => state.AuthReducer);

  // const onhandlesubmit = () => {
  //   console.log(isFrom);
  // };

  return (
    <>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className="personaldetail_container"
          // style={{ overflowY: "scroll" }}
        >
          <div className="PersonalDetails">
            <h2>Personal Details</h2>
            <CssTextField
              sx={{ color: " #F7701D", width: "100%" }}
              id="outlined-multiline-static"
              label="First Name"
              size="small"
              color="warning"
              name="F_NAME"
              value={isFrom.F_NAME}
              onChange={onChangeText}
            />

            <CssTextField
              sx={{ color: " #F7701D", width: "100%" }}
              id="outlined-multiline-static"
              label="Middle Name"
              size="small"
              color="warning"
              name="M_NAME"
              value={isFrom.M_NAME}
              onChange={onChangeText}
            />

            <CssTextField
              sx={{ color: " #F7701D", width: "100%" }}
              id="outlined-multiline-static"
              label="Last Name"
              size="small"
              color="warning"
              name="L_NAME"
              value={isFrom.L_NAME}
              onChange={onChangeText}
            />

            <CssTextField
              sx={{ color: " #F7701D", width: "100%" }}
              id="outlined-multiline-static"
              label="Email"
              size="small"
              color="warning"
              name="EMAIL"
              onChange={onChangeText}
              type="email"
            />

            <CssTextField
              sx={{ color: " #F7701D", width: "100%" }}
              id="outlined-multiline-static"
              label="Phone number"
              size="small"
              color="warning"
              name="PHONE"
              value={isFrom.PHONE}
              onChange={onChangeText}
              type="number"
            />

            <CssTextField
              sx={{ color: " #F7701D", width: "100%" }}
              id="outlined-multiline-static"
              label="facebook"
              size="small"
              color="warning"
              name="FACEBOOK"
              value={isFrom.FACEBOOK}
              onChange={onChangeText}
            />

            <CssTextField
              sx={{ color: " #F7701D", width: "100%" }}
              id="outlined-multiline-static"
              label="Linkedin profile"
              size="small"
              color="warning"
              name="LINKEDIN"
              value={isFrom.LINKEDIN}
              onChange={onChangeText}
            />

            <CssTextField
              sx={{ color: " #F7701D", width: "100%" }}
              id="outlined-multiline-static"
              label="career objective"
              size="small"
              color="warning"
              name="COBJECTIVE"
              value={isFrom.COBJECTIVE}
              onChange={onChangeText}
              multiline
              maxRows={3}
              inputProps={{ maxLength: 200 }}
            />

            <CssTextField
              sx={{ color: " #F7701D", width: "100%" }}
              id="outlined-multiline-static"
              label="Complete Address"
              size="small"
              color="warning"
              name="ADDRESS"
              value={isFrom.ADDRESS}
              onChange={onChangeText}
              multiline
            />

            <CssTextField
              sx={{ color: " #F7701D", width: "100%" }}
              id="outlined-multiline-static"
              label="Date Of birth"
              size="small"
              color="warning"
              name="DOB"
              value={isFrom.DOB}
              onChange={onChangeText}
              type="date"
            />

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

        {/* </div> */}
      </Modal>
    </>
  );
}
