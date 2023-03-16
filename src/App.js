import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from './Componets/Login';
import Register from './Componets/Login/Register'
import Dashboard from './Componets/Dashboard'
import AddDoctor from './Componets/Dashboard/AddDoctor'
import BookAppointment from './Componets/Dashboard/BookAppointment'
import AddPatient from './Componets/Dashboard/AddPatient'
import ShowDoctors from './Componets/Dashboard/ShowDoctors';
import ShowPatients from './Componets/Dashboard/ShowPatients';
import AddBlog from './Componets/Dashboard/AddBlog';
import AddDepartment from './Componets/Dashboard/AddDepartment';
import AllBlog from './Componets/Dashboard/AllBlog';
import AllDepartment from './Componets/Dashboard/AllDepartment';

function App() {
  return (
    <div className="theme-cyan">
      <Routes>
        <Route path='/' element={(window.localStorage.getItem("uid")!==null?<Dashboard data={""}/>:<Login />)}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Dashboard' element={(window.localStorage.getItem("uid")!==null?<Dashboard data={""}/>:<Login />)}/>
        <Route path='/AddDoctor' element={(window.localStorage.getItem("uid")==null?<Login />:<AddDoctor/>)}/>
        <Route path='/BookAppointment' element={(window.localStorage.getItem("uid")==null?<Login />:<BookAppointment/>)}/>
        <Route path='/AddPatient' element={(window.localStorage.getItem("uid")==null?<Login />:<AddPatient/>)}/>
        <Route path='/ShowDoctors' element={(window.localStorage.getItem("uid")==null?<Login />:<ShowDoctors/>)}/>
        <Route path='/ShowPatients' element={(window.localStorage.getItem("uid")==null?<Login />:<ShowPatients/>)}/>
        <Route path='/AddBlog' element={(window.localStorage.getItem("uid")==null?<Login />:<AddBlog/>)}/>
        <Route path='/AddDepartment' element={(window.localStorage.getItem("uid")==null?<Login />:<AddDepartment/>)}/>
        <Route path='/AllBlog' element={(window.localStorage.getItem("uid")==null?<Login />:<AllBlog/>)}/>
        <Route path='/AllDepartment' element={(window.localStorage.getItem("uid")==null?<Login />:<AllDepartment/>)}/>
      </Routes>
    </div>
  );
}

export default App;
