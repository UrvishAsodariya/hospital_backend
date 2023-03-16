import React from 'react'
import { useState } from 'react'
import SignUp_Footer from './SignUp_Footer'
import axios from 'axios'
import Dashboard from '../Dashboard'
const Login = () => {
    const [loginData,SetLoginData]= useState({
        email:'',
        password:''
    })
    const [val,setval] = useState([[],false])

    const From_Data_Submit=(e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('email', loginData.email)
        formData.append('password', loginData.password)

        axios.post('http://localhost/work/hospital_be/login.php', loginData)
            .then(function (response) {
                console.log(response);

                if ((response.data.email === loginData.email) && (response.data.password === loginData.password)) {
                    window.localStorage.setItem('id', response.data.id)
                    window.location.href = '/Dashboard'
                    setval([response.data,true])
                }
                else {
                    alert('Please, Check your data...!')
                }
            })
            .catch(function (error) {
                console.log(error)
            })
        }
        
    if(val[1] === true && val[0] !== "Invalid password.....") {
        window.localStorage.setItem("uid", val[0].id)
        return (
            <Dashboard data={""} /> 
        )
    }
    const Form_Fetch_Data = (i) => {
        let targetName, targetValue
        targetName = i.target.name
        targetValue = i.target.value

        SetLoginData({ ...loginData, [targetName]: targetValue })
    }
    return (
        <>
            <section className='theme-cyan authentication sidebar-collapse'>
                <nav className="navbar navbar-expand-lg fixed-top navbar-transparent">
                    <div className="container">
                        <div className="navbar-translate n_logo">
                            <a className="navbar-brand" href=" " title="" target="_blank">Oreo</a>
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
                                    <a className="nav-link" href=" ">Search Result</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" title="Follow us on Twitter" href=" " target="_blank">
                                        <i className="zmdi zmdi-twitter"></i>
                                        <p className="d-lg-none d-xl-none">Twitter</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" title="Like us on Facebook" href=" " target="_blank">
                                        <i className="zmdi zmdi-facebook"></i>
                                        <p className="d-lg-none d-xl-none">Facebook</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" title="Follow us on Instagram" href=" " target="_blank">
                                        <i className="zmdi zmdi-instagram"></i>
                                        <p className="d-lg-none d-xl-none">Instagram</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link btn btn-white btn-round" href="Register">SIGN UP</a>
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
                                <form className="form" onSubmit={From_Data_Submit} action="#">
                                    <div className="header">
                                        <div className="logo-container">
                                            <img src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg" />
                                        </div>
                                        <h5>Log in</h5>
                                    </div>
                                    <div className="content">
                                        <div className="input-group">
                                            <input type="text" className="form-control" name='email' onChange={Form_Fetch_Data} placeholder="Enter User Name" />
                                            <span className="input-group-addon">
                                                <i className="zmdi zmdi-account-circle" />
                                            </span>
                                        </div>
                                        <div className="input-group">
                                            <input type="password" placeholder="Password" name='password' onChange={Form_Fetch_Data} className="form-control" />
                                            <span className="input-group-addon">
                                                <i className="zmdi zmdi-lock" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="footer text-center">
                                        <input type='submit' value='SIGN IN' className="btn btn-primary btn-round btn-block  " />
                                        <h5><a href="forgot-password.html" className="link">Forgot Password?</a></h5>
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

export default Login
