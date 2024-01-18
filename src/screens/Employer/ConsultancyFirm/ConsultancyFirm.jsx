
import React from "react";
import "../../../css/Employer/OwnCompany.css";
import { theme } from "../../../css/style";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import {
  ThemeProvider,
  Modal,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Great from "../../../components/Employer/Popups/Great";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { Boxtab,CssTextField,CustomSelect } from "../../../css/Employer/MaterialUicss/OwnCompany";




export default function ConsultancyFirm({ CloseClientCompany, onChangeText, submitform, setForm, isFrom ,gotonext ,updateprofile}) {
  const { scope } = useSelector((state) => state.AuthReducer);
  const { mycreatedpost } = useSelector((state) => state.EmployerReducer);
  const location = useLocation();
  const [isupdatebtn, setisupdatebtn] = useState(false);

  React.useEffect(() => {
    let editpost = new URLSearchParams(location.search).get("editpost");
    let type = new URLSearchParams(location.search).get("type");
    if (editpost && type) {
      if (mycreatedpost.length !== 0) {
        if (parseInt(type) === 1) {
          const data = mycreatedpost.filter(
            (filterdata) => filterdata.JOB_ID === parseInt(editpost)
          );
          setisupdatebtn(true);
          setForm({
            companyname: data[0].COMPANY_NAME,
            website: data[0].WEBSITE,
            lprofile: data[0].LINKEDIN_PROFILE,
            email: data[0].EMAIL,
            designation: parseInt(data[0].DESIGNATION),
            posttype: type,
          });
        }
      }
    }
  }, [mycreatedpost]);

  const completeform = (e) => {
    if (!isFrom.companyname) {
      toast.error("name  is required");
      return false;
    }
    if (!isFrom.website) {
      toast.error("website is required");
      return false;
    }
    if (!isFrom.lprofile) {
      toast.error("Linkedin is required");
      return false;
    }
    if (!isFrom.email) {
      toast.error("Email is required");
      return false;
    }
    if (!isFrom.designation) {
      toast.error("Designation is required");
      return false;
    }
    setForm({ ...isFrom, posttype: "2" });
    submitform(e);
  };

  return (
    <>
      <Modal
        open={true}
        onClose={CloseClientCompany}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="OwnCompany">
          <div className="owncompany_container">
            <div className="close_btn_own" onClick={CloseClientCompany}>
              <CloseIcon />
            </div>
            <div className="Owncompany">
              <h2
              //  className="own-head"
               >Create for Client Company</h2>
               <br />
              <form onSubmit={submitform} className="owncompany_form">
                <div className="own-form">
                  <ThemeProvider
                    theme={theme}
                    sx={{
                      display: "flex",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <Boxtab
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1 },
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
                        size="small"
                        focused
                        label="Company Name"
                        name="companyname"
                        value={isFrom && isFrom.companyname}
                        onChange={onChangeText}
                      />
                      <CssTextField
                        sx={{ color: " #F7701D", width: "70%" }}
                        name="website"
                        onChange={onChangeText}
                        size="small"
                        focused
                        id="outlined-required"
                        color="warning"
                        value={isFrom && isFrom.website}
                        label="Website"
                      />
                      <CssTextField
                        sx={{ color: " #F7701D", width: "70%" }}
                        required
                        id="outlined-required"
                        size="small"
                        focused
                        color="warning"
                        label="Linkdedin Profile"
                        name="lprofile"
                        onChange={onChangeText}
                        value={isFrom && isFrom.lprofile}
                      />
                      <CssTextField
                        sx={{ color: " #F7701D", width: "70%" }}
                        required
                        id="outlined-required"
                        color="warning"
                        size="small"
                        focused
                        label="Email Address"
                        name="email"
                        onChange={onChangeText}
                        value={isFrom && isFrom.email}
                      />

                      <FormControl
                      style={{"width":"80%"}}
                      >
                        <InputLabel id="demo-simple-select-label" sx={{color:"#F7701D"}}>
                          Designition
                        </InputLabel>
                        <CustomSelect
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          color="warning"
                          size="small"
                          value={isFrom && parseInt(isFrom.designation)}
                          label="designation"
                          name="designation"
                          onChange={onChangeText}
                        >
                          {scope &&
                            scope.length !== 0 &&
                            scope.map((data, index) => (
                              <MenuItem value={data.SCOPE_ID}>
                                {data.FIELD_NAME}
                              </MenuItem>
                            ))}
                        </CustomSelect>
                      </FormControl>
                    </Boxtab>
                  </ThemeProvider>
                </div>

                {isupdatebtn ? (
                  <Button
                    type="buttton"
                    variant="contained"
                    className="profile_btn"
                    sx={{
                      width: "30%",
                      mt: 2,
                      mb: 4,
                      textTransform: "none",
                      color: "#000000",
                      backgroundColor: "rgba(247, 112, 29, 0.39)",
                      "&:hover": {
                        backgroundColor: "rgba(247, 112, 29, 0.39)",
                      },
                    }}
                    onClick={updateprofile}
                  >
                    update post
                  </Button>
                ) : (
                  <Button
                    type="buttton"
                    variant="contained"
                    className="profile_btn"
                    sx={{
                      width: "30%",
                      mt: 2,
                      mb: 4,
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
                )}
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}


