import React, { useState } from "react";
import "../../../css/Employer/AccessFromDB.css";
import { MdSort } from "react-icons/md";
import Data from "../../../mockJson/AccessFromDbData";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FilterListIcon from "@mui/icons-material/FilterList";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import JobSeekerdashboard from "../../../components/Employer/employersidebar/JobSeekerdashboard";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import UseFilter from "../../../components/Employer/UseFilters/UseFilter";
import ApplicantCard from "./ApplicantCard";
import ActionButton from "../../../components/Employer/ActionButton/ActionButton";
import { useDispatch, useSelector } from "react-redux";
import { CircularLoding } from "../../../redux/action/AuthAction";
import { Get_applieduserdata } from "../../../redux/action/EmployerAction";
import axiosInstance from "../../../utils/axiosInstance";
import { toast } from "react-toastify";
import { ImageBackend } from "../../../config/Config";
import { useLocation } from "react-router-dom";
import AnsofQue from "../../../components/Employer/AnsOfQue/AnsofQue";

const style = {
  position: "absolute",
  top: "80%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 1,
};

export default function AllShortlisted() {
  const [filter, setFilter] = useState(false);
  const [isFilterValue, setFilterValue] = useState({
    LINKEDIN: "",
    DOB: "",
    NOTICE_PERIOD: "",
    RELOCATE: "",
    SHIFT_TYPE: "",
    PREFER_SHIFT: "",
    EXPECTED_SALARY: [0, 0],
    PREV_COMPANY_SALARY: [0, 0],
    JOB_POSITON: "",
    EXPERIANCE: "",
    TYPE_OF_EDUCATION: "",
    ADDRESS: "",
    NAME_OF_COMPANY: "",
  });

  const dispatch = useDispatch();
  const [AppliedUser, setAppliedUser] = useState([]);
  const { ApplieduserData } = useSelector((state) => state.EmployerReducer);
  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  };

  React.useEffect(() => {
    dispatch(Get_applieduserdata(Loading));
  }, []);

  const location = useLocation();
  const onChangeText = (name, value) => {
    setFilterValue({ ...isFilterValue, [name]: value });
  };
  React.useEffect(() => {
    if (ApplieduserData.length !== 0) {
      if (location.state) {
        if (location.state.shortlist) {
          const getshorted = ApplieduserData.filter(
            (data) => data.APPLICATION_STATUS === 1
          );
          setAppliedUser(getshorted);
        }
        if (location.state.accept) {
          const getapplied = ApplieduserData.filter(
            (data) => data.JOB_ID === parseInt(location.state.postid)
          );
          setAppliedUser(getapplied);
        }
      } else {
        setAppliedUser(ApplieduserData);
      }
    }
  }, [ApplieduserData]);

  const filtervalue = () => {
    toast.success("your filter is saved successfully");
  };

  return (
    <>
      <div className="background_img">
        <div className="access_from_main_content">
          <JobSeekerdashboard />
          <div className="Access_DB_content">
            <DashboardProfile />
            <div className="AllShortlisted">
              <div className="allshort">
                <div className="all-short-Head">
                  <p
                    style={{ display: "flex", alignItems: "center" }}
                    onClick={() => {
                      setFilter(true);
                    }}
                  >
                    <Tooltip title="Filter Candidate list" arrow>
                      <FilterListIcon
                        color="warning"
                        sx={{ mr: 1, cursor: "pointer" }}
                      />
                    </Tooltip>
                    User Filter
                  </p>

                  {filter && (
                    <UseFilter
                      PopupPagefilter={setFilter}
                      filtervalue={filtervalue}
                      isFilterValue={isFilterValue}
                      onChangeText={onChangeText}
                      filter={filter}
                    />
                  )}
                </div>
                <div className="all-short-body">
                  {AppliedUser &&
                    AppliedUser.length !== 0 &&
                    AppliedUser.map((Applyed, index) => (
                      <AllShortlistedFUn key={index} {...Applyed} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function AllShortlistedFUn(props) {
  const [openPopup, setOpenPopup] = useState(false);
  const [skillStatus, setSkillStatus] = React.useState(false);
  const [report, setReport] = useState(false);
  const handleOpen = () => setSkillStatus(true);
  const handleClose = () => setSkillStatus(false);
  const [isUserDetais, setisUserDetais] = useState([]);
  const [isaddress, setadress] = useState(null);
  const dispatch = useDispatch();

  const [isanswerpopup, setisanswerpopup] = useState(false);

  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  };
  const handleOnclick = () => {
    setSkillStatus(false);
    setReport(true);
  };
  React.useEffect(() => {
    GetUserDetails();
  }, []);
  const GetUserDetails = () => {
    Loading(true);
    axiosInstance
      .post("employer/getUserDetails", {
        USER_ID: props.USER_ID,
        JOB_ID: props.JOB_ID,
      })
      .then((res) => {
        Loading(false);
        setisUserDetais(res.data.data[0]);
      });
  };

  const takeforword = () => {
    if (parseInt(props.APPLICATION_STATUS) === 1) {
      setOpenPopup(true);
    } else {
      Loading(true);
      axiosInstance
        .post("employer/takeforword", {
          USER_ID: props.USER_ID,
          JOB_ID: props.JOB_ID,
          APPLICATION_STATUS: 1,
        })
        .then((res) => {
          if (res.data.status === 1) {
            toast.success(res.data.message);
            setOpenPopup(true);
          }
          if (res.data.status === 0) {
            toast.error(res.data.message);
          }
          Loading(false);
        });
    }
  };

  const handlereject = () => {
    if (window.confirm("Do You Really Want to reject this user") == true) {
      Loading(true);
      axiosInstance
        .post("employer/rejectuser", {
          USER_ID: props.USER_ID,
          JOB_ID: props.JOB_ID,
        })
        .then((res) => {
          window.location.reload();
          GetUserDetails();
        });
    } else {
      toast.warn("you have cancled");
    }
  };

  const accessresume = () => {
    if (isUserDetais && isUserDetais.length !== 0) {
      if (isUserDetais.CV == "null") {
        toast.error(isUserDetais.F_NAME + "  isn't uploaded cv");
      } else {
        window.open(ImageBackend + isUserDetais.CV);
        // window.location.href = ImageBackend +  isUserDetais.CV;
      }
    }
  };

  const checkAnswerfun = () => {
    setisanswerpopup(true);
  };

  return (
    <>
      {isUserDetais && isUserDetais.length !== 0 ? (
        <div className="applislider_main">
          <div
            className={
              openPopup ? "short_listed_card_close" : "Short-listed-Card"
            }
          >
            <div className="Short-card">
              <div className="Short-card-col-1">
                <div className="card-head">
                  <h2>
                    {isUserDetais.F_NAME +
                      " " +
                      isUserDetais.M_NAME +
                      " " +
                      isUserDetais.L_NAME}
                  </h2>
                  <a href="#">{isUserDetais.JOB_POSITON}</a>
                </div>
                <div className="card-body">
                  <p>{isUserDetais.NAME_OF_COMPANY}</p>
                  <p>{isUserDetais.CURRENT_ADDRESS}</p>
                  <p>{isUserDetais.NOTICE_PERIOD + "  day's notice period"}</p>
                  <p>YES</p>
                  <Fab
                    variant="extended"
                    sx={{ height: 35, textTransform: "none", m: 1 }}
                    onClick={handleOpen}
                  >
                    {"python "}
                    <TaskAltOutlinedIcon sx={{ ml: 1, color: "green" }} />
                  </Fab>
                  <Fab
                    variant="extended"
                    sx={{ height: 35, textTransform: "none", m: 1 }}
                    onClick={handleOpen}
                  >
                    {"java"}
                    <TaskAltOutlinedIcon sx={{ ml: 1, color: "green" }} />
                  </Fab>
                  <Modal
                    keepMounted
                    open={skillStatus}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                  >
                    <Box sx={style}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <TaskAltOutlinedIcon sx={{ color: "green", mr: 2 }} />
                        <Typography
                          id="keep-mounted-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          Passed the screening Check of Python
                        </Typography>
                      </Box>
                      <Divider />
                      <Box sx={{ mt: 3, mb: 2 }}>
                        <FormGroup
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <FormControlLabel
                            control={
                              <Checkbox color="warning" defaultChecked />
                            }
                            label="Assessment Test (Advanced)"
                          />
                          <FormLabel
                            sx={{
                              mt: 1.2,
                              color: "orange",
                              textDecoration: "underline",
                            }}
                            component="legend"
                            onClick={handleOnclick}
                          >
                            View Report
                          </FormLabel>
                        </FormGroup>
                        <FormGroup
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <FormControlLabel
                            control={
                              <Checkbox color="warning" defaultChecked />
                            }
                            label="Assessment Test(Beginner)"
                          />
                          <FormLabel
                            sx={{
                              mt: 1.2,
                              color: "orange",
                              textDecoration: "underline",
                            }}
                            component="legend"
                          >
                            View Report
                          </FormLabel>
                        </FormGroup>
                      </Box>
                    </Box>
                  </Modal>
                </div>
                <Divider sx={{ width: "100%" }} />
                <div className="last_btn">
                  <Button
                    className="rejectbtn"
                    sx={{
                      width: "40%",
                      textTransform: "none",
                      color: "#000000",
                      backgroundColor: "rgba(247, 112, 29, 0.39)",
                      borderRadius: "30px",
                      "&:hover": {
                        backgroundColor: "rgba(247, 112, 29, 0.39)",
                      },
                    }}
                    onClick={handlereject}
                  >
                    Reject
                  </Button>
                  <Button
                    onClick={takeforword}
                    sx={{
                      width: "40%",
                      textTransform: "none",
                      borderRadius: "30px",
                      color: "#000000",
                      backgroundColor: "rgba(247, 112, 29, 0.39)",
                      "&:hover": {
                        backgroundColor: "rgba(247, 112, 29, 0.39)",
                      },
                    }}
                  >
                    Take Forward
                  </Button>
                </div>
              </div>
              <div className={openPopup ? "close" : "Short-card-col-2"}>
                <div className="card-get-action">
                  <Button
                    onClick={accessresume}
                    variant="contained"
                    className="profile_btn"
                    sx={{
                      width: "auto%",
                      textTransform: "none",
                      color: "#000000",
                      backgroundColor: "rgba(247, 112, 29, 0.39)",
                      "&:hover": {
                        backgroundColor: "rgba(247, 112, 29, 0.39)",
                      },
                    }}
                  >
                    Access Resume
                  </Button>

                  <br />

                  {isUserDetais &&
                  isUserDetais.length !== 0 &&
                  parseInt(isUserDetais.ANSWER_SUBBMITTED) !== 0 ? (
                    <Button
                      onClick={checkAnswerfun}
                      variant="contained"
                      className="profile_btn"
                      sx={{
                        width: "auto%",
                        textTransform: "none",
                        color: "#000000",
                        backgroundColor: "rgba(247, 112, 29, 0.39)",
                        "&:hover": {
                          backgroundColor: "rgba(247, 112, 29, 0.39)",
                        },
                      }}
                    >
                      Check Answer
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      className="profile_btn"
                      sx={{
                        width: "auto%",
                        textTransform: "none",
                        color: "#000000",
                        backgroundColor: "rgba(247, 112, 29, 0.39)",
                        "&:hover": {
                          backgroundColor: "rgba(247, 112, 29, 0.39)",
                        },
                      }}
                      disabled
                    >
                      no que assigned for this
                    </Button>
                  )}

                  {/* <ActionButton /> */}
                </div>
              </div>
            </div>
          </div>
          <div className={openPopup ? "applicant_slider" : "close"}>
            <ApplicantCard userdata={isUserDetais} />
          </div>
        </div>
      ) : null}

      <AnsofQue
        isanswerpopup={isanswerpopup}
        setisanswerpopup={setisanswerpopup}
        isUserDetais={isUserDetais}
      />
    </>
  );
}
