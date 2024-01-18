import React, { useState } from "react";
import ApplyData from "../../../mockJson/AppliedData";
// import Background from "../assets/background.png"
import JobSeekerdashboard from "../../../components/JobSeeker/JOBSeekercontent/JobSeekerdashboard";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import "../../../css/jobseeker/AppliedJob.css";
import axiosInstance from "../../../utils/axiosInstance";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
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
export default function AppliedJob() {
  const [searchvalue, setsearchvalue] = useState("");
  const [isAppliedjobs, setisAppliedjobs] = React.useState([]);

  React.useEffect(() => {
    axiosInstance.get("jobseeker/ApplyJob").then((result) => {
      if (result.data.status == 1) {
        setisAppliedjobs(result.data.data);
      }
      if (result.data.status == 0) {
        toast.error("Somthing Went Wrong!");
      }
    });
  }, []);

  const search = (e) => {
    e.preventDefault();
    axiosInstance
      .get(`jobseeker/getavilablejobs?search=${searchvalue}`)
      .then((res) => {
        try {
          if (res?.data?.data) {
            setisAppliedjobs(res?.data?.data);
            console.log("search data is ", res?.data?.data);
          }
        } catch {
          console.log("somthing went wrong!");
        }
      });
  };
  return (
    <>
      <div className="background_img">
        <div className="applied_main_job">
          <JobSeekerdashboard />

          <div className="Applied_Job_content">
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
            <div className="Applied_jobs">
              <div></div>
              <div className="Applied-Job-Cards-Section">
                {isAppliedjobs &&
                  isAppliedjobs.length !== 0 &&
                  isAppliedjobs.map((AppliedJob, index) => (
                    <ApplyJobsData key={index} {...AppliedJob} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ApplyJobsData(props) {
  const EXPERIENCE = props.EXPERIENCE ? JSON.parse(props.EXPERIENCE) : 0;
  const CTC = JSON.parse(props.SALARY_ANNUM);
  const [isSkills, setisSkills] = useState([]);
  const skills = useSelector((state) => state.AuthReducer.scope);

  const getskillname = () => {
    const arr = [];

    if (props && props.SKILLS) {
      const newskill = JSON.parse(props.SKILLS);
      // newskill.map((data, index) => {
      //   const variableOne = skills.filter(
      //     (itemInArray) => itemInArray.SCOPE_ID === data
      //   );
      //   arr.push(variableOne);
      // });
    }

    setisSkills(arr);
  };

  React.useEffect(() => {
    getskillname();
  }, []);

  return (
    <div className="Job-Applied-Card">
      <div className="Job-Applied">
        <div className="job_applied_container">
          <div className="JOB-applied-Comp">
            <h3>{props.ID + " . " + props.COMPANY_NAME.toUpperCase()}</h3>
            <h4>{`${EXPERIENCE} Year`}</h4>
            <h4>{props.MODE_OF_WORK}</h4>

            <h4>
              {isSkills &&
                isSkills.map((data, index) => (
                  <span>{data[0].FIELD_NAME} , </span>
                ))}
            </h4>

            <h4>{CTC && ` ${CTC[0]} to ${CTC[1]}  CTC`}</h4>
          </div>
          <div className="Applied-JOB-Button">
            <button className="Applied_job_btn" style={{width:"100%"}}>
              {" "}
              {"  "} Applied {"  "}
            </button>
          </div>
        </div>
        <div className="Applied_bookmark_img">
          <img src="jobseeker/Applied.png" alt="" />
        </div>
      </div>
    </div>
  );
}
