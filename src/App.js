import React from 'react';
import "./App.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RootnNavigation from './navigation';
import CircularLoading from './components/Loading/CircularLoading';
import { useDispatch } from 'react-redux';
import { CircularLoding, getscope } from './redux/action/AuthAction';
import { getBlogPosts, getcategorytype, getcities, getindustarytype } from './redux/action/CommonAction';


const App = () => {

  const dispatch = useDispatch();

  const Loading = (lyd) => {
    dispatch(CircularLoding(lyd));
  }

  React.useEffect(() => {
    dispatch(getscope(Loading));
    dispatch(getindustarytype(Loading));
    dispatch(getcategorytype(Loading));
    dispatch(getcities(Loading));
    dispatch(getBlogPosts(Loading));
  }, [])



  return (
    <div>
      <CircularLoading />
      <RootnNavigation />
      <ToastContainer />
    </div>
  )
}

export default App
