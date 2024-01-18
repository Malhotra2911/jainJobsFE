import React from "react";
import Saved from "../../../mockJson/SavedJobsData";
import "../../../css/jobseeker/SavedJob.css";
import JobSeekerdashboard from "../../../components/JobSeeker/JOBSeekercontent/JobSeekerdashboard";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import { useDispatch, useSelector } from "react-redux";
import { CircularLoding } from "../../../redux/action/AuthAction";
import { get_savedjobs } from "../../../redux/action/EmployerAction";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
export default function SavedJob() {
  const dispatch = useDispatch();
  const savedjobs = useSelector((state) => state.EmployerReducer.savedjobs);
  const navigation = useNavigate();
  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  };


  const {user} = useSelector((state) => state.AuthReducer);
  React.useEffect(()=>{

    if(user && user.length !== 0  && user[0].SUBSCRIBATION === 0 ){
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "you cant use this feature without subscribation",
      });
    }
    else{
      handlesubmit();
    }
  },[user])

 const handlesubmit = () =>{
  dispatch(
    get_savedjobs(Loading, (result) => {
      if (result.data.data.length == 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "haven't  saved any job please save any job",
        }).then(() => {
          navigation("/availablejobs");
        });
      }
    })
  );
 }


  return (
    <div>
      <div className="background_img">
        <div className="Save_Job_Page">
          <JobSeekerdashboard />
          <div className="Saved_Job_content">
            <DashboardProfile />
            <div className="Saved-Job-Cards-Section">
              {/* <NoSavedJob /> */}
              {user && user.length !== 0  && user[0].SUBSCRIBATION !== 0 && savedjobs &&
                savedjobs.length !== 0 &&
                savedjobs.map((SavedJob, index) => (
                  <SavedJobsData key={index} {...SavedJob} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function SavedJobsData(props) {
  const [isdesignation, setisdesignation] = React.useState([]);
  // React.useEffect(() => {
  //   if (props.DESIGNATION && props.DESIGNATION !== 0) {
  //     setisdesignation(JSON.parse(props.DESIGNATION));
  //   }
  // }, []);

  const onremovejob = () => {
    console.log(props);
    axiosInstance
      .delete(`jobseeker/deleteSavedJob?SAVE_ID=${props.SAVE_ID}`)
      .then((res) => {
        if (res.data.status === 1) {
          toast.success("unsaved successfully");
          window.location.reload();
        } else {
          toast.error("Somthing went wrong !!");
        }
      });
  };

  const CTC = JSON.parse(props.SALARY_ANNUM);

  const navigation = useNavigate();
  return (
    <div className="JOB-Saved-Card">
      <div className="JOB-Saved">
        <div className="job_saved_container">
          <div className="JOB-Saved-Comp">
            <h3>{props.COMPANY_NAME && props.COMPANY_NAME.toUpperCase()}</h3>
            <h4>
              {/* {isdesignation.map((data, index) => {
                return <span key={index}> {data},</span>;
              })} */}
            </h4>
            <h4>{props.MODE_OF_WORK}</h4>
            <h4>{new Date().toLocaleDateString()}</h4>
            <h4>{CTC && CTC.length !== 0 && ` ${CTC[0]} to ${CTC[1]}  CTC`}</h4>
          </div>
          <div
            className="Saved-JOB-Button"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <button
              className="Saved_job_btn"
              onClick={() => {
                navigation("/availablejobs");
              }}
            >
              Apply
            </button>
            <button
              onClick={onremovejob}
              className="Saved_job_btn"
              style={{ marginLeft: "10px", background: "#F7711C" }}
            >
              Remove{" "}
            </button>
          </div>
        </div>
        <div className="saved_bookmark_img">
          <img
            className="savedlogoclass"
            src="jobseeker/savedlogo.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
