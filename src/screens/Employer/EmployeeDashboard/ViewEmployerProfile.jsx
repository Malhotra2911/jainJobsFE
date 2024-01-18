import React, { useState } from "react";
import "../../../css/jobseeker/EmployerProfile.css";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import { useDispatch, useSelector } from "react-redux";
import { ImageBackend } from "../../../config/Config";
import SideBar from "../../../components/Employer/employersidebar/JobSeekerdashboard";


export default function ViewEmployerProfile({ open }) {
  const [user, setuser] = useState([]);
  const [LocationsValue, setLocationsValue] = useState([]);
  const userdata = useSelector((state) => state.AuthReducer.user);
  const { cities } = useSelector((state) => state.CommonReducer);
  const mainuser = useSelector((state) => state.AuthReducer.user);
  const handleClose = () => open(false);


  var userVerify = () => {
    if (mainuser && mainuser.length !== 0 && mainuser[0].USER_ROLE == 1) {
      return true;
    } else {
      return false;
    }
  };

  React.useEffect(() => {
    if (userdata.length !== 0 && cities.length !== 0) {
      setuser(userdata);
      const result = cities.filter(
        (word) => word.CITY_ID === userdata[0].ADDRESS
      );
      setLocationsValue(result[0]);
    }
  }, [userdata, cities]);

  return (
    <div className="background_img">
      <div className="create_job_post">
        <SideBar/>
        <div className="create_job_content">
          <DashboardProfile />
          <div className="EmployerProfileForm">
            <div className="EmployerProfile">
              <div className="form">
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "100%" },
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "7px",
                    boxShadow: "0px 0 0px 0px rgba(0, 0, 0, 0.4)",
                    zIndex: 0,
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Box
                    component="form"
                    className="profile_box"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "100%" },
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      borderRadius: "7px",
                      boxShadow: "3px 0 15px 1px rgba(0, 0, 0, 0.4)",
                      zIndex: 0,
                      pb: 0,
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <h3>Your Personal Details</h3>
                    <Avatar
                      alt="PROFILEPIC"
                      src={user.length !== 0 && ImageBackend + user[0].PROFILEPIC}
                      sx={{ width: 100, height: 100 }}
                    />
                    <Box
                      component="form"
                      sx={{
                        "& .MuiTextField-root": { m: 1, width: "100%" },
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        mt: 1,
                        mb: 2,
                        borderRadius: "7px",
                        zIndex: 0,
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <br />
                      <h5 className="profile_employer_data">
                        <b> Name:</b>{" "}
                        {user.length !== 0 &&
                          user[0].F_NAME + user[0].M_NAME + user[0].L_NAME}
                        <span>
                          <CheckCircleIcon
                            sx={{ transform: "scale(.5)", color: "green" }}
                          />
                        </span>
                      </h5>
                      <Divider sx={{ width: "100%", border: "1px solid #898787" }} />
                      <h5 className="profile_employer_data">
                        <b> Email: </b>
                        {user.length !== 0 && user[0].EMAIL}
                        <span>
                          <CheckCircleIcon
                            sx={{ transform: "scale(.5)", color: "green" }}
                          />
                        </span>
                      </h5>
                      <Divider sx={{ width: "100%", border: "1px solid #898787" }} />
                      <h5 className="profile_employer_data">
                        <b>Mobile No:</b> +91-{user.length !== 0 && user[0].PHONENO}{" "}
                        <span>
                          <CheckCircleIcon
                            sx={{ transform: "scale(.5)", color: "green" }}
                          />
                        </span>
                      </h5>
                      <Divider sx={{ width: "100%", border: "1px solid #898787" }} />
                      <h5 className="profile_employer_data">
                        <b>Address:</b>{" "}
                        {user.length !== 0 &&
                          LocationsValue &&
                          `${LocationsValue.CITY_NAME}, ${LocationsValue.STATE_NAME}, ${LocationsValue.COUNRTY_NAME} `}{" "}
                        <span>
                          <CheckCircleIcon
                            sx={{ transform: "scale(.5)", color: "green" }}
                          />
                        </span>
                      </h5>
                      <Divider sx={{ width: "100%", border: "1px solid #898787" }} />
                      <h5 className="profile_employer_data">
                        <b>Company: </b> {user.length !== 0 && user[0].COMPANY_NAME}{" "}
                        <span>
                          <CheckCircleIcon
                            sx={{ transform: "scale(.5)", color: "green" }}
                          />
                        </span>
                      </h5>
                      <Divider sx={{ width: "100%", border: "1px solid #898787" }} />
                      <h5 className="profile_employer_data">
                        <b>About yourself:</b>{" "}
                        {user.length !== 0 && user[0].ABOUT_YOURSELF}{" "}
                        <span>
                          <CheckCircleIcon
                            sx={{ transform: "scale(.5)", color: "green" }}
                          />
                        </span>
                      </h5>
                      <Divider sx={{ width: "100%", border: "1px solid #898787" }} />
                      <h5 className="profile_employer_data">
                        <b>About Company : </b>{" "}
                        {user.length !== 0 && user[0].COMPANY_PRODILE}{" "}
                        <span>
                          <CheckCircleIcon
                            sx={{ transform: "scale(.5)", color: "green" }}
                          />
                        </span>
                      </h5>
                      <Divider sx={{ width: "100%", border: "1px solid #898787" }} />
                      <h5 className="profile_employer_data">
                        <b>User Type:</b>{" "}
                        {user.length !== 0 && user[0].USER_ROLE == 1
                          ? "employeer  "
                          : "jobseeker"}{" "}
                        <span>
                          <CheckCircleIcon
                            sx={{ transform: "scale(.5)", color: "green" }}
                          />
                        </span>
                      </h5>
                      <Divider sx={{ width: "100%", border: "1px solid #898787" }} />
                      <h5 className="profile_employer_data">
                        <b>Country:</b> India{" "}
                        <span>
                          <CheckCircleIcon
                            sx={{ transform: "scale(.5)", color: "green" }}
                          />
                        </span>
                      </h5>
                    </Box>
                  </Box>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
