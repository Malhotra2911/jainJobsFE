import { GET_BLOG_POST, GET_CATEGORYTYPE, GET_CITIES, GET_INDUSTRYTYPE, GET_PLANS, GET_SINGLE_BLOG_POST, GET_STORY, UPDATE_BLOG_POST } from "../constants/action";

const initialState = {
    industrytype: [],
    categorytype: [],
    cities: [],
    blogposts: [],
    updatepost: [],
    plans: [],
    storys: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_INDUSTRYTYPE:
            return {
                ...state,
                industrytype: action.payload,
            };
        case GET_CATEGORYTYPE:
            return {
                ...state,
                categorytype: action.payload,
            };
        case GET_CITIES:
            return {
                ...state,
                cities: action.payload,
            };
        case GET_BLOG_POST:
            return {
                ...state,
                blogposts: action.payload
            }
        case GET_STORY:
            return {
                ...state,
                storys: action.payload
            }
        case GET_PLANS:
            return {
                ...state,
                plans: action.payload
            }
        case UPDATE_BLOG_POST:
            return {
                ...state,
                updatepost: action.payload
            }

        default:
            return state;
    }
}
