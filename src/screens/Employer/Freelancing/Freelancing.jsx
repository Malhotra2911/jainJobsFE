import React from "react";
import "../../../css/Employer/Freelancing.css";
import { Link } from "react-router-dom";
import { Boxtab } from "../../../css/Employer/MaterialUicss/OwnCompany";
import { theme } from "../../../css/style";
import { CssTextField } from "../../../css/Employer/MaterialUicss/OwnCompany";
import CloseIcon from "@mui/icons-material/Close";
import { Modal, ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";

export default function Freelancing({ CloseFreelancing, onChangeText, submitform, setForm, isFrom }) {

  const completeform = (e) => {
    if (!isFrom.companyname) {
      toast.error("name  is required")
      return false;
    }
    if (!isFrom.lprofile) {
      toast.error("Linkedin is required")
      return false;
    }
    if (!isFrom.email) {
      toast.error("Email is required")
      return false;
    }

    setForm({ ...isFrom, posttype: "3" });
    submitform(e)
  }

  return (
    <>
      <Modal
        open={true}
        onClose={CloseFreelancing}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="Freelancing">
          <div className="freelancing_container">
            <div className="close_btn_own" onClick={CloseFreelancing}>
              <CloseIcon />
            </div>
            <div className="freelancing_content">
              <h1 className="head-free">Freelancing</h1>
              <div className="freelancing">
                <form action="">
                  <div className="free-form">
                    <ThemeProvider
                      theme={theme}
                      sx={{ display: "flex", width: "100%", alignItems: "center" }}
                    >
                      <Boxtab
                        component="form"
                        sx={{
                          "& .MuiTextField-root": { m: 1 },
                          width: "70%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <CssTextField
                          sx={{ color: " #F7701D", width: "70%" }}
                          required
                          id="outlined-required"
                          color="warning"
                          label="Your Name"
                          name="companyname"
                          onChange={onChangeText}
                        />
                        <CssTextField
                          sx={{ color: " #F7701D", width: "70%" }}
                          required
                          id="outlined-required"
                          color="warning"
                          label="Linkedin Profile"
                          name="lprofile"
                          onChange={onChangeText}
                        />
                        <CssTextField
                          sx={{ color: " #F7701D", width: "70%" }}
                          required
                          id="outlined-required"
                          color="warning"
                          label="Email Address"
                          name="email"
                          onChange={onChangeText}
                        />


                      </Boxtab>
                    </ThemeProvider>

                    <Link to="/JobPosted" className="btn_freelance_link">
                      <Button
                        variant="contained"
                        className="profile_btn"
                        sx={{
                          width: "50%",
                          mt: 2,
                          mb: 2,
                          textTransform: "none",
                          color: "#000000",
                          backgroundColor: "rgba(247, 112, 29, 0.39)",
                          "&:hover": {
                            backgroundColor: "rgba(247, 112, 29, 0.39)",
                          },
                        }}
                        onClick={completeform}
                      >
                        Post a Job
                      </Button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </Modal>
    </>
  );
}
