import { TextField } from "@mui/material";
import moment from "moment/moment";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "../../../css/Employer/BoostJob.css";
import { displayRazorpay } from "../../../RazorPay/RazorPay";
import { CircularLoding } from "../../../redux/action/AuthAction";
import axiosInstance from "../../../utils/axiosInstance";
import {CssTextField} from "../../../css/Employer/MaterialUicss/OwnCompany"

export default function BoostJob({ closeboost, JOB_ID, USER_ID }) {
  // console.log(JOB_ID, "JOB_ID");
  // console.log("USER_ID", USER_ID);

  const [isnoofday, setisnoofday] = useState(null);
  const [starting, setstarting] = useState(null);
  const [ismoney, setismoney] = useState(0);


  const dispatch = useDispatch();
  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  }


  const onhandlepayment = () => {
    if (!isnoofday && !starting) {
    } else {
      var new_date = moment(starting, "YYYY-MM-DD").add(
        parseInt(isnoofday),
        "days"
      );
      const expire_date = new_date.format("YYYY-MM-DD");

      displayRazorpay(
        {
          ammount: ismoney,
          userid: USER_ID,
        },
        (data) => {
          const userdata = {
            USER_ID: USER_ID,
            AMMOUNT: ismoney,
            SAVE_JOB_ID: JOB_ID,
            PAYMENT_ID: data.razorpay_order_id,
            DAYS: isnoofday,
            STARTING_DAY:starting ,
            EXPIREING_DAY: expire_date,
          };
          Loading(true)
          axiosInstance.post('employer/BoostJob',userdata).then((res)=>{
            if(res.data.status === 1 ){
              toast.success(res.data.message)
              closeboost(false)
              Loading(false)
            } 
           else {
            toast.error(res.data.message)
            closeboost(false)
            Loading(false)
            }
          })

        }
      );
    }
  };

  return (
    <div>
      <div className="BoostJob">
        <div className="boostjob">
          <div className="close_btn">
            <button onClick={() => closeboost(false)} className="close_btn">X</button>
          </div>

          <h2 style={{ textAlign: "center" }}>Boost Job</h2>
          <br />
          <CssTextField
            id="outlined-warning"
            label="No of day"
            size="small"
            variant="outlined"
            focused
            type="number"
            minRows={0}
            onChange={(e) => {
              setisnoofday(e.target.value);
              setismoney(parseInt(e.target.value) * 20);
            }}
          />
          <br />
          <br />

          <CssTextField
            id="outlined-warning"
            label="Starting-date"
            size="small"
            focused
            variant="outlined"
            type="date"
            onChange={(e) => setstarting(e.target.value)}
          />

          <br />
          <div
            className="Submit"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button onClick={onhandlepayment}>
              Make Payment of {ismoney} Rs.{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
