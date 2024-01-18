import {
  ACTIVITY_TABLE,
  APPLIED_USER_DATA,
  GET_AVILABLEJOB,
  GET_FREELANCEING,
  GET_MYCREATED_POST,
  GET_SAVEDJOB,
  TEMPLATE_QUESITIONS,
  UPDATE_PROFILE,
} from "../constants/action";

const initialState = {
  mycreatedpost: [],
  avilablejobs: [],
  savedjobs: [],
  activitytable: [],
  getTemplateQuesitions: [],
  ApplieduserData: [],
  freelancejob: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MYCREATED_POST:
      return {
        ...state,
        mycreatedpost: action.payload,
      };
    case GET_AVILABLEJOB:
      return {
        ...state,
        avilablejobs: action.payload,
      };
    case GET_SAVEDJOB:
      return {
        ...state,
        savedjobs: action.payload,
      };
    case ACTIVITY_TABLE:
      return {
        ...state,
        activitytable: action.payload,
      };

    case TEMPLATE_QUESITIONS:
      return {
        ...state,
        getTemplateQuesitions: action.payload,
      };

    case APPLIED_USER_DATA:
      return {
        ...state,
        ApplieduserData: action.payload,
      };

    case GET_FREELANCEING:
      return {
        ...state,
        freelancejob: action.payload,
      };

    case UPDATE_PROFILE:
      return {
        ...state,
      };

    default:
      return state;
  }
}
