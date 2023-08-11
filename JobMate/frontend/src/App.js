
import './App.css';
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
import SignIn from './components/Auth/SignIn';
import NavigationBar from './components/Navigation/NavigationBar';
import Home from './components/Home/Home';
import SignUp from './components/Auth/SignUp';
import Search from './components/searchDiv/Search';
import JobPostForm from './components/Forms/JobPostForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { loadUser } from './https';
import { setAuth } from './slice/authSlice';
import SpecificJob from './components/Job/SpecificJob';
import SubmitJobApplication from './components/Job/SubmitJobApplication';
import AppliedJobs from './components/Job/AppliedJobs';
axios.defaults.withCredentials=true

function App() {
  const {isAuth}=useSelector(state=>state.auth)
  const dispatch=useDispatch()
 useEffect(() => {
  async function getloadUser(){
    const {data}=await loadUser();
    dispatch(setAuth(data));
  }
 getloadUser()
 }, []);
  return (
    <>
    <div className='w-[85%] h-[2000px] mx-auto bg-white'>
   
 
    <Router>
    <NavigationBar/>
      <Routes>
        <Route path='/specificJob/:specificJobId' element={<SpecificJob/>}/>
       { isAuth && <Route path='/appliedJobs' element={
          <ProtectedRoute>
            <AppliedJobs/>
            </ProtectedRoute>
        }/>}

        <Route path='/' exact  element={<Home/>}/>
        <Route path='/login' element={
          <GuestRoute>
            <SignIn/>
          </GuestRoute>
        }/>
        {isAuth && <Route path='/submitApplication/:jobId/:companyId' element={
         <ProtectedRoute>
          <SubmitJobApplication/>
         </ProtectedRoute>
        }/>}
        <Route path='/register' element={
        <GuestRoute>
        <SignUp/>
      </GuestRoute>
        }/>
  
      </Routes>
    </Router>
    </div>
    </>
  );
}
function GuestRoute({  children }) {
  const {isAuth}=useSelector((state)=>state.auth)
  //This is the new protected route configuration
  console.log(isAuth)
  if (isAuth) {
    return <Navigate to="/" replace />
  }
  return children
}



function ProtectedRoute({  children }) {
  const {user,isAuth}=useSelector((state)=>state.auth)
  console.log(isAuth)
 
   if(!isAuth){
    return <Navigate replace to='/'/>
  }
  return children
}

export default App;
