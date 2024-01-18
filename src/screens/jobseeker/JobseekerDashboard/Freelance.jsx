import React from "react";
import "../../../css/jobseeker/Available.css";
import { useState } from "react";
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
import { ImageBackend } from "../../../config/Config";
import ViewJobseekerjob from "../../Employer/ViewJob/ViewJobseekerjob";
import FreelancingApplay from "./FreelancingApplay";
import ViewDetailFreelancing from "./ViewDetailFreelancing";

export default function Freelance() {
  const dispatch = useDispatch();
  const { freelancejob } = useSelector((state) => state.JobseekerReducer);

  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  };

  React.useEffect(() => {
    dispatch(getallpost(Loading));
    dispatch(get_savedjobs(Loading, () => {}));
    dispatch(GetAppliedJob(Loading));
  }, []);

  return (
    <div>
      <div className="background_img">
        <div className="availjon_main">
          <JobSeekerdashboard />
          <div className="Job_Card_Content">
            <DashboardProfile />
            <div className="JOB-Seeker-Cards-Section">
              {freelancejob &&
                freelancejob.length !== 0 &&
                freelancejob.map((CardList, index) => (
                  <JobsListCards key={index} {...CardList} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function JobsListCards(props) {
  const [open, setOpen] = React.useState(false);
  const [shareFamily, setShareFamily] = useState(false);
  const [pingHr, setPingHr] = useState(false);
  const [applyJob, setApplyJob] = useState(false);
  const { user } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const [isAppliedByMe, setisAppliedByMe] = useState(false);
  const [viewJob, setViewJob] = React.useState(false);

  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  };

  const applyjobfunction = () => {
    setOpen(true);
  };

  const appliedcheck = () => {
    Loading(true)
    axiosInstance
      .post("jobseeker/single-apply-freelancejob", {
        FREELANCE_JOB_ID: props.FREELANCE_JOB_ID,
      })
      .then((res) => {
        Loading(false)
        if (res.data.status === 1) {
          if (res.data.data && res.data.data.FREELANCE_JOB_ID) {
            setisAppliedByMe(true);
          }
        }
      });
  };

  React.useEffect(() => {
    appliedcheck();
  }, []);
  return (
    <>
      <div className="JOB-Seeker-Card">
        <div className="JOB-Card">
          <div className="JOB-Name">
            <div>
              <h3>{props.COMPANY_NAME}</h3>

              <h4>{props.COMPANY_WEBSITE}</h4>
              <h4> {" min bat amount:-" + props.MIN_BATAMT}</h4>
            </div>
            <div>
              <img
                src={ImageBackend + "/" + props.COMPANY_IMAGE}
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
              </div>
            )}
          </div>
        </div>
      </div>

      {open && <FreelancingApplay Applied={setOpen} jobdata={props} />}

      {viewJob && (
        <ViewDetailFreelancing
          closeview={setViewJob}
          jobdetails={props}
          employerbtn={false}
          setApplyJob={setApplyJob}
        />
      )}
    </>
  );
}
