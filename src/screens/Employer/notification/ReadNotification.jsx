import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import JobSeekerdashboard from "../../../components/JobSeeker/JOBSeekercontent/JobSeekerdashboard";
import SideBar from "../../../components/Employer/employersidebar/JobSeekerdashboard";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import { useSelector } from "react-redux";
import "./AllNotification.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { displayRazorpay } from "../../../RazorPay/RazorPay";
import axiosInstance from "../../../utils/axiosInstance";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function ReadNotification() {
  const { blogposts } = useSelector((state) => state.CommonReducer);
  const [isbolog, setisbolog] = useState([]);
  const navigation = useNavigate();
  const { user, notification, credit } = useSelector(
    (state) => state.AuthReducer
  );
  const { NOTIFI_ID } = useParams();
  const [isfiledata, setisfiledata] = useState({});
  const [open, setOpen] = React.useState(false);
  const [isfinamamount, setisfinamamount] = useState(0);
  const [isminusamt, setisminusamt] = useState(credit);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  var userVerify = () => {
    if (user && user.length !== 0 && user[0].USER_ROLE == 1) {
      return true;
    } else {
      return false;
    }
  };

  React.useEffect(() => {
    if (notification && notification.length !== 0) {
      if (NOTIFI_ID) {
        const newfile = notification.filter(
          (data) => data.NOTIFICATION_ID === parseInt(NOTIFI_ID)
        );
        setisbolog(newfile);
        axiosInstance
          .post("employer/getcustomplan", {
            JOB_ID: parseInt(newfile[0].LINK),
          })
          .then((res) => {
            try {
              setisfiledata(res.data.data);
              if (credit !== 0 && res.data.data && res.data.data.AMMOUNT) {
                if (parseInt(res.data.data.AMMOUNT) > parseInt(credit)) {
                  const finalammount =
                    parseInt(res.data.data.AMMOUNT) - parseInt(credit);
                  console.log(finalammount);
                  setisfinamamount(finalammount);
                  setisminusamt(0);
                } else {
                  setisfinamamount(0);
                  const minuscredit =
                    parseInt(credit) - parseInt(res.data.data.AMMOUNT);
                  setisminusamt(minuscredit);
                }
              } else {
                setisfinamamount(parseInt(res.data.data.AMMOUNT));
                setisminusamt(parseInt(credit));
              }
            } catch (error) {
              console.log(error);
            }
          });
      }
    }
  }, [notification]);

  const makepayment = () => {
    if (isfiledata && !isfiledata.AMMOUNT) {
      toast.error("somthing went wrong!!");
      return false;
    }
    displayRazorpay(
      {
        ammount: parseInt(isfinamamount) === 0 ? 1 : parseInt(isfinamamount),
        userid: isfiledata.CUSER_ID,
      },
      (data) => {
        const userdata = {
          USER_ID: isfiledata.CUSER_ID,
          AMMOUNT: parseInt(isfinamamount) === 0 ? 1 : parseInt(isfinamamount),
          CJOB_ID: isfiledata.CJOB_ID,
          CPAY_ID: data.razorpay_order_id,
          CPLAN_ID: isfiledata.CPLAN_ID,
          minuscredit: isminusamt,
        };
        axiosInstance.post("employer/updates_tatus", userdata).then((res) => {
          if (res.data.status === 1) {
            toast.success("payment successfully completed");
            setTimeout(() => {
              window.location.reload();
            }, 1800);
          } else {
            toast.error("payment successfully completed");
          }
        });
      }
    );
  };

  const makepaymentwithoutcredit = () => {
    if (isfiledata && !isfiledata.AMMOUNT) {
      toast.error("somthing went wrong!!");
      return false;
    }
    displayRazorpay(
      {
        ammount: isfiledata.AMMOUNT,
        userid: isfiledata.CUSER_ID,
      },
      (data) => {
        const userdata = {
          USER_ID: isfiledata.CUSER_ID,
          AMMOUNT: isfiledata.AMMOUNTisfiledata.AMMOUNT,
          CJOB_ID: isfiledata.CJOB_ID,
          CPAY_ID: data.razorpay_order_id,
          CPLAN_ID: isfiledata.CPLAN_ID,
          minuscredit: credit,
        };
        axiosInstance.post("employer/updates_tatus", userdata).then((res) => {
          if (res.data.status === 1) {
            toast.success("payment successfully completed");
          } else {
            toast.error("payment successfully completed");
          }
        });
      }
    );
  };

  return (
    <>
      <div className="background_img">
        <div className="activity_container">
          {userVerify() ? <SideBar /> : <JobSeekerdashboard />}

          <div className="All_activity_content">
            <DashboardProfile />
            <div
              style={{
                height: "80vh",
                overflowY: "scroll",
                display: "flex",
                flexDirection: "row",
                marginTop: "1rem",
                justifyContent: "space-around",
                flexWrap: "wrap",
                paddingLeft: 0,
              }}
            >
              <div style={{ width: "100%" }}>
                <h1 style={{ textAlign: "center" }}>
                  {" "}
                  <u> Notification </u>{" "}
                </h1>
              </div>
              <br />

              {isbolog && isbolog.length !== 0 && (
                <div style={{ width: "80%", height: "100%", margin: "0 4%" }}>
                  <div className="itemEmp">
                    <div className="titleEmp">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "center",
                        }}
                      >
                        <h2>{isbolog[0].TITLE}</h2>
                        <br />
                        <br />
                        <h5>{isbolog[0].MESSAGE}</h5>
                        <br />
                        <br />

                        {isbolog[0].TYPE === "createplan" && (
                          <Link
                            style={{ textDecoration: "none" }}
                            to={`/updatepayment?TYPE=${isbolog[0].TYPE}&dist=${isbolog[0].LINK}`}
                          >
                            <Button variant="contained" style={{'marginBottom':'2rem'}}>Update Ammount</Button>
                          </Link>
                        )}

                        {isbolog[0].REMARK1 === "success" && (
                          <Button variant="contained" onClick={handleClickOpen}>
                            Make Payment of {isfiledata.AMMOUNT} Rs.
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to add your credit to make paymet {"\n"}
            if you will add credit your final payment will be{" "}
            <b>{isfinamamount} Rs.</b>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={makepaymentwithoutcredit}>NO,Continue</Button>
          <Button onClick={makepayment} autoFocus>
            Yes , Add please
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
