import axiosInstance from "../../utils/axiosInstance";
import { toast } from "react-toastify";
import {
  AUTH_LOGIN,
  COMPLETE_PROFILE,
  GET_CREDIT,
  GET_NOTIFICATION,
  GET_SCOPE,
  GET_SUBSCRIBATION,
  GET_USER,
  LOADING,
} from "../constants/action";
import CryptoJS from "crypto-js";
import { EncryptionKey } from "../../config/Config";
import jwt_decode from "jwt-decode";

export const CircularLoding = (data) => (dispatch) => {
  dispatch({
    type: LOADING,
    payload: data,
  });
};

export const SelectuserAction = (data, history) => (dispatch) => {
  const bodydata = {
    USER_ID: data.userid,
    USER_ROLE: data.usertype,
  };

  axiosInstance
    .post("user/userRole", bodydata)
    .then((result) => {
      if (result.data.status === 1) {
        toast.success(result.data.message);
        if (data.usertype === 1) {
          history('/Signuplogin');
        }
        if (data.usertype === 2) {
          history('/Signuplogin');
        }
      }
      if (result.data.status === 0) {
        toast.error(result.data.message);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    })
    .catch((err) => {
      toast.error("somthing went wrong!!");
    });

  console.log(data);
};


export const getscope = (loading) => (dispatch) => {
  loading(true);
  axiosInstance
    .get("user/get-Scope")
    .then((result) => {
      if (result.data) {
        loading(false);
        dispatch({
          type: GET_SCOPE,
          payload: result.data,
        });
      }
    })
    .catch((err) => {
      loading(false);
      toast.error("somthing went wrong!!");
    });
};

export const getsubscribation = (loading) => (dispatch) => {
  loading(true);

  axiosInstance
    .get("jobseeker/makesubscribation")
    .then((result) => {
      if (result.data) {
        loading(false);
        dispatch({
          type: GET_SUBSCRIBATION,
          payload: result.data.data[0],
        });
      }
    })
    .catch((err) => {
      loading(false);
      toast.error("somthing went wrong!!");
    });
};

export const signupAction = (crediential, history, Loading) => (dispatch) => {
  const bodydata = {
    EMAIL: crediential.email,
    PASSWORD: crediential.password,
    REFERANCECODE: crediential.referancecode,
    REFERREDUSER: crediential.referreduser,
    USER_ROLE: null,
  };
  Loading(true);
  axiosInstance
    .post("user/register", bodydata)
    .then((result) => {
      Loading(false);
      if (result.data.status === 1) {
        toast.success(result.data.message);
        history(`/RegisterTab/${result.data.data.USER_ID}`);
      }
      if (result.data.status === 0) {
        toast.error(result.data.message);
        setTimeout(() => {
          // window.location.reload()
        }, 1500);
      }
    })
    .catch((err) => {
      toast.error("somthing went wrong!!");
    });
};

export const GooglesignupAction =
  (crediential, history, Loading) => (dispatch) => {
    const bodydata = {
      F_NAME: crediential.fname,
      L_NAME: crediential.lname,
      EMAIL: crediential.email,
      PASSWORD: crediential.password,
      USER_ROLE: null,
    };
    Loading(true);

    axiosInstance
      .post("user/register", bodydata)
      .then((result) => {
        Loading(false);
        if (result.data.status === 1) {
          toast.success(result.data.message);
          const encrypt = `fnm@${result.data.data.USER_ID}`;
          var ciphertext = CryptoJS.AES.encrypt(
            encrypt,
            EncryptionKey
          ).toString();
          history(`/RegisterTab?type=${ciphertext}`, { replace: true });
        }
        if (result.data.status === 0) {
          toast.error(result.data.message);
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        }
      })
      .catch((err) => {
        toast.error("somthing went wrong!!");
      });
  };

export const LoginAction = (crediential, history, Loading) => (dispatch) => {
  Loading(true);
  const bodydata = {
    EMAIL: crediential.email,
    PASSWORD: crediential.password,
  };
  axiosInstance
    .post("user/login", bodydata)
    .then((result) => {
      if (result) {
        console.log(result.data.user);
        Loading(false);
        if (
          result.data.user.userrole === "null" ||
          result.data.user.userrole == null
        ) {
          toast.info("please complete your profile");
          history(`/RegisterTab/${result.data.user.id}`);
        } else {
          sessionStorage.setItem(
            "token",
            JSON.stringify(result.data.tokens.access.token)
          );
          sessionStorage.setItem(
            "usertype",
            JSON.stringify(result.data.tokens.access.token)
          );
          toast.success(`Log -in successfully`);
          history("/");
          window.location.reload();
        }
      }
    })
    .catch((err) => {
      Loading(false);
      toast.error(`incorrect email and password`);
    });
};

export const GetUserAction = () => (dispatch) => {
  axiosInstance.get("user/get-user").then((result) => {
    const user = result.data.data;

    if (result.data.status === 1) {
      dispatch({
        type: GET_USER,
        payload: result.data.data,
      });
      let counter = 0;
      let objelength = Object.keys(user[0]).length;
      Object.entries(user[0]).forEach(([key, value]) => {
        if (
          value === "null" ||
          value === null ||
          value === undefined ||
          value === "" ||
          value === {} ||
          value === [] ||
          value === "undefined"
        ) {
          counter = counter + 1;
        }
      });
      const finalcalculate =
        ((parseInt(objelength) - parseInt(counter)) * 100) /
        parseInt(objelength);

      dispatch({
        type: COMPLETE_PROFILE,
        payload: Math.floor(finalcalculate),
      });
    }
  });
};

export const GetUserByemail = (data, response) => (dispatch) => {
  axiosInstance
    .post("user/getuserbyemail", { EMAIL: data.EMAIL })
    .then((result) => {
      if (result.data) {
        response(result.data);
      }
    });
};

export const GetCredit = (data, response) => (dispatch) => {
  axiosInstance.get("jobseeker/GetCredit").then((res) => {
    try {
      dispatch({
        type: GET_CREDIT,
        payload: res.data === "" ? 0 : res.data.USER_CREDIT,
      });
    } catch {
      console.log("somthing went wrong!");
    }
  });
};

export const GetNotification = (data, response) => (dispatch) => {
  axiosInstance.get("user/get-notifi").then((res) => {
    try {
      dispatch({
        type: GET_NOTIFICATION,
        payload: res.data.data,
      });
    } catch {
      console.log("somthing went wrong!");
    }
  });
};
