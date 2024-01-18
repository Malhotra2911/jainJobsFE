import { Button, Modal, TextField, Typography, Divider } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import DashboardProfile from "../../../components/JobSeeker/UserDashboardProfile/DashboardProfile";
import "../../../css/jobseeker/SubscriptionDetails.css";
import { CircularLoding } from "../../../redux/action/AuthAction";
import axiosInstance from "../../../utils/axiosInstance";
import JobSeekerdashboard from "../../../components/Employer/employersidebar/JobSeekerdashboard";
import { Box } from "@mui/system";
import { displayRazorpay } from "../../../RazorPay/RazorPay";
import {CssTextField} from "../../../css/Employer/MaterialUicss/OwnCompany"
import SideBar from "../../../components/JobSeeker/JOBSeekercontent/JobSeekerdashboard";
import CreditTable from "./MasterTables/CreditTable";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "white",
  // border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function AddCredit() {
  const [issubscribe, setissubscribe] = useState(false);
  const [isPopUp, setPopUp] = useState(false);
  const { user } = useSelector((state) => state.AuthReducer);
  const [isTable, setisTable] = useState([]);
  const [ismoney, setismoney] = useState(null);

  const dispatch = useDispatch();
  const navigation = useNavigate();

  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  };

  var userVerify = () => {
    if (user && user.length !== 0 && user[0].USER_ROLE == 1) {
      return true;
    } else {
      return false;
    }
  };

  React.useEffect(() => {
    if (user && user.length !== 0) {
      if (user[0].SUBSCRIBATION === 1) {
        setissubscribe(true);
      }
    }
  }, [user]);

  React.useEffect(() => {
    axiosInstance.get("user/get-payments").then((res) => {
      try {
        if (res.data.status === 1 && res.data.data.length !== 0) {
          const createrow = [];
          const data = res.data.data;

          data.map((ret, index) => {
            return createrow.push({
              SNO: index + 1,
              PAYMENT_ID: ret.PAYMENT_ID,
              AMMOUNT: ret.AMMOUNT,
              PERPOUS: ret.PERPOUS,
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
    setPopUp(true);
  };

  const makepayment = () => {
    if (!ismoney) {
      toast.error("please enter ammount");
      return false;
    }
    createpayment();
  };

  const createpayment = () => {
    displayRazorpay(
      {
        ammount: ismoney,
        userid: user[0].USER_ID,
      },
      (data) => {
        const userdata = {
          USER_ID: user[0].USER_ID,
          AMMOUNT: ismoney,
          TASK: " Credit Added",
          PAYMENT_ID: data.razorpay_order_id,
        };
        Loading(true);
        axiosInstance.post("user/create-credit", userdata).then((res) => {
          if (res.data.status === 1) {
            toast.success(res.data.message);
            Loading(false);
            setTimeout(() => {
              window.location.reload();
            }, 1500);
          } else {
            toast.error(res.data.message);
            Loading(false);
          }
        });
      }
    );
  };

  return (
    <>
      <div className="background_img">
        <div className="applied_main_job">
          <JobSeekerdashboard />
          {/* {userVerify() ? <SideBar /> : <JobSeekerdashboard />} */}
          <div className="Applied_Job_content">
            <DashboardProfile />
            <div className="Subscription_page_content">
              <>
                <div>
                  <Button
                    onClick={handlepayment}
                    sx={{
                      float: "right",
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
                    Add credit
                  </Button>
                </div>

                <div className="old_plan_card">
                  {/* <CreditTable isTable={isTable} /> */}
                </div>
              </>
            </div>
          </div>
        </div>
      </div>

      <div style={{ outline: "none" }}>
        <Modal
          open={isPopUp}
          onClose={() => setPopUp(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h2 style={{ textAlign: "center" }}> Add Credit</h2>
            <br />
            
            <CssTextField
              onChange={(e) => setismoney(e.target.value)}
              type="number"
              size="small"
              fullWidth
              id="outlined-basic"
              label="Add Credit"
              variant="outlined"
            />
            <br />
            <h3 style={{ textAlign: "center" }}> <u>Bill</u> </h3>
            <div className="bill_container">
              <div className="bill_inside">
                <p>You Have Added credit</p>
                <p>{ismoney}</p>

              </div>
              <Divider sx={{ border: "1px solid grey", width: "100%", display: "flex", margin: "auto", mt: 2 }} />
              <div className="bill_inside">
                <p>You have to Pay total Amount is  </p>
                <p>{ismoney}</p>

              </div>
            </div>
            <Button
              sx={{
                float: "right",
                width: "auto",
                m: 1,
                textTransform: "none",
                color: "#000000",
                backgroundColor: "rgba(247, 112, 29, 0.39)",
                "&:hover": {
                  backgroundColor: "rgba(247, 112, 29, 0.39)",
                },
              }}
              variant="contained"
              onClick={makepayment}
            >
              Pay
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  );
}
