import React, { useState } from "react";
import JobSeekerdashboard from "../../../components/Employer/employersidebar/JobSeekerdashboard";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import "../../../css/Employer/JobPosted.css";
import EditPopup from "../../../components/Employer/EditPopup/EditPopup";
import DeletePopup from "../../../components/Employer/DeletePopup/DeletePopup";
import ViewJob from "../ViewJob/ViewJob";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import FreelanceHome from "../../FreelancerWorld/FreelanceHome";
import { deleteFreelance } from "../../../redux/action/EmployerAction";
import Swal from "sweetalert2";
import ViewFreelancing from "./ViewFreelancing";

export default function Freelance() {
  const [isjobp, setisjobp] = useState([]);
  const { freelancejob } = useSelector((state) => state.EmployerReducer);
  const [open, setOpen] = React.useState(false);
  const [iseditdata, seteditdata] = React.useState(null);
  const applayForm = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    if (freelancejob && freelancejob.length !== 0) {
      setisjobp(freelancejob);
    }
  }, [freelancejob]);

  const editfreelancejob = (data) => {
    seteditdata(data);
    setOpen(!open);
  };

  return (
    <div className="background_img">
      <div className="Job_posted_main_content">
        <JobSeekerdashboard />
        <div className="Job_Posted_content">
          <DashboardProfile />
          <div className="JobPosted">
            <div className="jobpost">
              <div className="Job-Heads">
                <Button
                  variant="contained"
                  className="profile_btn"
                  sx={{
                    width: "auto",
                    textTransform: "none",
                    color: "#000000",
                    backgroundColor: "rgba(247, 112, 29, 0.39)",
                    "&:hover": {
                      backgroundColor: "rgba(247, 112, 29, 0.39)",
                    },
                  }}
                  onClick={applayForm}
                >
                  Create a Post
                </Button>
                {open && (
                  <FreelanceHome iseditdata={iseditdata} Freelance={setOpen} />
                )}
              </div>
              <div className="Job-body">
                {isjobp &&
                  isjobp.length !== 0 &&
                  isjobp.map((Applyed, index) => (
                    <JobPostedFun
                      key={index}
                      editfreelancejob={editfreelancejob}
                      Applyed={Applyed}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function JobPostedFun({ Applyed, editfreelancejob }) {
  const nevigation = useNavigate();
  let employerbtn = false;
  const [editJob, setEditJob] = useState(false);
  const [viewJob, setViewJob] = useState(false);
  const dispatch = useDispatch();

  const gotoreferpage = () => {
    nevigation("/referpage?jobid=" + Applyed.JOB_ID);
  };

  const allApplied = () => {
    nevigation("/appliedfreelancer", {
      state: {
        FREELANCE_JOB_ID: Applyed.FREELANCE_JOB_ID,
      },
    });
  };

  const deletefreelancejob = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(
          deleteFreelance({
            FREELANCE_JOB_ID: Applyed.FREELANCE_JOB_ID,
          })
        );
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div className="Job-card-Data">
      <div className="jobcard">
        <div className="card-top">
          <button className="BTN-Top" onClick={() => editfreelancejob(Applyed)}>
            EDIT
          </button>
          <button className="BTN-Top" onClick={deletefreelancejob}>
            DELETE
          </button>
          <button className="BTN-Top" onClick={gotoreferpage}>
            SHARE
          </button>
          <button className="BTN-Top" onClick={allApplied}>
            All Applied
          </button>
        </div>
        <div className="job-card-head">
          <h2>{Applyed.COMPANY_NAME}</h2>
          {/* <p>{Applyed.createdAt}</p> */}
          <p>{moment(Applyed.createdAt).utc().format('DD-MM-YYYY')}</p>
        </div>
        <div className="job-card-body">
          <p>{Applyed.COMPANY_WEBSITE}</p>
          <p>{" min bat amount:-" + Applyed.MIN_BATAMT}</p>
        </div>
        <div className="job-card-foot">
          <button className="BTN-save" onClick={() => setViewJob(true)}>
            View
          </button>
          {viewJob && (
            <ViewFreelancing
              closeview={setViewJob}
              jobdetails={Applyed}
              employerbtn={employerbtn}
            />
          )}
        </div>
      </div>
    </div>
  );
}
