import SignUp_Footer from './SignUp_Footer';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
const Register = () => {
  const [UserData, SetUserData] = useState({
    userName: '',
    email: '',
    password: ''
  })
  const RegisterFormData = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('userName', UserData.userName) 
    formData.append('email', UserData.email) 
    formData.append('password', UserData.password)

    axios.post('http://localhost/php/HospitalPanel/Register.php', UserData)
      .then(function (response) {
        console.log(response);
          window.localStorage.setItem('id', response.data.id)
          window.location.href = '/'
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  const Form_Fatch_Data_Store = (i) => {
    let targetName, targetValue
    targetName = i.target.name
    targetValue = i.target.value  
    console.log(targetName,'name')
    console.log(targetValue,'value')
    SetUserData({ ...UserData, [targetName]: targetValue })
    console.log(SetUserData)
  }
  return (
    <>
      <section className='theme-cyan authentication sidebar-collapse'>
        <nav className="navbar navbar-expand-lg fixed-top navbar-transparent">
          <div className="container">
            <div className="navbar-translate n_logo">
              <a className="navbar-brand" href=" " title="">Oreo</a>
              <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <div className="navbar-collapse justify-content-end">
              <ul className="navbar-nav align-items-center">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" >Search Result</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" title="Follow us on Twitter" >
                    <i className="zmdi zmdi-twitter"></i>
                    <p className="d-lg-none d-xl-none">Twitter</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" title="Like us on Facebook" >
                    <i className="zmdi zmdi-facebook"></i>
                    <p className="d-lg-none d-xl-none">Facebook</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" title="Follow us on Instagram" >
                    <i className="zmdi zmdi-instagram"></i>
                    <p className="d-lg-none d-xl-none">Instagram</p>
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-white btn-round" to="/">SIGN IN</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="page-header">
          <div className="page-header-image" style={{ backgroundImage: 'url(../assets/images/login.jpg)' }} />
          <div className="container">
            <div className="col-md-12 content-center">
              <div className="card-plain">
                <form className="form" onSubmit={RegisterFormData} method="POST" action="">
                  <div className="header">
                    <div className="logo-container">
                      <img src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg" />
                    </div>
                    <h5>Sign Up</h5>
                    <span>Register a new membership</span>
                  </div>
                  <div className="content">
                    <div className="input-group">
                      <input type="text" className="form-control" name='userName' placeholder="Enter User Name"  onChange={Form_Fatch_Data_Store} />
                      <span className="input-group-addon">
                        <i className="zmdi zmdi-account-circle" />
                      </span>
                    </div>
                    <div className="input-group">
                      <input type="text" className="form-control" name='email' placeholder="Enter Email" onChange={Form_Fatch_Data_Store} />
                      <span className="input-group-addon">
                        <i className="zmdi zmdi-email" />
                      </span>
                    </div>
                    <div className="input-group">
                      <input type="password" placeholder="Password" name='password' className="form-control" onChange={Form_Fatch_Data_Store} />
                      <span className="input-group-addon">
                        <i className="zmdi zmdi-lock" />
                      </span>
                    </div>
                  </div>
                  <div className="checkbox">
                    <input id="terms" type="checkbox" />
                    <label htmlFor="terms">
                      I read and agree to the <a href=" ">terms of usage</a>
                    </label>
                  </div>
                  <div className="footer text-center">
                    <input type="submit" className="btn btn-primary btn-round btn-block  waves-effect waves-light" value='SIGN UP' />
                    {/* <a href="index.html" className="btn btn-primary btn-round btn-block  waves-effect waves-light">SIGN UP</a> */}
                    <h5><a className="link" href="sign-in.html">You already have a membership?</a></h5>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <SignUp_Footer />
        </div>
      </section>
    </>
  )
}

export default Register
