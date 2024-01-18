import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authnavigation from "./auth.routes";
import EmployerNavigation from "./employer.routes";
import JobseekerNavigation from "./jobseeker.routes";
import MainNavigation from "./Main.routes";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { GetUserAction } from "../redux/action/AuthAction";
import NotFound from "../screens/404/NotFound";

const RootnNavigation = () => {
  
  const [isAuth, setAuth] = React.useState(false);
  const [isToken, setToken] = React.useState();
  const dispatch = useDispatch();

  React.useEffect(() => {
    var mytoken = sessionStorage.getItem("token");
    if (mytoken) {
      let decodedToken = jwt_decode(mytoken);
      setToken(decodedToken);
      setAuth(true);
    }
  }, []);

  React.useEffect(() => {
    if (isToken) {
      dispatch(GetUserAction());
    }
  }, [isToken]);

  return (
    <BrowserRouter>
      <MainNavigation />
      {isAuth ? (
        <>
          {isToken.type === 1 && <EmployerNavigation />}
          {isToken.type === 2 && <JobseekerNavigation />}
        </>
      ) : (
        <Authnavigation />
      )}

      {/* <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </BrowserRouter>
  );
};

export default RootnNavigation;
