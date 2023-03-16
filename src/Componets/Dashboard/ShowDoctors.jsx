import React, { useEffect, useState } from 'react'
import Header from './Header'
import RightSideBar from './RightSideBar'
import Sidebar from './Sidebar'
import axios from 'axios'
// import img from 'G:/xampp/htdocs/work/hospital_be/image/2.jpg'
const ShowDoctors = () => {
    const [DoctorGetData, SetDoctorGetData] = useState([]);

    useEffect(() => {
        axios.post('http://localhost/work/hospital_be/add-doctor.php')
            .then(function (res) {
                SetDoctorGetData([...res.data]);
            })
            .catch(function (error) {
                console.log(error)
            })
    })

    return (
        <>
            <Header />
            <Sidebar />
            <RightSideBar />
            <section className="content">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <h2>All Doctors
                                <small>Welcome to Oreo</small>
                            </h2>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12 text-right">
                            <button className="btn btn-white btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
                                <i className="zmdi zmdi-plus" />
                            </button>
                            <ul className="breadcrumb float-md-right">
                                <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Oreo</a></li>
                                <li className="breadcrumb-item"><a href="javascript:void(0);">Doctors</a></li>
                                <li className="breadcrumb-item active">All Doctors</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row clearfix">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="body">
                                    <ul className="nav nav-tabs padding-0">
                                        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#Permanent">Permanent</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Consultant">Consultant</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tab-content m-t-10">
                                <div className="tab-pane active" id="Permanent">
                                    <div className="row clearfix">

                                        {DoctorGetData.map((value) => {
                                            return (
                                            <>
                                                <div className="col-lg-3 col-md-4 col-sm-6">
                                                    <div className="card xl-blue member-card doctor">
                                                        <div className="body">
                                                            <div className="member-thumb">
                                                                <img src={"http://localhost/work/hospital_be/"+value.img} className="img-fluid" alt="profile-image" />
                                                            </div>
                                                            <div className="detail">
                                                                <h4 className="m-b-0">{value.first_name} {value.last_name}</h4>
                                                                <p className="text-muted">{value.speciality}</p>
                                                                <ul className="social-links list-inline m-t-20">
                                                                    <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                                                                    <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                                                                    <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                                                                </ul>
                                                                <p className="text-muted">{value.address}</p>
                                                                <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                            )
                                        })}
                                        {/* <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="card xl-khaki member-card doctor">
                                                <div className="body">
                                                    <div className="member-thumb">
                                                        <img src="../assets/images/doctors/member2.png" className="img-fluid" alt="profile-image" />
                                                    </div>
                                                    <div className="detail">
                                                        <h4 className="m-b-0">Dr. Amelia</h4>
                                                        <p className="text-muted">Gynecologist</p>
                                                        <ul className="social-links list-inline m-t-20">
                                                            <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                                                            <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                                                            <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                                                        </ul>
                                                        <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                                        <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="card xl-blue member-card doctor">
                                                <div className="body">
                                                    <div className="member-thumb">
                                                        <img src="../assets/images/doctors/member3.png" className="img-fluid" alt="profile-image" />
                                                    </div>
                                                    <div className="detail">
                                                        <h4 className="m-b-0">Dr. Jack </h4>
                                                        <p className="text-muted">Dentist</p>
                                                        <ul className="social-links list-inline m-t-20">
                                                            <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                                                            <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                                                            <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                                                        </ul>
                                                        <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                                        <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="card xl-parpl member-card doctor">
                                                <div className="body">
                                                    <div className="member-thumb">
                                                        <img src="../assets/images/doctors/member4.png" className="img-fluid" alt="profile-image" />
                                                    </div>
                                                    <div className="detail">
                                                        <h4 className="m-b-0">Dr. Jessica </h4>
                                                        <p className="text-muted">Nursing</p>
                                                        <ul className="social-links list-inline m-t-20">
                                                            <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                                                            <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                                                            <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                                                        </ul>
                                                        <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                                        <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="card xl-pink member-card doctor">
                                                <div className="body">
                                                    <div className="member-thumb">
                                                        <img src="../assets/images/doctors/member5.png" className="img-fluid" alt="profile-image" />
                                                    </div>
                                                    <div className="detail">
                                                        <h4 className="m-b-0">Dr. Joseph </h4>
                                                        <p className="text-muted">Audiology</p>
                                                        <ul className="social-links list-inline m-t-20">
                                                            <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                                                            <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                                                            <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                                                        </ul>
                                                        <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                                        <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="card xl-seagreen member-card doctor">
                                                <div className="body">
                                                    <div className="member-thumb">
                                                        <img src="../assets/images/doctors/member6.png" className="img-fluid" alt="profile-image" />
                                                    </div>
                                                    <div className="detail">
                                                        <h4 className="m-b-0">Dr. Charlie </h4>
                                                        <p className="text-muted">Physical Therapy</p>
                                                        <ul className="social-links list-inline m-t-20">
                                                            <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                                                            <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                                                            <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                                                        </ul>
                                                        <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                                        <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="card xl-blue member-card doctor">
                                                <div className="body">
                                                    <div className="member-thumb">
                                                        <img src="../assets/images/doctors/member7.png" className="img-fluid" alt="profile-image" />
                                                    </div>
                                                    <div className="detail">
                                                        <h4 className="m-b-0">Dr. William </h4>
                                                        <p className="text-muted">Dentist</p>
                                                        <ul className="social-links list-inline m-t-20">
                                                            <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                                                            <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                                                            <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                                                        </ul>
                                                        <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                                        <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="card xl-seagreen member-card doctor">
                                                <div className="body">
                                                    <div className="member-thumb">
                                                        <img src="../assets/images/doctors/member8.png" className="img-fluid" alt="profile-image" />
                                                    </div>
                                                    <div className="detail">
                                                        <h4 className="m-b-0">Dr. Sophie </h4>
                                                        <p className="text-muted">Physical Therapy</p>
                                                        <ul className="social-links list-inline m-t-20">
                                                            <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                                                            <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                                                            <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                                                        </ul>
                                                        <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                                        <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="Consultant">
                                    <div className="row clearfix">
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="card xl-khaki member-card doctor">
                                                <div className="body">
                                                    <div className="member-thumb">
                                                        <img src="../assets/images/doctors/member2.png" className="img-fluid" alt="profile-image" />
                                                    </div>
                                                    <div className="detail">
                                                        <h4 className="m-b-0">Dr. Amelia</h4>
                                                        <p className="text-muted">Gynecologist</p>
                                                        <ul className="social-links list-inline m-t-20">
                                                            <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                                                            <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                                                            <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                                                        </ul>
                                                        <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                                        <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="card xl-blue member-card doctor">
                                                <div className="body">
                                                    <div className="member-thumb">
                                                        <img src="../assets/images/doctors/member3.png" className="img-fluid" alt="profile-image" />
                                                    </div>
                                                    <div className="detail">
                                                        <h4 className="m-b-0">Dr. Jack </h4>
                                                        <p className="text-muted">Dentist</p>
                                                        <ul className="social-links list-inline m-t-20">
                                                            <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                                                            <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                                                            <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                                                        </ul>
                                                        <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                                        <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="card xl-pink member-card doctor">
                                                <div className="body">
                                                    <div className="member-thumb">
                                                        <img src="../assets/images/doctors/member5.png" className="img-fluid" alt="profile-image" />
                                                    </div>
                                                    <div className="detail">
                                                        <h4 className="m-b-0">Dr. Joseph </h4>
                                                        <p className="text-muted">Audiology</p>
                                                        <ul className="social-links list-inline m-t-20">
                                                            <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                                                            <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                                                            <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                                                        </ul>
                                                        <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                                        <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="card xl-seagreen member-card doctor">
                                                <div className="body">
                                                    <div className="member-thumb">
                                                        <img src="../assets/images/doctors/member6.png" className="img-fluid" alt="profile-image" />
                                                    </div>
                                                    <div className="detail">
                                                        <h4 className="m-b-0">Dr. Charlie </h4>
                                                        <p className="text-muted">Physical Therapy</p>
                                                        <ul className="social-links list-inline m-t-20">
                                                            <li><a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a></li>
                                                            <li><a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a></li>
                                                            <li><a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a></li>
                                                        </ul>
                                                        <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                                        <a href="profile.html" className="btn btn-default btn-round btn-simple">View Profile</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
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

export default ShowDoctors
