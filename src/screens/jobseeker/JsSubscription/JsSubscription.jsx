import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import "../../../css/jobseeker/JsSubscription.css";
import { useNavigate, useParams } from "react-router-dom";
import { displayRazorpay } from "../../../RazorPay/RazorPay";
import { useDispatch } from "react-redux";
import { makesubscribation } from "../../../redux/action/JobSeekerAction";
import { CircularLoding } from "../../../redux/action/AuthAction";
import Swal from 'sweetalert2'

export default function JsSubscription() {
  let { TYPE, USER_ID } = useParams();

  const navigate = useNavigate()


  const dispatch = useDispatch();

  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  }


  function handlepayment(month, price, TYPE_OF_PLAN, SUB_TYPE_OF_PLAN) {
    var userdata = {};
    displayRazorpay({
      ammount: price,
      userid: USER_ID,
    }, (data) => {
      const userdata = {
        USER_ID: USER_ID,
        AMMOUNT: price,
        PAYMENT_ID: data.razorpay_order_id,
        SUB_PLAN: month,
        LENGTH_OF_PLAN: parseInt(month) * 30,
        TYPE_OF_PLAN: TYPE_OF_PLAN,
        SUB_TYPE_OF_PLAN: SUB_TYPE_OF_PLAN,
      }
      dispatch(makesubscribation(userdata, Loading, (res) => {
        if (res.data.status === 1) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(() => {
            if (parseInt(TYPE) === 1) {
              navigate('/Signuplogin', { replace: true });
            }
            if (parseInt(TYPE) === 2) {
              navigate('/availablejobs', { replace: true });
            }
            window.location.reload()
          }, 1500)

        }
      }));
    });
  }

  return (
    <div>
      <div className="plan-container1">
        <div className="plan-child">
          <div className="card-container-plan">
            <div className="subscriptioncard1">
              <div className="frontcard_content">
                <div className="inputfront">
                  <img src="employer/tele.png" alt="" />
                  <h2>Basic Plan</h2>
                </div>

                <div className="basicplan_btns">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#F7701D",
                      "&:hover": { backgroundColor: "#F7701D" },
                    }}
                    onClick={() => handlepayment(1, 300, 21, 0)}
                  >
                    1 Month/₹ 300
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#F7701D",
                      "&:hover": { backgroundColor: "#F7701D" },
                    }}
                    onClick={() => handlepayment(2, 500, 21, 0)}
                  >
                    3 Month/₹ 500
                  </Button>
                </div>
              </div>
              <div className="info">
                <div className="backcontents">
                  <ul className="uls_js">
                    <li>Apply to any jobs within a month</li>
                    <li>Access a General Evalution Test </li>
                    <li>Dasboard Access- A Consolidated Workplace</li>
                    <li>Track Referrals </li>
                  </ul>
                </div>
                <div className="basicplan_btns">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#F7701D",
                      "&:hover": { backgroundColor: "#F7701D" },
                    }}
                    onClick={() => handlepayment(1, 300, 21, 0)}
                  >
                    1 Month/₹ 300
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#F7701D",
                      "&:hover": { backgroundColor: "#F7701D" },
                    }}
                    onClick={() => handlepayment(2, 500, 21, 0)}
                  >
                    3 Month/₹ 500
                  </Button>
                </div>
                {/* <div className="back_btn">
                  <button className="btn_buynowB" >Buy Now</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="plan-child">
          <div className="card-container-plan">
            <div className="subscriptioncard1">
              <div className="frontcard_content">
                <div className="inputfront">
                  <img src="employer/tele.png" alt="" />

                  <h2>Premium Plan</h2>
                </div>

                <div className="basicplan_btns">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#F7701D",
                      "&:hover": { backgroundColor: "#F7701D" },
                    }}
                    onClick={() => handlepayment(1, 300, 22, 0)}
                  >
                    1 Month/₹ 300
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#F7701D",
                      "&:hover": { backgroundColor: "#F7701D" },
                    }}
                    onClick={() => handlepayment(2, 500, 22, 0)}
                  >
                    3 Month/₹ 500
                  </Button>
                </div>
                {/* <div className="front_btn">
                  <button className="btn_buynowF">Buy Now</button>
                </div> */}
              </div>

              <div className="info">
                <div className="backcontents">
                  <ul className="uls_js">
                    <li>
                      Apply to any job openings Improved Searches and Ranking
                    </li>
                    <li>
                      Track Application Status
                      Higher credit points on activities(redeemable)
                    </li>
                    <li>Get FINDMYNEXT Recommendations visible to Employers</li>
                    <li>Access to Exclusive/Priority openings</li>
                    <li>Follow your hiring managers</li>
                    <li>Get all notifications</li>
                    <li>Communication Settings</li>
                    <li>WhatsApp and Email Integration </li>
                    <li>Revamped Dashboard Access</li>
                    <li>Access to CV and Cover Letter Services</li>
                  </ul>
                </div>
                <div className="basicplan_btns">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#F7701D",
                      "&:hover": { backgroundColor: "#F7701D" },
                    }}
                    onClick={() => handlepayment(2, 500, 22, 0)}
                  >
                    1 Month/₹ 300
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#F7701D",
                      "&:hover": { backgroundColor: "#F7701D" },
                    }}
                    onClick={() => handlepayment(2, 500, 22, 0)}
                  >
                    3 Month/₹ 500
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="plan-child">
          <div className="card-container-plan">
            <div className="subscriptioncard1">
              <div className="frontcard_content">
                <div className="inputfront">
                  <img src="employer/tele.png" alt="" />

                  <h2>Job Assurance Plan</h2>
                </div>

                <div className="basicplan_btns">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#F7701D",
                      "&:hover": { backgroundColor: "#F7701D" },
                    }}
                    onClick={() => handlepayment(2, 500, 23, 0)}
                  >
                    1 Month/₹ 699
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#F7701D",
                      "&:hover": { backgroundColor: "#F7701D" },
                    }}
                    onClick={() => handlepayment(2, 500, 24, 0)}
                  >
                    3 Month/₹ 500
                  </Button>
                </div>
                {/* <div className="front_btn">
                  <button className="btn_buynowF">Buy Now</button>
                </div> */}
              </div>

              <div className="info">
                <div className="backcontents">
                  <p className="backcontent_para">
                    This Package includes a range of services to help you
                    quickly land job and improves your higher chances of being
                    shortlisted
                  </p>
                  <ul className="uls_js">
                    <li>Dedicated coach</li>
                    <li>Career counselling </li>
                    <li>Communication and strategy building</li>
                    <li>Multiple level Interview Prepation </li>
                    <li>Professional CV and Cover Letter building sessions </li>
                    <li>Industry Expert Access for right guidance </li>
                  </ul>
                </div>

                <div className="basicplan_btns">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#F7701D",
                      "&:hover": { backgroundColor: "#F7701D" },
                    }}
                    onClick={() => handlepayment(2, 500, 23, 0)}
                  >
                    1 Month/₹ 699
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#F7701D",
                      "&:hover": { backgroundColor: "#F7701D" },
                    }}
                    onClick={() => handlepayment(2, 500, 24, 0)}
                  >
                    3 Month/₹ 500
                  </Button>
                </div>

                {/* <div className="back_btn">
                  <button className="btn_buynowB">Buy Now</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
