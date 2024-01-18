import React, { useState, useEffect } from "react";
import { MdSort } from "react-icons/md";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FilterListIcon from "@mui/icons-material/FilterList";
import Tooltip from "@mui/material/Tooltip";
import Data from "../../../mockJson/JobPostedData";
import JobSeekerdashboard from "../../../components/Employer/employersidebar/JobSeekerdashboard";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import "../../../css/Employer/JobPosted.css";
import moment from "moment";
import UseFilter from "../../../components/Employer/UseFilters/UseFilter";
import BoostJob from "./BoostJob";
import EditPopup from "../../../components/Employer/EditPopup/EditPopup";
import DeletePopup from "../../../components/Employer/DeletePopup/DeletePopup";
import SharePopup from "../../../components/Employer/SharePopup/SharePopup";
import ViewJob from "../ViewJob/ViewJob";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import InputBase from "@mui/material/InputBase";
import axiosInstance from "../../../utils/axiosInstance";
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
export default function JobPosted() {
  const [searchvalue, setsearchvalue] = useState("");
  const [isjobp, setisjobp] = useState([]);
  const [jobpostfilter, setJobPostFilter] = useState(false);
  const { mycreatedpost } = useSelector((state) => state.EmployerReducer);

  React.useEffect(() => {
    if (mycreatedpost && mycreatedpost.length !== 0) {
      setisjobp(mycreatedpost);
    }
  }, [mycreatedpost]);

  const search = (e) => {
    e.preventDefault();
    axiosInstance
      .get(`employer/getcreatedjob?search=${searchvalue}`)
      .then((res) => {
        try {
          if (res?.data?.data) {
            setisjobp(res?.data?.data);
            console.log("search data is ", res?.data?.data);
          }
        } catch {
          console.log("somthing went wrong!");
        }
      });
  };

  const search10 = () => {
    axiosInstance
      .get(`employer/getcreatedjob?search=${searchvalue}`)
      .then((res) => {
        try {
          if (res?.data?.data) {
            setisjobp(res?.data?.data);
            console.log("search data is ", res?.data?.data);
          }
        } catch {
          console.log("somthing went wrong!");
        }
      });
  };

  useEffect(() => {
    search10();
  }, []);

  return (
    <div className="background_img">
      <div className="Job_posted_main_content">
        <JobSeekerdashboard />
        <div className="Job_Posted_content">
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

          <div className="JobPosted">
            <div className="jobpost">
              <div className="Job-body">
                {isjobp &&
                  isjobp.length !== 0 &&
                  isjobp.map((Applyed, index) => (
                    <JobPostedFun key={index} {...Applyed} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function JobPostedFun(props) {
  const [jobBoost, setJobBoost] = useState(false);
  const [editJob, setEditJob] = useState(false);
  const [deleteJob, setDeleteJob] = useState(false);
  const [viewJob, setViewJob] = useState(false);
  const [iscity, setiscity] = useState([]);
  const nevigation = useNavigate();
  const [isscopedata, setisscopedata] = useState({});
  const [CTC, setCTC] = useState(null);

  const skills = useSelector((state) => state.AuthReducer.scope);
  const { industrytype, categorytype, cities, scope } = useSelector(
    (state) => state.CommonReducer
  );

  React.useEffect(() => {
    if (cities.length !== 0) {
      const cityname = cities.filter(
        (data) => data.CITY_ID === parseInt(props.JOB_LOCATION)
      );
      setiscity(cityname);
    }

    if (skills.length !== 0) {
      const fileterdata = skills.filter(
        (data) => data.SCOPE_ID === parseInt(props.DESIGNATION)
      );
      setisscopedata(fileterdata[0]);
    }
  }, [cities, skills]);

  let employerbtn = false;
  const { TYPE_OF_JOB, postdate, expireddate, DESIGNATION } = props;
  var newdegnation = JSON.parse(DESIGNATION);

  React.useEffect(() => {
    setCTC(JSON.parse(props.SALARY_ANNUM));
  }, []);

  const gotoreferpage = () => {
    nevigation("/referpage?jobid=" + props.JOB_ID);
  };

  const handlelisted = (e) => {
    if (e.target.value === 1) {
      nevigation("/acessfromdb", {
        state: { accept: true, shortlist: null, postid: props.JOB_ID },
      });
    }
    if (e.target.value === 2)
      nevigation("/acessfromdb", {
        state: { accept: null, shortlist: true, postid: props.JOB_ID },
      });
  };

  return (
    <div className="Job-card-Data">
      <div className="jobcard">
        <div className="card-top">
          <button className="BTN-Top" onClick={() => setEditJob(true)}>
            EDIT
          </button>
          {editJob && (
            <EditPopup
              closeBtn={setEditJob}
              CREATION_TYPE={props.CREATION_TYPE}
              JOB_ID={props.JOB_ID}
              POST_TYPE={props.POST_TYPE}
            />
          )}
          <button className="BTN-Top" onClick={() => setDeleteJob(true)}>
            DELETE
          </button>
          {deleteJob && (
            <DeletePopup closeDel={setDeleteJob} JOB_ID={props.JOB_ID} />
          )}
          <button className="BTN-Top" onClick={() => setJobBoost(true)}>
            BOOST JOB
          </button>
          {jobBoost && (
            <BoostJob
              closeboost={setJobBoost}
              JOB_ID={props.JOB_ID}
              USER_ID={props.USER_ID}
            />
          )}
          <button className="BTN-Top" onClick={gotoreferpage}>
            SHARE
          </button>
          {/* {shareJob && <SharePopup closeshare={setShareJob} />} */}

          <select
            className="BTN-Top"
            name="VIEW APPLICATIONS"
            id=""
            onChange={handlelisted}
          >
            <option>Please Select </option>
            <option value={1}>All Applied</option>
            <option value={2}>All Shortlisted</option>
          </select>
        </div>
        <div className="job-card-head">
          <h2>{props.COMPANY_NAME}</h2>
          <p>{moment(props.createdAt).utc().format("DD-MM-YYYY")}</p>
        </div>
        <div className="job-card-body">
          <p>{newdegnation && newdegnation.FIELD_NAME}</p>
          <p>{props.MODE_OF_WORK + " job"}</p>
          <p>{isscopedata && isscopedata.FIELD_NAME}</p>

          <p>
            {iscity &&
              iscity !== null &&
              iscity !== "null" &&
              iscity.length !== 0 &&
              `${iscity[0].CITY_NAME} , ${iscity[0].STATE_NAME} , ${iscity[0].COUNRTY_NAME}`}
          </p>

          <p>
            {CTC && CTC.length !== 0 && typeof parseInt(CTC) == "number"
              ? `near around ${CTC} LPA `
              : `between  ${CTC}  LPA`}
          </p>
        </div>
        <div className="job-card-foot">
          <button className="BTN-save" onClick={() => setViewJob(true)}>
            View
          </button>
          {viewJob && (
            <ViewJob
              closeview={setViewJob}
              jobdetails={props}
              employerbtn={employerbtn}
            />
          )}
          <p>{postdate}</p>
          <p>{expireddate}</p>
        </div>
      </div>
    </div>
  );
}
