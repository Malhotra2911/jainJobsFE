import {
  UPDATE_PROFILE,
  GET_ALLPOST,
  GET_APPLIEDJOB,
  GET_FREELANCEING,
} from "../constants/action";

const initialState = {
  allpost: [],
  appliedpost: [],
  freelancejob: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
      };
    case GET_ALLPOST:
      return {
        ...state,
        allpost: action.payload,
      };
    case GET_APPLIEDJOB:
      return {
        ...state,
        appliedpost: action.payload,
      };

    case GET_FREELANCEING:
      return {
        ...state,
        freelancejob: action.payload,
      };

    default:
      return state;
  }
}
