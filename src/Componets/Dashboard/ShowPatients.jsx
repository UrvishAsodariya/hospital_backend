import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import RightSideBar from './RightSideBar'
import Sidebar from './Sidebar'
import { Case, CaseElse, Switch } from "react-context-switch"

const ShowPatients = () => {
    const [ShowPatientsData, SetShowPatientsData] = useState([]);
    useEffect(() => {
        axios.post('http://localhost/work/hospital_be/add-patient.php')
            .then(function (res) {
                SetShowPatientsData([...res.data]);
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
                        <div className="col-lg-7 col-md-5 col-sm-12">
                            <h2>All Patients
                                <small className="text-muted">Welcome to Oreo</small>
                            </h2>
                        </div>
                        <div className="col-lg-5 col-md-7 col-sm-12">
                            <button className="btn btn-primary btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
                                <i className="zmdi zmdi-plus" />
                            </button>
                            <ul className="breadcrumb float-md-right">
                                <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Oreo</a></li>
                                <li className="breadcrumb-item"><a href="javascript:void(0);">Patients</a></li>
                                <li className="breadcrumb-item active">All Patients</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row clearfix">
                        <div className="col-md-12">
                            <div className="card patients-list">
                                <div className="header">
                                    <h2><strong>Patients</strong> List</h2>
                                    <ul className="header-dropdown">
                                        <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                                            <ul className="dropdown-menu dropdown-menu-right slideUp">
                                                <li><a href="javascript:void(0);">Action</a></li>
                                                <li><a href="javascript:void(0);">Another action</a></li>
                                                <li><a href="javascript:void(0);">Something else</a></li>
                                            </ul>
                                        </li>
                                        <li className="remove">
                                            <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">
                                    {/* Nav tabs */}
                                    <ul className="nav nav-tabs padding-0">
                                        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#All">All</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#USA">USA</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#India">India</a></li>
                                    </ul>
                                    {/* Tab panes */}
                                    <div className="tab-content m-t-10">
                                        <div className="tab-pane table-responsive active" id="All">
                                            <table className="table m-b-0 table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Media</th>
                                                        <th>Patients ID</th>
                                                        <th>Name</th>
                                                        <th>Age</th>
                                                        <th>Address</th>
                                                        <th>Number</th>
                                                        <th>Last Visit</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>{ShowPatientsData.map((value) => {
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td><span className="list-icon"><img className="patients-img" src={"http://localhost/work/hospital_be/"+value.img} alt /></span></td>
                                                                <td><span className="list-name">{value.id}</span></td>
                                                                <td>{value.first_name}</td>
                                                                <td>{value.age}</td>
                                                                <td>{value.address}</td>
                                                                <td>{value.phone}</td>
                                                                <td>{value.Date}</td>
                                                                <td>
                                                                <Switch value={value.status}>
                                                                    <Case when={(val) => val.includes(1)}>
                                                                    <span className="badge badge-success">Approved</span>
                                                                    </Case>
                                                                    <CaseElse>
                                                                    <span className="badge badge-warning">Pending</span>
                                                                    </CaseElse>
                                                                </Switch></td>
                                                            </tr>
                                                        </>
                                                    )
                                                })}

                                                </tbody>
                                            </table>
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

export default ShowPatients
