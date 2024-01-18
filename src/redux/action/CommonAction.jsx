import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance";
import { GET_BLOG_POST, GET_CATEGORYTYPE, GET_CITIES, GET_INDUSTRYTYPE, GET_PLANS, GET_SINGLE_BLOG_POST, GET_STORY, UPDATE_BLOG_POST } from "../constants/action";

export const getcategorytype = (loading) => dispatch => {
    loading(true);
    axiosInstance.get('user/get-categorytype').then((result) => {
        if (result.data) {
            loading(false)
            dispatch({
                type: GET_CATEGORYTYPE,
                payload: result.data,
            })
        }
    }).catch(err => {
        loading(false);
        toast.error('somthing went wrong!!');
    })
}

export const getindustarytype = (loading) => dispatch => {
    loading(true);
    axiosInstance.get('user/get-industrytype').then((result) => {
        if (result.data) {
            loading(false)
            dispatch({
                type: GET_INDUSTRYTYPE,
                payload: result.data,
            })
        }
    }).catch(err => {
        loading(false);
        toast.error('somthing went wrong!!');

    })
}


export const getcities = (loading) => dispatch => {
    loading(true);
    axiosInstance.get('user/get-cities').then((result) => {
        if (result.data) {
            loading(false)
            dispatch({
                type: GET_CITIES,
                payload: result.data,
            })
        }
    }).catch(err => {
        loading(false);
        toast.error('somthing went wrong!!');

    })
}

export const FeedbackAction = (userId,userRole,name,email,subject,message,history) => dispatch => {
    const bodydata = {
      USER_ID:userId,
      USER_ROLE:userRole,
      NAME: name,
      EMAIL: email,
      SUBJECT: subject,
      MESSAGE: message,
    }
    axiosInstance.post('admin/feedback', bodydata).then((result) => {
        
      if (result.data.status === 1) {
  
        toast.success(result.data.message);
        history(`/createjobpost`, { replace: true });
      }
      if (result.data.status === 0) {
        toast.error(result.data.message);
      }
  
    }).catch(err => {
      toast.error(err);

  
    })
  }

  export const ContactAction = (name,email,message,history) => dispatch => {
    const bodydata = {
      NAME: name,
      EMAIL: email,
      MESSAGE: message,
    }
    axiosInstance.post('user/contact-form', bodydata).then((result) => {
        
      if (result.data.status === 1) {
  
        toast.success(result.data.message);
        history(`/`, { replace: true });
      }
      if (result.data.status === 0) {
        toast.error(result.data.message);
      }
  
    }).catch(err => {
    //   toast.error('somthing went wrong!!');
      toast.error(err);

  
    })
  }

  export const FeedbackHomeAction = (message,history) => dispatch => {
    const bodydata = {
      MESSAGE: message,
    }
    axiosInstance.post('user/feedback', bodydata).then((result) => {
        
      if (result.data.status === 1) {
  
        toast.success(result.data.message);
        history(`/`, { replace: true });
      }
      if (result.data.status === 0) {
        toast.error(result.data.message);
      }
  
    }).catch(err => {
    //   toast.error('somthing went wrong!!');
      toast.error(err);

  
    })
  }

  export const BlogComment = (comment,name,blog_ids,history) => dispatch => {
    const bodydata = {
      COMMENT: comment,
      NAME:name,
      BLOG_ID:blog_ids,
    }
    axiosInstance.post('admin/blogcomment', bodydata).then((result) => {
        
      if (result.data.status === 1) {
  
        toast.success(result.data.message);
        history(`/`, { replace: true });
      }
      if (result.data.status === 0) {
        toast.error(result.data.message);
      }
  
    }).catch(err => {
      toast.error(err);

  
    })
  }

  export const getBlogPosts = () => dispatch => {
    // loading(true);
    axiosInstance.get('admin/blogposts').then((result) => {
        if (result.data) {
            // loading(false)
            dispatch({
                type: GET_BLOG_POST,
                payload: result.data,
            })
        }
    }).catch(err => {
        // loading(false);
        toast.error('somthing went wrong!!');
    })
}

export const getStorys = () => dispatch => {
  // loading(true);
  axiosInstance.get('admin/get-story').then((result) => {
      if (result.data) {
          // loading(false)
          dispatch({
              type: GET_STORY,
              payload: result.data,
          })
      }
  }).catch(err => {
      // loading(false);
      toast.error('somthing went wrong!!');
  })
}


export const updateBlogPosts = (counts,likes,blog_ids) => dispatch => {
  const bodydata = {
    POST_POLL: counts,
    POST_LIKE: likes,
    BLOG_ID:blog_ids,
  }
  // loading(true);
  axiosInstance.put('admin/blogpost-update',bodydata).then((result) => {
      if (result.data) {
          // loading(false)
          dispatch({
              type: UPDATE_BLOG_POST,
              payload: result.data,
          })
      }
      if (result.data.status === 1) {
  
        toast.success(result.data.message);
        // history(`/`, { replace: true });
      }
      if (result.data.status === 0) {
        toast.error(result.data.message);
      }
  }).catch(err => {
      // loading(false);
      // toast.error('somthing went wrong!!');
      console.log(err);
  })
}

export const Get_Plans = () => dispatch => {
  axiosInstance.get('admin/get-plans').then((result) => {
      if (result.data) {
          dispatch({
              type: GET_PLANS,
              payload: result.data,
          })
      }
  }).catch(err => {
      // toast.error('somthing went wrong!!');
  })
}

