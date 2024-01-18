import React from "react";
import { IoMail } from "react-icons/io5";
import "../../../css/Employer/MailMessage.css";
import JobSeekerdashboard from "../../../components/Employer/employersidebar/JobSeekerdashboard";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
export default function EditpaymentPricing() {
  const [isdist, setisdist] = React.useState(null);
  const [istype, setistype] = React.useState(null);
  const [isAmmount, setAmmount] = React.useState(null);
  const location = useLocation();
  const navigation = useNavigate();

  React.useEffect(() => {
    setistype(parseInt(new URLSearchParams(location.search).get("TYPE")));
    setisdist(parseInt(new URLSearchParams(location.search).get("dist")));
  }, []);

  const onhandlesubmit = () => {
    if(!isAmmount){
      toast.error("please add ammount")
      return false;
    }
    
    if(!istype && !isdist){
      toast.error("Somthing went wrong!")
      return false;
    }


    axiosInstance
      .put("employer/updatepayment", {
        JOBID: isdist,
        AMMOUNT: isAmmount,
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Successfully",
          text: "thank you for resubmitted please wait:)",
        }).then(() => {
          navigation("/Notification", { replace: true });
        });
      });
  };

  return (
    <div className="mail_main_content">
      <JobSeekerdashboard />
      <div className="mail_content">
        <DashboardProfile />
        <div className="MailMessage">
          <div className="mailmessage">
            <h3 style={{ textAlign: "center" }} className="Mail-head">
              Your cxyz company job plan is got rejected please enter value{" "}
            </h3>
            <br />
            <input
              type="mail"
              name=""
              id=""
              onChange={(e) => setAmmount(e.target.value)}
              placeholder="enter new pricing"
              className="Mail-id"
            />
            <button className="Mail-Btn" onClick={onhandlesubmit}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
