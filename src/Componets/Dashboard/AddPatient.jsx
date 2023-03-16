import React, { useState, useEffect } from 'react'
import Header from './Header'
import RightSideBar from './RightSideBar'
import Sidebar from './Sidebar'
import axios from 'axios'
const AddPatient = () => {
  const [AddPatientData, SetAddPatientData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    date: '',
    age: '',
    gender: '',
    email: '',
    description: '',
    occupation: ''
  })
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    console.log(setFile(event.target.files[0]));
  };

  const From_Data_Submit = () => {

    const formData = new FormData()
    const SetStatus0And1Format = window.localStorage.getItem("count");
    formData.append("add", "data")
    formData.append('firstname', AddPatientData.firstname)
    formData.append('lastname', AddPatientData.lastname)
    formData.append('phone', AddPatientData.phone)
    formData.append('date', AddPatientData.date)
    formData.append('age', AddPatientData.age)
    formData.append('gender', AddPatientData.gender)
    formData.append('email', AddPatientData.email)
    formData.append('address', AddPatientData.address)
    formData.append('img', file)
    formData.append('description', AddPatientData.description)
    formData.append('occupation', AddPatientData.occupation)
    formData.append("status", SetStatus0And1Format)

    formData.append("uid", window.localStorage.getItem("uid"))

    axios.post('http://localhost/work/hospital_be/add-patient.php', formData)
      .then(function (response) {
        console.log(response);
        window.location.reload();
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
    SetAddPatientData({ ...AddPatientData, [targetName]: targetValue })
  }
  //  ------------------ This is for get today's date -----------------------.
  // console.log(new Date().toISOString().split("T")[0]);         
  const ApprovePatients = () => {
    if (parseInt(window.localStorage.getItem("count")) >= 1) {
      return
    }
    window.localStorage.setItem("count", 1)
    document.getElementById("count").innerHTML = 1
  }

  const PendingPatients = () => {
    if (parseInt(window.localStorage.getItem("count")) <= 0) {
      return
    }
    window.localStorage.setItem("count", 0)
    document.getElementById("count").innerHTML = 0
  }
  useEffect(() => {
    window.localStorage.setItem("count", 0)
    document.getElementById("count").innerHTML = 0
  }, [])
  return (
    <>
      <Header />
      <Sidebar />
      <RightSideBar />
      <section className="content">
        <div className="block-header">
          <div className="row">
            <div className="col-lg-7 col-md-5 col-sm-12">
              <h2>Add Patient
                <small className="text-muted">Welcome to Oreo</small>
              </h2>
            </div>
            <div className="col-lg-5 col-md-7 col-sm-12">
              <ul className="breadcrumb float-md-right">
                <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Oreo</a></li>
                <li className="breadcrumb-item"><a href="javascript:void(0);">Patient</a></li>
                <li className="breadcrumb-item active">Add Patient</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="card">
                <div className="header">
                  <h2><strong>Basic</strong> Information <small>Description text here...</small> </h2>
                  <ul className="header-dropdown">
                    <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                      <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                        <li><a href="javascript:void(0);">Edit</a></li>
                        <li><a href="javascript:void(0);">Delete</a></li>
                        <li><a href="javascript:void(0);">Report</a></li>
                      </ul>
                    </li>
                    <li className="remove">
                      <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                    </li>
                  </ul>
                </div>
                <div className="body">
                  <form action="" method='post' id='form-admin'>
                    <div className="row clearfix">
                      <div className="col-sm-4">
                        <div className="form-group">
                          <input type="text" className="form-control" name='firstname' onChange={Form_Fetch_Data} placeholder="First Name" />
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <input type="text" className="form-control" name='lastname' onChange={Form_Fetch_Data} placeholder="Last Name" />
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group">
                          <input type="text" className="form-control" name='phone' onChange={Form_Fetch_Data} placeholder="Phone No." />
                        </div>
                      </div>
                    </div>
                    <div className="row clearfix">
                      <div className="col-sm-3">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="zmdi zmdi-calendar" />
                          </span>
                          <input type="date" min={new Date().toISOString().split("T")[0]} className="form-control" name='date' onChange={Form_Fetch_Data} placeholder="Enter date" />
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="form-group">
                          <input type="text" className="form-control" name='age' onChange={Form_Fetch_Data} placeholder="Age" />
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <select onChange={Form_Fetch_Data} name='gender' className="form-control show-tick">
                          <option>- Gender -</option>
                          <option value='male'>Male</option>
                          <option value='female'>Female</option>
                        </select>
                      </div>
                      <div className="col-sm-3">
                        <div className="form-group">
                          <input type="text" className="form-control" name='email' onChange={Form_Fetch_Data} placeholder="Enter Your Email" />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input type="text" className="form-control" name='occupation' onChange={Form_Fetch_Data} placeholder="Occupation" />
                      </div>
                    </div>
                    <div className="row clearfix">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <textarea rows={4} className="form-control no-resize" name='address' onChange={Form_Fetch_Data} placeholder="Please add your address..." defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <form action="https://thememakker.com/" id="frmFileUpload" className="dropzone" method="post" encType="multipart/form-data">
                          <div className="dz-message">
                            <div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>
                            <h3>Drop files here or click to upload.</h3>
                            <em>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</em> </div>
                          <div className="fallback">
                            <input name="img" onChange={handleFileChange} type="file" multiple />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="row clearfix">

                      <div className="col-sm-12">
                        <div className="form-group">
                          <textarea rows={4} onChange={Form_Fetch_Data} name='description' className="form-control no-resize" placeholder="Description" defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-sm-12" style={{ columnGap: "10px" }}>
                        <label htmlFor="status">Status</label>
                        <div className="d-flex" style={{ columnGap: "10px" }}>
                          <input type="button" value="+" className="btn btn-info align-self-center" onClick={ApprovePatients}></input>
                          <h1 className="fw-bolder fs-1 m-0" id="count"></h1>
                          <input type="button" value="-" className="btn btn-info align-self-center" onClick={PendingPatients}></input>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <button type="button" onClick={From_Data_Submit} className="btn btn-primary btn-round">Submit</button>
                        <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default AddPatient;
