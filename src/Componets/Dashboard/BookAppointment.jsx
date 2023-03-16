import React, { useEffect, useState } from 'react'
import Header from './Header'
import RightSideBar from './RightSideBar'
import Sidebar from './Sidebar'
import axios from 'axios'
const BookAppointment = () => {
  const [BookAppointmentData, SetBookAppointmentData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    service: '',
    date: '',
    email: '',
    phone: '',
    description: ''
  })

  const From_Data_Submit = () => {
    const formData = new FormData()
    formData.append('add', 'blog')
    formData.append('firstName', BookAppointmentData.firstName)
    formData.append('lastName', BookAppointmentData.lastName)
    formData.append('dob', BookAppointmentData.dob)
    formData.append('gender', BookAppointmentData.gender)
    formData.append('service', BookAppointmentData.service)
    formData.append('date', BookAppointmentData.date)
    formData.append('email', BookAppointmentData.email)
    formData.append('phone', BookAppointmentData.phone)
    formData.append('description', BookAppointmentData.description)

    axios.post('http://localhost/work/hospital_be/appointment.php', formData)
      .then(function (response) {
        console.log(response);
        // window.location.reload(  );

      })
      .catch(function (error) {
        console.log(error)
      })
  }
  const Form_Fetch_Data = (i) => {
    let targetName, targetValue
    targetName = i.target.name
    targetValue = i.target.value
    console.log(targetName, "name");
    console.log(targetValue, "value");
    SetBookAppointmentData({ ...BookAppointmentData, [targetName]: targetValue })
  }
  return (
    <>
      <Header />
      <Sidebar />
      <RightSideBar />
      <section className="content">
        <div className="block-header">
          <div className="row">
            <div className="col-lg-7 col-md-5 col-sm-12">
              <h2>Book Appointment
                <small>Welcome to Oreo</small>
              </h2>
            </div>
            <div className="col-lg-5 col-md-7 col-sm-12">
              <ul className="breadcrumb float-md-right">
                <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Oreo</a></li>
                <li className="breadcrumb-item"><a href="javascript:void(0);">Appointment</a></li>
                <li className="breadcrumb-item active">Book Appointment</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="card">
                <div className="header">
                  <h2><strong>Book</strong> Appointment<small>Description text here...</small> </h2>
                  <ul className="header-dropdown">
                    <li className="remove">
                      <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                    </li>
                  </ul>
                </div>
                <div className="body">
                  <div className="row clearfix">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input type="text" className="form-control" name='firstName' onChange={Form_Fetch_Data} placeholder="First Name" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input type="text" className="form-control" name='lastName' onChange={Form_Fetch_Data} placeholder="Last Name" />
                      </div>
                    </div>
                  </div>
                  <div className="row clearfix">
                    <div className="col-sm-3">
                      <div className="form-group">
                        <input type="date" min='1947-01-01' max={new Date().toISOString().split("T")[0]} className="form-control" name='dob' onChange={Form_Fetch_Data} placeholder="Date of Birth" />
                      </div>  
                    </div>
                    <div className="col-sm-3">
                      <select onChange={Form_Fetch_Data} name='gender' className="form-control show-tick">
                        <option>- Gender -</option>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                      </select>
                    </div>
                    <div className="col-sm-3">
                      <select onChange={Form_Fetch_Data} name='service' className="form-control show-tick">
                        <option disabled selected>- Service -</option>
                        <option disabled>Select Service</option>
                        <option value='Dental Checkup'>Dental Checkup</option>
                        <option value='Full Body Checkup'>Full Body Checkup</option>
                        <option value='ENT Checkup'>ENT Checkup</option>
                        <option value='Heart Checkup'>Heart Checkup</option>
                      </select>
                    </div>
                    <div className="col-sm-3">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="zmdi zmdi-calendar" />
                        </span>
                        <input type="datetime-local" onChange={Form_Fetch_Data} name='date' className="form-control datetimepicker" placeholder="Please choose date & time..." />
                      </div>
                    </div>
                  </div>
                  <div className="row clearfix">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <input type="text" className="form-control" name='email' onChange={Form_Fetch_Data} placeholder="Enter Your Email" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <input type="text" className="form-control" name='phone' onChange={Form_Fetch_Data} placeholder="Phone" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <textarea rows={4} className="form-control no-resize" name='description' onChange={Form_Fetch_Data} placeholder="Please type what you want..." defaultValue={""} />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <input type="submit" onClick={From_Data_Submit} className="btn btn-primary btn-round" value='Submit' />
                      <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default BookAppointment
