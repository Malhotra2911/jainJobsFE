import React, { useState } from "react";
import { IoMdAlert } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import "../../../css/Employer/CreateJobPost.css";
import { GrClose } from "react-icons/gr";
import JobSeekerdashboard from "../../../components/Employer/employersidebar/JobSeekerdashboard";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import CreatePlanpopup from "./CreatePlanpopup";
import Placebid from "./Placebid";
import FlippingCard from "./FlippingCard";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

export default function CreateJobPost() {
  const [showform, setShowform] = useState(false);
  const [createOwn, setCreateOwn] = useState(false);
  const [placebid, setPlaceBid] = useState(false);
  const [flipingcard, setFlipingCard] = useState(false);
  const [isinstant, setisinstant] = useState(true);
  const [iscombo, setcombo] = useState(true);
  const [ispayperclick, setpayperclick] = useState(true);
  const [iscmop, setcmop] = useState(true);
  const [isbid, setbid] = useState(true);
  const { credit, subscribation } = useSelector((state) => state.AuthReducer);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setShowform(!showform);
  };
  const HandleOnClick = () => {
    setFlipingCard(true);
  };

  React.useEffect(() => {
    console.log();
    if (
      subscribation &&
      subscribation.length !== 0 &&
      subscribation.ISDELETED !== 1
    ) {
      switch (parseInt(subscribation.TYPE_OF_PLAN)) {
        case 1:
          setisinstant(true);
          break;
        case 2:
          setcombo(false);
          break;
        case 3:
          setcmop(false);
          break;
        case 4:
          setbid(false);
          break;
        case 5:
          setpayperclick(false);
          break;
        default:
          break;
      }
    }
  }, [subscribation]);

  const payperclickfunction = () => {
    if (credit > 500) {
      navigate("/create-post?creationtype=5");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You don't have enough credit  please add credit! ",
      }).then(() => {
        console.log("creditpage");
      });
    }
  };

  return (
    <div className="background_img">
      <div className="create_job_post">
        <JobSeekerdashboard />
        <div className="create_job_content">
          <DashboardProfile />
          <div className="CreateJobPost">
            <div className="createjobpost">
              {/* //instant hairing */}
              <div className="JObPost-col">
                <p>
                  Instant hiring
                  <button className="I-BTN" onClick={handleClick}>
                    <IoMdAlert />
                  </button>
                </p>
                {showform && (
                  <div id="ID-00" className="Write-to-Create-form-Container">
                    <div className="Create-Close-Button"></div>
                    <div className="Create-Sub-plan">
                      <div className="Create-Jobpost">
                        <div className="Create-top">
                          <h3>Plan Dettails</h3>
                          <button
                            className="Create-CloseBTN"
                            onClick={() => setShowform(false)}
                            disabled={isinstant}
                          >
                            
                            <GrClose />
                          </button>
                        </div>
                        <ul>
                          <li>Unlimited Access to all applied CV'S</li>
                          <li>Filtering of relevant CV </li>
                          <li>Access of GET and PET candidates</li>
                          <li>Access of premium CV</li>
                          <li>
                            RDA limited upto 50 relevant CV in a month as per
                            your opening.
                          </li>
                          <li>Can post 2 openings every month in total.</li>
                          <li>
                            Referral benefits allowed while making payment. 1
                            referral max
                          </li>
                          <li>Free plan upgrade.</li>
                          <li>
                            Connect with the employee of your choice and send
                            invites*
                          </li>
                          <li>
                            Customize your hiring with FMN boost option for any
                            existing active opening.
                          </li>
                          <li>
                            Access to Premium FMN hiring bid if on a
                            subscription.
                          </li>
                          <li>Get full access in your login portal</li>
                        </ul>
                      </div>
                      <div className="BTN-CreateJobPost">
                        {/* <button
                          className="CreateJob_btn"
                          onClick={() => setShowform(false)}
                        >
                          Create Job
                        </button> */}
                      </div>
                    </div>
                  </div>
                )}

                <button
                  className="CreateJob_btn"
                  onClick={() => navigate("/create-post?creationtype=1")}
                  // disabled={isinstant}
                >
                  Create Job
                </button>
              </div>

              {/* combo hairing */}
              {/* <div className="JObPost-col">
                <p>
                  Combo hiring
                  <button onClick={handleClick} className="I-BTN">
                    <IoMdAlert />
                  </button>
                </p>

                <button
                  className="CreateJob_btn"
                  onClick={() => {
                    navigate("/create-post?creationtype=2");
                  }}
                  disabled={iscombo}
                >
                  {iscombo ? "Please purchase to unlock " : "Create Job"}
                </button>
              </div> */}

              {/* create your own plan */}

              {/* <div className="JObPost-col">
                <p>
                  Create My Own Plan{" "}
                  <button className="I-BTN" onClick={handleClick}>
                    <IoMdAlert />
                  </button>
                </p>
                <button
                  className="CreateJob_btn"
                  disabled={iscmop}
                  onClick={() => setCreateOwn(true)}
                >
                  {iscmop ? "Please purchase to unlock " : "Create Job"}
                </button>
                {createOwn && (
                  <CreatePlanpopup
                    creationtype={3}
                    createownplan={setCreateOwn}
                  />
                )}
              </div> */}

              {/* fmn bid */}
              {/* <div className="JObPost-col">
                <p>
                  FMN BID{" "}
                  <button className="I-BTN" onClick={handleClick}>
                    <IoMdAlert />
                  </button>
                </p>
                <button
                  className="CreateJob_btn"
                  onClick={() => setPlaceBid(true)}
                  disabled={isbid}
                >
                  {isbid ? "Please purchase to unlock " : "Create Job"}
                </button>
                {placebid && (
                  <Placebid creationtype={4} PlaceBid={setPlaceBid} />
                )}
              </div> */}

              {/* pay per click */}
              {/* <div className="JObPost-col">
                <p>
                  Pay Per Click{" "}
                  <button className="I-BTN" onClick={HandleOnClick}>
                    <IoMdAlert />
                  </button>
                </p>
                <button
                  className="CreateJob_btn"
                  onClick={payperclickfunction}
                  disabled={ispayperclick}
                >
                  {ispayperclick ? "Please purchase to unlock " : "Create Job"}
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {flipingcard && <FlippingCard FlipingCard={setFlipingCard} />}
    </div>
  );
}
