import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import SideBar from "../../../components/Employer/employersidebar/JobSeekerdashboard";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import "../../../css/jobseeker/SubscriptionDetails.css";
import { CircularLoding } from "../../../redux/action/AuthAction";
import axiosInstance from "../../../utils/axiosInstance";
import SubscriptionTable from "../../jobseeker/JobseekerDashboard/MasterTables/SubscriptionTable";
import Employersubscriptionpopup from "../Employersubscriptionpopup/Employersubscriptionpopup";
import EmployeeSubscription from "./EmployeeSubscription";

export default function SubscriptionDetailPage() {
  const [issubscribe, setissubscribe] = useState(false);
  const [isPopUp, setPopUp] = useState(false);
  const { user } = useSelector((state) => state.AuthReducer);
  const [isTable, setisTable] = useState([]);
  const [cancelSubscription, setCancelSubscription] = useState(false);
  const [isemployerpopup, setisemployerpopup] = useState(false);
  const [isLabel, setLabel] = useState(null);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  };

  React.useEffect(() => {
    if (user && user.length !== 0) {
      if (user[0].SUBSCRIBATION === 1) {
        setissubscribe(true);
      }
    }
  }, [user]);

  React.useEffect(() => {
    axiosInstance.get("jobseeker/makesubscribation").then((res) => {
      try {
        if (res.data.status === 1 && res.data.data.length !==  0) {
          const createrow = [];
          const data = res.data.data;
          const singledata = res.data.data[0];

          setLabel({
            LENGTH_OF_PLAN: singledata.LENGTH_OF_PLAN + `days plan`,
            AMMOUNT: singledata.AMMOUNT,
            createdAt: singledata.createdAt,
            EXPIREDATE: singledata.EXPIREDATE,
            PAYMENT_ID: singledata.PAYMENT_ID,
            SUBSCRIBTION_ID: singledata.SUBSCRIBTION_ID,
            ISDELETED: singledata.ISDELETED,
          });

          data.map((ret, index) => {
            return createrow.push({
              SNO: index + 1,
              LENGTH_OF_PLAN: ret.LENGTH_OF_PLAN + `days plan`,
              AMMOUNT: ret.AMMOUNT,
              createdAt: ret.createdAt,
              EXPIREDATE: ret.EXPIREDATE,
              PAYMENT_ID: ret.PAYMENT_ID,
              ISDELETED: ret.ISDELETED,
            });
          });
          setisTable(createrow);
        }
      } catch {
        toast.error("Somthing Went be worng to get subscribation!!");
        Loading(false);
      }
    });
  }, []);

  const handlepayment = () => {
    if (user && user.length !== 0 && user[0].USER_ROLE === 1) {
      navigation("/employer-subscribation-plan/2/" + user[0].USER_ID);
    }
    if (user && user.length !== 0 && user[0].USER_ROLE === 2) {
      navigation("/employer-subscribation-plan/2/" + user[0].USER_ID);
    }
  };

  const canclesucscribation = () => {
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
        axiosInstance
          .post("jobseeker/cancelubscribation", {
            SUBSCRIBTION_ID: isLabel.SUBSCRIBTION_ID,
            USER_ID: user[0].USER_ID,
          })
          .then((res) => {
            if (res.data.status === 1) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: res.data.message,
                showConfirmButton: false,
                timer: 1500,
              }).then(() => {
                window.location.reload();
              });
            }
            if (res.data.status === 0) {
              toast.error("somthing went wrong please contact to admin");
            }
          });
      }
    });
  };

  return (
    <>
      <div className="background_img">
        <div className="applied_main_job">
          <SideBar />
          <div className="Applied_Job_content">
            <DashboardProfile />
            <div className="Subscription_page_content">
              <>
                {isLabel &&  isLabel.ISDELETED === 0 ? (
                  <div className="plan_details_section">
                    <div className="subscription_details">
                      <h3 className="plan_heading">
                        SubScription Plan :{" "}
                        <span className="plan_detain_name">
                          {isLabel.LENGTH_OF_PLAN}{" "}
                        </span>
                      </h3>
                      <h3 className="plan_heading">
                        Amount :{" "}
                        <span className="plan_detain_name">
                          {" "}
                          {isLabel.AMMOUNT}{" "}
                        </span>
                      </h3>
                      <h3 className="plan_heading">
                        Plan Active Date:{" "}
                        <span className="plan_detain_name">
                          {" "}
                          {isLabel.createdAt}{" "}
                        </span>{" "}
                      </h3>
                      <h3 className="plan_heading">
                        Plan Expairy Date:{" "}
                        <span className="plan_detain_name">
                          {" "}
                          {isLabel.EXPIREDATE}{" "}
                        </span>
                      </h3>
                      <h3 className="plan_heading">
                        Payment Id :{" "}
                        <span className="plan_detain_name">
                          {" "}
                          {isLabel.PAYMENT_ID}{" "}
                        </span>
                      </h3>
                    </div>
                    <Button
                      onClick={canclesucscribation}
                      sx={{
                        width: "auto",
                        // m: 1,
                        textTransform: "none",
                        display:'flex',
                        margin:"auto",
                        color: "#000000",
                        backgroundColor: "rgba(247, 112, 29, 0.39)",
                        "&:hover": {
                          backgroundColor: "rgba(247, 112, 29, 0.39)",
                        },
                      }}
                    >
                      Cancel Plan
                    </Button>
                  </div>
                ) : (
                  <div className="purchesPlan">
                    <Button
                      onClick={handlepayment}
                      sx={{
                        width: "auto",
                        m: 1,
                        textTransform: "none",
                        color: "#000000",
                        backgroundColor: "rgba(247, 112, 29, 0.39)",
                        "&:hover": {
                          backgroundColor: "rgba(247, 112, 29, 0.39)",
                        },
                      }}
                    >
                      purches Plan
                    </Button>
                  </div>
                )}
                <div className="old_plan_card">
                  <SubscriptionTable isTable={isTable} />
                </div>
              </>
            </div>
          </div>
        </div>
      </div>

      {isPopUp && <Employersubscriptionpopup setPopUp={setPopUp} />}
    </>
  );
}
