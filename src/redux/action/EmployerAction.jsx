import axiosInstance from "../../utils/axiosInstance";
import { toast } from "react-toastify";
import {
  ACTIVITY_TABLE,
  APPLIED_USER_DATA,
  GET_AVILABLEJOB,
  GET_FREELANCEING,
  GET_MYCREATED_POST,
  GET_SAVEDJOB,
  TEMPLATE_QUESITIONS,
} from "../constants/action";
import Swal from "sweetalert2";

export const mycreatedpost = (CircularLoding) => (dispatch) => {
  CircularLoding(true);
  axiosInstance.get("employer/getcreatedjob").then((result) => {
    if (result.data.status === 1) {
      dispatch({
        type: GET_MYCREATED_POST,
        payload: result.data.data,
      });
      CircularLoding(false);
    }

    if (result.data.status === 0) {
      toast.error(result.data.message);
      CircularLoding(false);
    }
  });
};

export const Get_AvilableJob = (CircularLoding) => (dispatch) => {
  axiosInstance.get("employer/availableJobs").then((result) => {
    CircularLoding(true);
    if (result.data.status === 1) {
      dispatch({
        type: GET_AVILABLEJOB,
        payload: result.data.data,
      });
      CircularLoding(false);
    }

    if (result.data.status === 0) {
      toast.error(result.data.message);
      CircularLoding(false);
    }
  });
};

export const get_savedjobs = (CircularLoding, respond) => (dispatch) => {
  axiosInstance.get("employer/save-job").then((result) => {
    CircularLoding(true);
    respond(result);
    if (result.data.status === 1) {
      dispatch({
        type: GET_SAVEDJOB,
        payload: result.data.data,
      });
      CircularLoding(false);
    }

    if (result.data.status === 0) {
      toast.error(result.data.message);
      CircularLoding(false);
    }
  });
};

export const get_Activity_table = (CircularLoding) => (dispatch) => {
  axiosInstance.get("employer/activitybook").then((result) => {
    CircularLoding(true);
    if (result.data.status === 1) {
      dispatch({
        type: ACTIVITY_TABLE,
        payload: result.data.data,
      });
      CircularLoding(false);
    }

    if (result.data.status === 0) {
      toast.error(result.data.message);
      CircularLoding(false);
    }
  });
};

export const getTemplateQuesitions = (CircularLoding) => (dispatch) => {
  axiosInstance.get("employer/getTemplateQuesitions").then((result) => {
    CircularLoding(true);
    if (result.data.status === 1) {
      dispatch({
        type: TEMPLATE_QUESITIONS,
        payload: result.data.data,
      });
      CircularLoding(false);
    }

    if (result.data.status === 0) {
      toast.error(result.data.message);
      CircularLoding(false);
    }
  });
};

export const Get_applieduserdata = (CircularLoding) => (dispatch) => {
  axiosInstance.get("employer/getAppliedJobs").then((result) => {
    CircularLoding(true);
    if (result.data.status === 1) {
      dispatch({
        type: APPLIED_USER_DATA,
        payload: result.data.data,
      });
      CircularLoding(false);
    }

    if (result.data.status === 0) {
      toast.error(result.data.message);
      CircularLoding(false);
    }
  });
};

export const create_Own_Plan =
  (userId, user_name, name, web, linked, email, count, age) => (dispatch) => {
    const bodydata = {
      USER_ID: userId,
      USER_NAME: user_name,
      C_NAME: name,
      C_WEBSITE: web,
      C_LINKEDIN: linked,
      C_EMAIL: email,
      POST_DURATION: age,
      HIRING_COUNT: count,
    };
    axiosInstance.post("employer/createmyownplan", bodydata).then((result) => {
      if (result.data.status === 1) {
        toast.success("Your request is Submitted");
      }

      if (result.data.status === 0) {
        toast.error(result.data.message);
      }
    });
  };

export const create_Blog = (userId, heading, desc, file) => (dispatch) => {
  const bodydata = {
    USER_ID: userId,
    HEADING: heading,
    DESCRIPTION: desc,
    FILE: file,
  };
  axiosInstance.post("admin/blogpost", bodydata).then((result) => {
    if (result.data.status === 1) {
      toast.success("Your request is Submitted");
    }

    if (result.data.status === 0) {
      toast.error(result.data.message);
    }
  });
};

export const createFreelancing =
  (
    image,
    creatorname,
    companyname,
    companyweb,
    filedesc,
    textdesc,
    isminbit,
    isreqfor
  ) =>
  (dispatch) => {
    const fromdata = new FormData();
    fromdata.append("COMPANY_IMAGE", image);
    fromdata.append("CREATER_NAME", creatorname);
    fromdata.append("COMPANY_NAME", companyname);
    fromdata.append("COMPANY_WEBSITE", companyweb);
    fromdata.append("FILE_DESCRIPTION", filedesc);
    fromdata.append("TEXT_DESCRIPTION", textdesc);
    fromdata.append("MIN_BATAMT", isminbit);
    fromdata.append("REQTYPE", isreqfor);

    axiosInstance.post("employer/create_freelance", fromdata).then((result) => {
      if (result.data.status === 1) {
        toast.success("Your request is Submitted");
        setTimeout(() => {
          window.location.reload();
        }, 1700);
      }

      if (result.data.status === 0) {
        toast.error(result.data.message);
      }
    });
  };

export const updateFreelancing =
  (
    image,
    creatorname,
    companyname,
    companyweb,
    filedesc,
    textdesc,
    isminbit,
    isreqfor,
    isupdateid
  ) =>
  (dispatch) => {
    const fromdata = new FormData();
    fromdata.append("FREELANCE_JOB_ID", isupdateid);
    fromdata.append("COMPANY_IMAGE", image);
    fromdata.append("CREATER_NAME", creatorname);
    fromdata.append("COMPANY_NAME", companyname);
    fromdata.append("COMPANY_WEBSITE", companyweb);
    fromdata.append("FILE_DESCRIPTION", filedesc);
    fromdata.append("TEXT_DESCRIPTION", textdesc);
    fromdata.append("MIN_BATAMT", isminbit);
    fromdata.append("REQTYPE", isreqfor);

    axiosInstance.put("employer/update_freelance", fromdata).then((result) => {
      if (result.data.status === 1) {
        setTimeout(() => {
          window.location.reload();
        }, 1700);
      }

      if (result.data.status === 0) {
        toast.error(result.data.message);
      }
    });
  };

export const get_freelancing = () => (dispatch) => {
  axiosInstance.get("employer/get-freelancejob").then((result) => {
    if (result.data.status === 1) {
      dispatch({
        type: GET_FREELANCEING,
        payload: result.data.data,
      });
    }

    if (result.data.status === 0) {
      toast.error(result.data.message);
    }
  });
};

export const deleteFreelance = (userdata) => (dispatch) => {
  axiosInstance
    .post("employer/delete-freelancejob", userdata)
    .then((result) => {
      if (result.data.status === 1) {
        window.location.reload();
      }

      if (result.data.status === 0) {
        toast.error(result.data.message);
      }
    });
};
