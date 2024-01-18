import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ConsultancyFirm from "../screens/Employer/ConsultancyFirm/ConsultancyFirm";
import EmployerHiringTab from "../screens/Employer/EmployeeHiringTab/EmployerHiringTab";
import EmployeeSubscription from "../screens/Employer/EmployeeSubscription/EmployeeSubscription";
import EmployerHome from "../screens/Employer/EmployerHome/EmployerHome";
import OwnCompany from "../screens/Employer/OwnCompany/OwnCompany";
import ViewJob from "../screens/Employer/ViewJob/ViewJob";
import AccessFromDB from "../screens/Employer/EmployeeDashboard/AccessFromDB";
import Activitybook from "../screens/Employer/EmployeeDashboard/Activitybook";
import ChooseTemplate from "../screens/Employer/Choose Template/ChooseTemplate";
import LogHistory from "../screens/Employer/LogHistory/LogHistory";
import WhatsappMessage from "../screens/Employer/WhatsappMsg/WhatsappMessage";
import MailMessage from "../screens/Employer/MailMsg/MailMessage";
import CreateJobPost from "../screens/Employer/EmployeeDashboard/CreateJobPost";
import Freelancing from "../screens/Employer/Freelancing/Freelancing";
import AllJobs from "../screens/Employer/AllJobs/AllJobs";
import JobDescriptionContent from "../components/Employer/JobDescription/JobDescriptionContent";
import { ReferalPage } from "../screens/jobseeker/JobseekerDashboard/ReferalPage";
import ScreeningQuestion from "../screens/Employer/ScreeningQuestion/ScreeningQuestion";
import BlogsAndActivity from "../screens/Employer/EmployeeDashboard/BlogsAndActivity";
import ManageEmployerProfile from "../screens/Employer/EmployeeDashboard/ManageEmployerProfile";
import EmployerTour1 from "../screens/Employer/EmployerTour/EmployerTour1";
import OrderSummery from "../screens/Employer/FlipingCardPage/OrderSummery";
import SubscriptionPage from "../screens/jobseeker/JobseekerDashboard/SubscriptionPage";
import SubscriptionDetailPage from "../screens/Employer/EmployeeSubscription/SubscriptionDetailPage";
import BlogViewPage from "../screens/Employer/EmployeeDashboard/BlogViewPage";
import AllNotification from "../screens/Employer/notification/AllNotification";
import { CircularLoding, GetCredit, GetNotification, getsubscribation } from "../redux/action/AuthAction";
import { useDispatch } from "react-redux";
import EditpaymentPricing from "../screens/Employer/EditPricing/EditpaymentPricing";
import AddCredit from "../screens/jobseeker/JobseekerDashboard/AddCredit";
import Freelance from "../screens/Employer/ProjectFreelancing/Freelance";
import AppliedFreelancer from "../screens/Employer/ProjectFreelancing/AppliedFreelancer";
import { get_freelancing } from "../redux/action/EmployerAction";

import { FlipingCardPage } from "../screens/Employer/FlipingCardPage/FlipingCardPage";


const EmployerNavigation = () => {

  const dispatch = useDispatch()


  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  };

  React.useEffect(() => {
    dispatch(getsubscribation(Loading));
    dispatch(GetCredit());
    dispatch(GetNotification());
    dispatch(get_freelancing());
  });

  

  return (
    <>
      <Routes>
        <Route exact path="/employerhome" element={<EmployerHome />} />
        <Route
          exact
          path="/employeesubscription"
          element={<EmployeeSubscription />}
        />
        <Route exact path="/create-post" element={<EmployerHiringTab />} />
        <Route exact path="/ViewJob" element={<ViewJob />} />
        <Route exact path="/createjobpost" element={<CreateJobPost />} />
        <Route exact path="/acessfromdb" element={<AccessFromDB />} />
        <Route exact path="/activitybook" element={<Activitybook />} />
        <Route exact path="/mailmessage" element={<MailMessage />} />
        <Route exact path="/freelancing" element={<Freelancing />} />
        <Route exact path="/OwnCompany" element={<OwnCompany />} />
        <Route exact path="/consultancyfirm" element={<ConsultancyFirm />} />
        <Route exact path="/whatsappmessage" element={<WhatsappMessage />} />
        <Route exact path="/choosetemplate" element={<ChooseTemplate />} />
        <Route exact path="/loghistory" element={<LogHistory />} />
        <Route exact path="/AllJobs" element={<AllJobs />} />
        <Route exact path="/referpage" element={<ReferalPage />} />
        <Route exact path="/blogs" element={<BlogsAndActivity />} />
        <Route exact path="/read-blogs/:BLOGID" element={<BlogViewPage />} />
        <Route exact path="/employertour" element={<EmployerTour1 />} />
        <Route exact path="/revieworder" element={<OrderSummery />} />
        <Route exact path="/subscriptiondetails" element={<SubscriptionDetailPage />} />
        <Route exact path="/Notification" element={<AllNotification />} />
        <Route
          exact
          path="/manageemployerprofile"
          element={<ManageEmployerProfile />}
        />
        <Route
          exact
          path="/jobdescription"
          element={<JobDescriptionContent />}
        />
        <Route
          exact
          path="/screeningquestion"
          element={<ScreeningQuestion />}
        />

        <Route
          exact
          path="/updatepayment"
          element={<EditpaymentPricing />}
        />
        <Route exact path='/credit-and-payments' element={<AddCredit />} />
        <Route exact path='/freelance' element={<Freelance />} />
        <Route exact path='/appliedfreelancer' element={<AppliedFreelancer />} />
        <Route exact path="/employer-subscribation-plan/:TYPE/:USER_ID" element={<FlipingCardPage />} />

      </Routes>
    </>
  );
};

export default EmployerNavigation;
