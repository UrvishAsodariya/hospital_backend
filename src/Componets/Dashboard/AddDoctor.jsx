import React, { useEffect, useState } from 'react'
import Header from './Header'
import RightSideBar from './RightSideBar'
import Sidebar from './Sidebar'
import axios from 'axios'
const AddDoctor = () => {
    const [AddDoctorData, SetAddDoctorData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        specialty: '',
        phone: '',
        email: '',
        web_url: '',
        description: '',
        address:''
    })

    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        console.log(setFile(event.target.files[0]));

    };
    const From_Data_Submit = () => {
        const formData = new FormData()
        formData.append("add","data")
        formData.append('firstName', AddDoctorData.firstName)
        formData.append('lastName', AddDoctorData.lastName)
        formData.append('dob', AddDoctorData.dob)
        formData.append('gender', AddDoctorData.gender)
        formData.append('specialty', AddDoctorData.specialty)
        formData.append('phone', AddDoctorData.phone)
        formData.append('email', AddDoctorData.email)
        formData.append('web_url', AddDoctorData.web_url)
        formData.append('img', file)
        formData.append('address',AddDoctorData.address)
        // console.log(formData.append('img', file));
        formData.append('description', AddDoctorData.description)

        formData.append("uid", window.localStorage.getItem("uid"))
        axios.post('http://localhost/work/hospital_be/add-doctor.php', formData)
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
        console.log(targetName, 'name')
        console.log(targetValue, 'value')
        SetAddDoctorData({ ...AddDoctorData, [targetName]: targetValue })
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
                            <h2>Add Doctors
                                <small className="text-muted">Welcome to Oreo</small>
                            </h2>
                        </div>
                        <div className="col-lg-5 col-md-7 col-sm-12">
                            <button className="btn btn-white btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
                                <i className="zmdi zmdi-plus" />
                            </button>
                            <ul className="breadcrumb float-md-right">
                                <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Oreo</a></li>
                                <li className="breadcrumb-item"><a href="javascript:void(0);">Doctors</a></li>
                                <li className="breadcrumb-item active">Add Doctors</li>
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
                                        <li className="remove">
                                            <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">
                                    <form action="" method='post' id='form-admin'>
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
                                                <input type="text" className="form-control" name='dob' onChange={Form_Fetch_Data} placeholder="Date of Birth" />

                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <select onChange={Form_Fetch_Data} name='gender' className="form-control show-tick">
                                                    <option disabled selected>- Gender -</option>
                                                    <option value='Male'>Male</option>
                                                    <option value='Female'>Female</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                <input type="text" className="form-control" name='specialty' onChange={Form_Fetch_Data} placeholder="Speciality" />
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                <input type="text" className="form-control" name='phone' onChange={Form_Fetch_Data} placeholder="Phone" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                <input type="text" className="form-control" name='email' onChange={Form_Fetch_Data} placeholder="Enter Your Email" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                <input type="text" className="form-control" name='web_url' onChange={Form_Fetch_Data} placeholder="Website URL" />
                                                </div>
                                            </div>
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
                                                        <input name="file" id='img' onChange={handleFileChange} type="file" multiple />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <textarea rows={4} className="form-control no-resize" name='description' onChange={Form_Fetch_Data} placeholder="Please type what you want..." defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <input type="button" onClick={From_Data_Submit} className="btn btn-primary btn-round" value='Submit' />
                                                <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row clearfix">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="header">
                                    <h2><strong>Doctor's</strong> Account Information <small>Description text here...</small> </h2>
                                    <ul className="header-dropdown">
                                        <li className="remove">
                                            <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">
                                    <div className="row clearfix">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="User Name" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Password" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Confirm Password" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <button type="submit" className="btn btn-primary btn-round">Submit</button>
                                            <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="row clearfix">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="header">
                                    <h2><strong>Doctor</strong> Social Media Info <small>Description text here...</small> </h2>
                                    <ul className="header-dropdown">
                                        <li className="remove">
                                            <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">
                                    <div className="row clearfix">
                                        <div className="col-sm-6">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="zmdi zmdi-facebook" /></span>
                                                <input type="text" className="form-control" placeholder="Facebook" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="zmdi zmdi-twitter" /></span>
                                                <input type="text" className="form-control" placeholder="Twitter" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="zmdi zmdi-google-plus" /></span>
                                                <input type="text" className="form-control" placeholder="Google Plus" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="zmdi zmdi-linkedin" /></span>
                                                <input type="text" className="form-control" placeholder="LinkedIN" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="zmdi zmdi-behance" /></span>
                                                <input type="text" className="form-control" placeholder="Behance" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="zmdi zmdi-dribbble" /></span>
                                                <input type="text" className="form-control" placeholder="dribbble" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <p> <b>With Search Bar</b> </p>
                                            <select className="form-control z-index show-tick" data-live-search="true">
                                                <option>Hot Dog, Fries and a Soda</option>
                                                <option>Burger, Shake and a Smile</option>
                                                <option>Sugar, Spice and all things nice</option>
                                            </select>
                                            <button type="submit" className="btn btn-primary btn-round">Submit</button>
                                            <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>

        </>
    )
}

export default AddDoctor
