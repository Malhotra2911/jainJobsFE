import React, { useState, useEffect } from "react";
import "../../../css/jobseeker/Available.css";
import SharePopup from "../../../components/JobSeeker/JOBSeekercontent/SharePopup";
import HrpingPopup from "../../../components/JobSeeker/JOBSeekercontent/HrpingPopup";
import ApplyPopup from "../../../components/JobSeeker/JOBSeekercontent/ApplyPopup";
import JobSeekerdashboard from "../../../components/JobSeeker/JOBSeekercontent/JobSeekerdashboard";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import { useDispatch, useSelector } from "react-redux";
import { CircularLoding } from "../../../redux/action/AuthAction";
import axiosInstance from "../../../utils/axiosInstance";
import { toast } from "react-toastify";
import {
  AppliedJobAction,
  getallpost,
  GetAppliedJob,
} from "../../../redux/action/JobSeekerAction";
import { get_savedjobs } from "../../../redux/action/EmployerAction";
import ResponsiveDialog from "../../../components/Confirmation/ResponsiveDialog";
import { ImageBackend } from "../../../config/Config";
import ViewJob from "../../Employer/ViewJob/ViewJob";
import ViewJobseekerjob from "../../Employer/ViewJob/ViewJobseekerjob";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "30%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  border: "1px solid red",
  borderRadius: "1rem",
}));
export default function AvailableJobs() {
  const dispatch = useDispatch();
  const [searchvalue, setsearchvalue] = useState("");
  const [jobslist, setjobslist] = useState("");
  const AvilableJob = useSelector((state) => state.JobseekerReducer.allpost);

  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  };
  React.useEffect(() => {
    dispatch(getallpost(Loading));
    dispatch(get_savedjobs(Loading, () => {}));
    dispatch(GetAppliedJob(Loading));
  }, []);

  const search = (e) => {
    e.preventDefault();
    axiosInstance
      .get(`jobseeker/getavilablejobs?search=${searchvalue}`)
      .then((res) => {
        try {
          if (res?.data?.data) {
            setjobslist(res?.data?.data);
            console.log("search data is ", res?.data?.data);
          }
        } catch {
          console.log("somthing went wrong!");
        }
      });
  };

  const search10 = () => {
    axiosInstance
      .get(`jobseeker/getavilablejobs?search=${searchvalue}`)
      .then((res) => {
        try {
          if (res?.data?.data) {
            setjobslist(res?.data?.data);
            console.log("search data is ", res?.data?.data);
          }
        } catch {
          console.log("somthing went wrong!");
        }
      });
  };
  useEffect(() => {
    search10();
    if (AvilableJob) {
      setjobslist(AvilableJob);
    }
  }, []);

  return (
    <>
      <div className="background_img">
        <div className="availjon_main">
          <JobSeekerdashboard />
          <div className="Job_Card_Content">
            <DashboardProfile />
            <div style={{ marginTop: "0.5rem" }}>
              <form onSubmit={search}>
                <Search
                  // className="search_bar"
                  sx={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "2rem 2rem 2rem 2rem",
                    "&:hover": { backgroundColor: "#FFFFFF" },
                  }}
                >
                  <SearchIconWrapper>
                    <SearchIcon sx={{ color: "#000000" }} />
                    <Divider orientation="vertical" flexItem />
                  </SearchIconWrapper>
                  <StyledInputBase
                    sx={{ color: "#000000" }}
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                    onChange={(e) => setsearchvalue(e.target.value)}
                  />
                </Search>
              </form>
            </div>

            <div className="JOB-Seeker-Cards-Section">
              {jobslist &&
                jobslist.map((CardList, index) => (
                  <JobsListCards key={index} {...CardList} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function JobsListCards(props) {
  const [open, setOpen] = React.useState(false);
  const [shareFamily, setShareFamily] = useState(false);
  const [pingHr, setPingHr] = useState(false);
  const [applyJob, setApplyJob] = useState(false);
  const [isSaved, setisSaved] = useState(false);
  const [isSkills, setisSkills] = useState(null);
  const { user, Completeprofile } = useSelector((state) => state.AuthReducer);
  const skills = useSelector((state) => state.AuthReducer.scope);
  const appliedpost = useSelector(
    (state) => state.JobseekerReducer.appliedpost
  );
  const savedjobs = useSelector((state) => state.EmployerReducer.savedjobs);
  const dispatch = useDispatch();
  const [isAppliedByMe, setisAppliedByMe] = useState(false);
  const [viewJob, setViewJob] = React.useState(false);

  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  };
  React.useEffect(() => {
    if (appliedpost.length !== 0) {
      const filter = appliedpost.filter(
        (option) => option.JOB_ID === props.B_ID
      );
      if (filter.length > 0) {
        setisAppliedByMe(true);
      }
    }
  }, [appliedpost]);

  const getskillname = () => {
    const arr = [];
    // const newskill = props.SKILLS;
    // newskill &&
    //   newskill.length !== 0 &&
    //   newskill.map((data, index) => {
    //     const variableOne = skills.filter(
    //       (itemInArray) => itemInArray.SCOPE_ID === data
    //     );
    //     arr.push(variableOne);
    //   });
    setisSkills(props.SKILLS);
  };

  React.useEffect(() => {
    getskillname();
  }, []);

  React.useEffect(() => {
    _checksaved();
  }, [savedjobs]);
  const _checksaved = () => {
    savedjobs.map((data, index) => {
      if (data.SAVE_JOB_ID === props.B_ID) {
        setisSaved(true);
      }
    });
  };
  const _savedJob = () => {
    const jsondata = {
      SAVE_JOB_ID: props.B_ID,
    };
    axiosInstance.post("employer/save-job", jsondata).then((result) => {
      if (result.data.status === 1) {
        setisSaved(true);
        toast.success(result.data.message);
      }
      if (result.data.status === 0) {
        toast.error(result.data.message);
      }
    });
  };

  const getposts = () => {
    dispatch(getallpost(Loading));
  };

  const SubmitAnswer = (givenanswer) => {
    Loading(true);
    let array = [];
    Object.keys(givenanswer).forEach(function (key) {
      array.push(givenanswer[key]);
    });
    const formData = new FormData();
    formData.append("JOB_ID", props.B_ID);
    formData.append("ANSWER_SUBBMITTED", JSON.stringify(array));
    dispatch(AppliedJobAction(formData, Loading, getposts));
    setApplyJob(false);
    Loading(false);
  };

  const handleClickOpen = () => {
    if (
      props.QUESTION &&
      props.QUESTION !== "" &&
      props.QUESTION.length !== 0
    ) {
      setApplyJob(true);
      setOpen(false);
    } else {
      const formData = new FormData();
      formData.append("JOB_ID", props.B_ID);
      formData.append("ANSWER_SUBBMITTED", "0");
      dispatch(AppliedJobAction(formData, Loading, getposts));
      toast.success("you have applied for job successfully");
    }
  };

  const applyjobfunction = () => {
    if (Completeprofile < 70) {
      toast.warn("Please Complete your profile atleast  70% to get elegible");
    } else {
      if (
        user &&
        user[0].SUBSCRIBATION === 1 &&
        appliedpost &&
        appliedpost.length !== 0
      ) {
        setOpen(true);
      } else {
        if (user && appliedpost && appliedpost.length > 3) {
          toast.warn(
            "you have reached your maximum limit please purches subscribation to continue"
          );
        } else {
          setOpen(true);
        }
      }
    }
  };
  const EXPERIENCE = JSON.parse(props.EXPERIENCE);
  const CTC = JSON.parse(props.SALARY_ANNUM);

  return (
    <>
      <div className="JOB-Seeker-Card">
        <div className="JOB-Card">
          <div className="JOB-Name">
            <div>
              <h3>{props.B_ID + " . " + props.COMPANY_NAME.toUpperCase()}</h3>
              <h4>
                {EXPERIENCE &&
                  EXPERIENCE.length !== 0 &&
                  ` ${EXPERIENCE[0]} - ${EXPERIENCE[1]} Year`}
              </h4>
              <h4>{props.MODE_OF_WORK}</h4>
              <h4>
                {/* {isSkills && isSkills.length !== 0 && isSkills.map((data, index) => (
                <span>{data[0].FIELD_NAME} ,  
                </span>
              ))} */}
              </h4>
              <h4>
                {CTC && CTC.length !== 0 && ` ${CTC[0]} to ${CTC[1]}  CTC`}
              </h4>
            </div>
            <div>
              <img
                src={ImageBackend + props.IMAGE}
                alt=""
                srcset=""
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          <div className="jobseeker_btns">
            <div className="Apply-JOB-Button">
              {isAppliedByMe ? (
                <button
                  className="Apply-JOB-BTN"
                  style={{ backgroundColor: "gray", color: "whitesmoke" }}
                  disabled
                >
                  Applied
                </button>
              ) : (
                <button className="Apply-JOB-BTN" onClick={applyjobfunction}>
                  Apply
                </button>
              )}
            </div>
            {isAppliedByMe ? null : (
              <div className="Reaction-Buttons">
                <button className="RB" onClick={() => setViewJob(true)}>
                  {" "}
                  <img src="jobseeker/eye.png" alt="" />{" "}
                </button>
                <button
                  className="RB"
                  onClick={() => {
                    setShareFamily(true);
                  }}
                >
                  <img src="jobseeker/share.png" alt="" />
                </button>
                {shareFamily && (
                  <SharePopup Share={setShareFamily} JOBID={props.ID} />
                )}

                <button
                  className="RBH"
                  onClick={() => {
                    setPingHr(true);
                  }}
                >
                  <img src="jobseeker/hr.png" alt="" />
                </button>
                {pingHr && <HrpingPopup Ping={setPingHr} email={props.EMAIL} />}

                {isSaved ? null : (
                  <button className="RBS" type="button" onClick={_savedJob}>
                    {" "}
                    <img src="jobseeker/saved.png" alt="" />{" "}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <ResponsiveDialog
        open={open}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
        textfile={"Do YOur Really Want To Apply For This Job"}
      />
      {applyJob && (
        <ApplyPopup
          Apply={setApplyJob}
          jobque={JSON.parse(props.QUESTION)}
          SubmitAnswer={SubmitAnswer}
        />
      )}

      {viewJob && (
        <ViewJobseekerjob
          closeview={setViewJob}
          jobdetails={props}
          employerbtn={false}
          setApplyJob={setApplyJob}
        />
      )}
    </>
  );
}
