import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CircularLoding } from '../../../redux/action/AuthAction';
import { mycreatedpost } from '../../../redux/action/EmployerAction';
import JobNotPosted from './JobNotPosted';
import JobPosted from './JobPosted';


const AllJobs = () => {
    const postcheck = useSelector(state => state.EmployerReducer.mycreatedpost)
    const dispatch = useDispatch();
    const Loading = (lyd) => {
        dispatch(CircularLoding(lyd));
    }


    React.useState(() => {
        dispatch(mycreatedpost(Loading))
    }, [postcheck])

    
    return (
        <>
         {/* <JobPosted />         */}
            {
                postcheck && postcheck.length !== 0 ? <JobPosted /> : <JobNotPosted />
            }
        </>
    )
}

export default AllJobs