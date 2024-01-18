import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import EmployerHome from "../screens/Employer/EmployerHome/EmployerHome";
import Page404 from "../screens/jobseeker/ErrorScreen/Page404";
import Navbar from "../screens/jobseeker/Home/Navbar";
import UserProfileForm from "../screens/jobseeker/JobseekerDashboard/UserProfileForm";
import JsSubscription from "../screens/jobseeker/JsSubscription/JsSubscription";
import PersonalDetail from "../screens/jobseeker/ResumeBuildByOwn/PersonalDetail";
import Template1 from "../screens/jobseeker/Resume/Templates/Template1/Template1";
import Template2 from "../screens/jobseeker/Resume/Templates/Template2/Template2";
import Template3 from "../screens/jobseeker/Resume/Templates/Template3/Template3";
import DashboardTour from "../screens/jobseeker/DashBoardTour/DashBoardTour";
import DashboardTour2 from "../screens/jobseeker/DashBoardTour/DashBoardTour2";
import DashboardTourEnd from "../screens/jobseeker/DashBoardTour/DashBoardTourEnd";
import DashboardTourMiddle from "../screens/jobseeker/DashBoardTour/DashBoardTourMiddle";
import Clock from "../components/JobSeeker/UserDashboardProfile/Clock";
import Great from "../components/Employer/Popups/Great";
import Perfect from "../components/Employer/Popups/Perfect";
import Notify from "../components/Employer/Popups/Notify";
import JuniorEmployer from "../screens/Employer/JuniorEmployer/JuniorEmployer";
import Blogs from "../screens/jobseeker/Blogs/Blogs";

import Answer from "../components/JobSeeker/ApplayQuestions/Questions/Questions";
import ProfileHeader from "../components/ProfileHeader/ProfileHeader";
import DashboardTourmain from "../screens/jobseeker/DashBoardTour/DashboardTourmain";
import Blogcontinue from "../screens/jobseeker/Blogs/Blogcontinue";
import SpecialServiceForm from "../screens/jobseeker/Home/SpecialServiceForm";
import ViewEmployerProfile from "../screens/Employer/EmployeeDashboard/ViewEmployerProfile";
import FaqFreelancer from "../screens/FaqFreelancer/FaqFreelancer";
import FaqTab from "../screens/FaqTb/FaqTab";
import StoryClub from "../screens/jobseeker/StoryClub/StoryClub";
import ApplicantcardMore from "../screens/Employer/EmployeeDashboard/ApplicantcardMore";
import AddTemplate from "../screens/Employer/AddTemplatePopup/AddTemplate";
import ScreeningQn from "../screens/Employer/AddScreeningPopup/ScreeningQn";
import SpecialServiceForm3 from "../screens/jobseeker/Home/SpecialServiceForm3";
import SpecialServiceForm4 from "../screens/jobseeker/Home/SpecialServiceForm4";
import SpecialServiceForm5 from "../screens/jobseeker/Home/SpecialServiceForm5";
import SpecialServiceForm2 from "../screens/jobseeker/Home/SpecialServiceForm2";
import { ReferalPage } from "../screens/jobseeker/JobseekerDashboard/ReferalPage";
import TakeSubscription from "../screens/jobseeker/JobseekerDashboard/TakeSubscription";
import FreelanceHome from "../screens/FreelancerWorld/FreelanceHome";
import FreelanceAdvertise from "../screens/FreelancerWorld/FreelanceAdvertise/FreelanceAdvertise";
import { Audioanswer } from "../components/JobSeeker/ApplayQuestions/AudioAnswer/Audioanswer";
import JobpostFreelance from "../screens/FreelancerWorld/JobPostFreelance/JobpostFreelance";
import EmployeeSubscription from "../screens/Employer/EmployeeSubscription/EmployeeSubscription";
import ReadNotification from "../screens/Employer/notification/ReadNotification";
import { PaymentTemplate } from "../components/Template/PaymentTemplate";


const MainNavigation = () => {
  
  return (
    <Routes>
      <Route exact path="/" element={<Navbar />} />
      <Route exact path="/referpage" element={<ReferalPage />} />
      <Route exact path="/employerhome" element={<EmployerHome />} />
      <Route exact path="/profileheader" element={<ProfileHeader />} />
      <Route exact path="/great" element={<Great />} />
      <Route exact path="/perfect" element={<Perfect />} />
      <Route exact path="/notify" element={<Notify />} />
      <Route exact path="/freelancehome" element={<FreelanceHome />} />
      <Route exact path="/freelancead" element={<FreelanceAdvertise />} />
      <Route exact path="/audio" element={<Audioanswer />} />
      <Route exact path="/freelancejob" element={<JobpostFreelance />} />

      <Route exact path="/clock" element={<Clock />} />
      <Route exact path="/junioremployer" element={<JuniorEmployer />} />
      <Route exact path="/blogposts" element={<Blogs />} />
      <Route exact path="/blogcontinue" element={<Blogcontinue />}>
        <Route exact path=":blog_id" element={<Blogcontinue />} />
      </Route>
      <Route exact path="/specialservice5" element={<SpecialServiceForm5 />} />
      <Route exact path="/specialservice3" element={<SpecialServiceForm3 />} />
      <Route exact path="/specialservice4" element={<SpecialServiceForm4 />} />
      <Route exact path="/specialservice2" element={<SpecialServiceForm2 />} />
      <Route exact path="/specialservice" element={<SpecialServiceForm />} />
      <Route exact path="/faqfreelancer" element={<FaqFreelancer />} />
      <Route exact path="/faqtab" element={<FaqTab />} />
      <Route exact path="/storyclub" element={<StoryClub />} />
      <Route exact path="/" element={<Navbar />} />
      {/* <Route exact path="*" element={<Navbar />} /> */}
      <Route exact path="/employerhome" element={<EmployerHome />} />
      <Route exact path="/error" element={<Page404 />} />

      <Route exact path="/jssubscription" element={<JsSubscription />} />
      <Route exact path="/template1" element={<Template1 />} />
      <Route exact path="/template2" element={<Template2 />} />
      <Route exact path="/template3" element={<Template3 />} />
      <Route exact path="/dashboardtour" element={<DashboardTour />} />
      <Route exact path="/dashboardtour2" element={<DashboardTour2 />} />
      <Route exact path="/dashboardtourend" element={<DashboardTourEnd />} />
      <Route
        exact
        path="/dashboardtourmiddle"
        element={<DashboardTourMiddle />}
      />
      <Route exact path="/dashboardtourmain" element={<DashboardTourmain />} />
      <Route exact path="/applicantmore" element={<ApplicantcardMore />} />
      <Route exact path="/addtemppopup" element={<AddTemplate />} />
      <Route exact path="/addscreeningqnpopup" element={<ScreeningQn />} />
      <Route exact path="/answers" element={<Answer />} />
      <Route exact path="/personaldetails" element={<PersonalDetail />} />
      <Route exact path="/takesubscription" element={<TakeSubscription />} />
      <Route
        exact
        path="/viewemployerprofile"
        element={<ViewEmployerProfile />}
      />

      <Route
          exact
          path="/employeesubscription"
          element={<EmployeeSubscription />}
        />

      <Route
          exact
          path="/ReadNotification/:NOTIFI_ID"
          element={<ReadNotification />}
        />


      <Route
          exact
          path="/payment-sheet"
          element={<PaymentTemplate />}
        />



    </Routes>
  );
};

export default MainNavigation;
