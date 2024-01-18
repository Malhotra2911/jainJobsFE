import React from "react";
import { Route, Routes } from "react-router-dom";
import JobseekerSubscription from "../screens/jobseeker/JobseekerSubscription/JobseekerSubscription";
import SignupLogin from "../screens/Auth/SignupLogin/SignupLogin";
import RegisterTab from "../screens/Auth/SignupLogin/RegisterTab";
import EmailVerification from "../screens/Auth/ForgotPassword/emailverification/EmailVerification";
import ResetScreen from "../screens/Auth/ForgotPassword/resetscreen/ResetScreen";
import { FlipingCardPage } from "../screens/Employer/FlipingCardPage/FlipingCardPage";

const Authnavigation = () => {
  return (
    <>
      <Routes>
        <Route exact path="/Signuplogin" element={<SignupLogin />} />
        <Route exact path="/RegisterTab/:ID" element={<RegisterTab />} />
        <Route
          exact
          path="/JobseekerSubscription/:TYPE/:USER_ID"
          element={<JobseekerSubscription />}
        />
        <Route
          exact
          path="/employer-subscribation-plan/:TYPE/:USER_ID"
          element={<FlipingCardPage />}
        />
        <Route exact path="/forgotpassword" element={<EmailVerification />} />
        <Route exact path="/resetpassword/:emailId" element={<ResetScreen />} />
      </Routes>
    </>
  );
};

export default Authnavigation;
