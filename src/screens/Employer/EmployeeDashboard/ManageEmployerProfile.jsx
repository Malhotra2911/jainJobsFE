import React, { useState } from "react";
import "../../../css/jobseeker/EmployerProfile.css";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import JobSeekerdashboard from "../../../components/JobSeeker/JOBSeekercontent/JobSeekerdashboard";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import { useDispatch, useSelector } from "react-redux";
import { UpdateUserProfile } from "../../../redux/action/JobSeekerAction";
import {
  Modal,
  Select,
  Button,
  IconButton,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Avatar
} from "@mui/material";
import {
  CircularLoding,
  GetUserAction,
} from "../../../redux/action/AuthAction";
import { ImageBackend } from "../../../config/Config";
import SideBar from "../../../components/Employer/employersidebar/JobSeekerdashboard";
import { CssTextField,CustomSelect } from "../../../css/Employer/MaterialUicss/OwnCompany";


export default function ManageEmployerProfile() {
  const initialdata = {
    F_NAME: "",
    M_NAME: "",
    L_NAME: "",
    PROFILEPIC: "",
    PHONENO: "",
    COUNTRY: "",
    ADDRESS: "",
    ABOUT_YOURSELF: "",
    COMPANY_NAME: "",
    COMPANY_PRODILE: "",
  };
  const [isFrom, setisFrom] = useState(initialdata);
  const [isUpdateid, setUpdateid] = useState(false);
  const [file, setFile] = useState();
  const { user, scope } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const [locationvalue, setLocationsValue] = React.useState(null);
  const { cities } = useSelector((state) => state.CommonReducer);

  const isMobile = window.innerWidth < 580;

  const userVerify = () => {
    if (user.USER_ROLE == 1) {
      return true;
    } else {
      return false;
    }
  };

  const onChangeText = (e) => {
    const { name, value } = e.target;
    setisFrom({ ...isFrom, [name]: value });
  };
  const onChangeFile = (e) => {
    const { name, files } = e.target;
    setisFrom({ ...isFrom, [name]: files[0] });
  };
  const handleChange = (e) => setFile(URL.createObjectURL(e.target.files[0]));

  React.useEffect(() => {
    if (user && user.length !== 0) {
      _userdatafunction();
    }
  }, [user]);

  const _userdatafunction = () => {
    setisFrom({
      F_NAME: user[0].F_NAME,
      M_NAME: user[0].M_NAME,
      L_NAME: user[0].L_NAME,
      PROFILEPIC: user[0].PROFILEPIC,
      PHONENO: user[0].PHONENO,
      COUNTRY: user[0].COUNTRY,
      ADDRESS: parseInt(user[0].ADDRESS),
      ABOUT_YOURSELF: user[0].ABOUT_YOURSELF,
      COMPANY_NAME: user[0].COMPANY_NAME,
      COMPANY_PRODILE: user[0].COMPANY_PRODILE,
      EMAIL: user[0].EMAIL,
    });

    setFile(ImageBackend + user[0].PROFILEPIC);
    setUpdateid(user[0].USER_ID);
  };

  React.useEffect(() => {
    setTimeout(() => {
      if (cities.length !== 0) {
        const result = cities.filter((word) => word.CITY_ID === isFrom.ADDRESS);
        setLocationsValue(result[0]);
      }
    }, 1500);
  }, [cities]);

  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  };
  const reloaduser = () => {
    dispatch(GetUserAction());
  };

  const _SubmitForm = () => {
    const useformdata = new FormData();
    useformdata.append("F_NAME", isFrom.F_NAME);
    useformdata.append("M_NAME", isFrom.M_NAME);
    useformdata.append("L_NAME", isFrom.L_NAME);
    useformdata.append("PROFILEPIC", isFrom.PROFILEPIC);
    useformdata.append("PHONENO", isFrom.PHONENO);
    useformdata.append("COUNTRY", isFrom.COUNTRY);
    useformdata.append("ADDRESS", isFrom.ADDRESS);
    useformdata.append("ABOUT_YOURSELF", isFrom.ABOUT_YOURSELF);
    useformdata.append("COMPANY_NAME", isFrom.COMPANY_NAME);
    useformdata.append("COMPANY_PRODILE", isFrom.COMPANY_PRODILE);
    dispatch(UpdateUserProfile(useformdata, reloaduser, Loading));
  };

  return (
    <div className="background_img">
      <div className="useprofile_container">
        <SideBar />
        <div className="Profile_Form_content">
          <DashboardProfile />
          <div className="EmployerProfileForm">
            <div className="EmployerProfile">
              <form onSubmit={_SubmitForm} className="employer_main_form">
                <div className="form">
                  <Box
                    component="form"
                    onSubmit={(e) => e.preventDefault()}
                    sx={{
                      "& .MuiTextField-root": { m: 1},
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      mt: 2,
                      mb: 2,
                      borderRadius: "7px",
                      zIndex: 0,
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1},
                        width: isMobile ? "100%" : "80%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        mt: 5,
                        mb: 2,
                        borderRadius: "7px",
                        zIndex: 0,
                        padding: 2,
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <h3>Your Personal Details</h3>
                      <Avatar
                        alt="PROFILEPIC"
                        src={file}
                        sx={{ width: 96, height: 96 }}
                      />
                      <IconButton
                        sx={{ background: "#FFFFFF", mt: -5, mr: -10 }}
                        aria-label="upload picture"
                        component="label"
                      >
                        <input
                          hidden
                          accept="image/*"
                          type="file"
                          name="PROFILEPIC"
                          onChange={(e) => {
                            handleChange(e);
                            onChangeFile(e);
                          }}
                        />
                        <PhotoCamera />
                      </IconButton>
                      <CssTextField
                        sx={{ color: " #F7701D", width: "100%" }}
                        required
                        id="outlined-required"
                        color="warning"
                        size="small"
                        focused
                        label="First Name"
                        onChange={onChangeText}
                        name="F_NAME"
                        value={isFrom && isFrom.F_NAME}
                      />
                      <CssTextField
                        sx={{ color: " #F7701D", width: "100%" }}
                        required
                        id="outlined-required"
                        size="small"
                        focused
                        color="warning"
                        label="Middle Name"
                        onChange={onChangeText}
                        name="M_NAME"
                        value={isFrom && isFrom.M_NAME}
                      />
                      <CssTextField
                        sx={{ color: " #F7701D", width: "100%" }}
                        required
                        id="outlined-required"
                        size="small"
                        focused
                        color="warning"
                        label="Last Name"
                        onChange={onChangeText}
                        name="L_NAME"
                        value={isFrom && isFrom.L_NAME}
                      />
                      <CssTextField
                        sx={{ color: " #F7701D", width: "100%" }}
                        required
                        id="outlined-required"
                        color="warning"
                        size="small"
                        focused
                        label="Email"
                        onChange={onChangeText}
                        name="EMAIL"
                        value={isFrom && isFrom.EMAIL}
                        readonly
                      />
                      <CssTextField
                        sx={{ color: " #F7701D", width: "100%" }}
                        required
                        id="outlined-number"
                        label="Phone Number"
                        type="number"
                        size="small"
                        focused
                        onChange={onChangeText}
                        name="PHONENO"
                        value={isFrom && isFrom.PHONENO}
                      />
                      <CssTextField
                        sx={{ color: " #F7701D", width: "100%" }}
                        id="outlined-multiline-static"
                        label="About YourSelf"
                        multiline
                        focused
                        color="warning"
                        rows={3}
                        onChange={onChangeText}
                        name="ABOUT_YOURSELF"
                        value={isFrom && isFrom.ABOUT_YOURSELF}
                      />
                      <CssTextField
                        sx={{ color: " #F7701D", width: "100%" }}
                        required
                        id="outlined-required"
                        color="warning"
                        size="small"
                        focused
                        label="Company Name"
                        onChange={onChangeText}
                        name="COMPANY_NAME"
                        value={isFrom && isFrom.COMPANY_NAME}
                      />

                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Address
                        </InputLabel>
                        <CustomSelect
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          focused
                          color="warning"
                          value={isFrom && parseInt(isFrom.ADDRESS)}
                          label="Address"
                          name="ADDRESS"
                          onChange={onChangeText}
                        >
                          {cities &&
                            cities.length !== 0 &&
                            cities.map((option, index) => (
                              <MenuItem value={option.CITY_ID}>
                                {` ${option.CITY_NAME},${option.STATE_NAME},${option.COUNRTY_NAME}`}
                              </MenuItem>
                            ))}
                        </CustomSelect>
                      </FormControl>

                      <CssTextField
                        id="outlined-multiline-static"
                        sx={{ color: " #F7701D", width: "100%" }}
                        label="Company Profile"
                        multiline
                        color="warning"
                        focused
                        rows={3}
                        onChange={onChangeText}
                        name="COMPANY_PRODILE"
                        value={isFrom && isFrom.COMPANY_PRODILE}
                      />
                    </Box>
                    <Button
                      variant="contained"
                      className="profile_btn"
                      type="button"
                      onClick={_SubmitForm}
                      sx={{
                        width: "50%",
                        borderRadius: "7px",
                        height: "7vh",
                        textTransform: "none",
                        color: "#000000",
                        backgroundColor: "rgba(247, 112, 29, 0.39)",
                        "&:hover": {
                          backgroundColor: "rgba(247, 112, 29, 0.39)",
                        },
                      }}
                    >
                      Save
                    </Button>
                  </Box>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
