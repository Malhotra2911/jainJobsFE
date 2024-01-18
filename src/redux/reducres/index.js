import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CommonReducer from './CommonReducer';
import EmployerReducer from './EmployerReducer';
import JobseekerReducer from './jobSeekerReducer';

export default combineReducers({
    AuthReducer:AuthReducer,
    EmployerReducer:EmployerReducer,
    JobseekerReducer:JobseekerReducer,
    CommonReducer:CommonReducer,
    // MainReducer:MainReducer 

});