import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import RightSideBar from './RightSideBar'
import Sidebar from './Sidebar'

const AllDepartment = () => {

    const [ShowDepartment, SetShowDepartment] = useState([])

    useEffect(() => {
        axios.post('http://localhost/work/hospital_be/add-department.php')
            .then((response) => {
                console.log(response.data);
                SetShowDepartment(response.data);
            }).catch((error) => {
                console.log(error);
            })
    })

    return (
        <div>
            <Header />
            <RightSideBar />
            <Sidebar />
            <section className="content">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-7 col-md-5 col-sm-12">
                            <h2>All Departments
                                <small>Welcome to Oreo</small>
                            </h2>
                        </div>
                        <div className="col-lg-5 col-md-7 col-sm-12">
                            <button className="btn btn-white btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
                                <i className="zmdi zmdi-plus" />
                            </button>
                            <ul className="breadcrumb float-md-right">
                                <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Oreo</a></li>
                                <li className="breadcrumb-item"><a href="javascript:void(0);">Departments</a></li>
                                <li className="breadcrumb-item active">Alle</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row clearfix">

                        {ShowDepartment.map((value) => {
                            return (
                                <>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="card project_widget">
                                            <div className="pw_img">
                                                <img className="img-fluid blogimgfront"  src={"http://localhost/work/hospital_be/" + value.Image} alt="About the image" />
                                            </div>
                                            <div className="pw_content">
                                                <div className="pw_header">
                                                    <h6>{value.DepartmentName}</h6>
                                                    <ul className="list-unstyled team-info margin-0 p-t-15">
                                                        <li className="m-r-15"><small>Team</small></li>
                                                        <li><img src="../assets/images/xs/avatar2.jpg" alt="Avatar" /></li>
                                                        <li><img src="../assets/images/xs/avatar3.jpg" alt="Avatar" /></li>
                                                        <li><img src="../assets/images/xs/avatar4.jpg" alt="Avatar" /></li>
                                                        <li><img src="../assets/images/xs/avatar6.jpg" alt="Avatar" /></li>
                                                        <li><a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="pw_meta">
                                                    <p>{value.DetailOfDepartment}</p>
                                                    <a href="more-Departments.html" className="btn btn-primary btn-simple btn-round">More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                </>
                            )
                        })}
                       
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AllDepartment;
