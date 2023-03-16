import React from 'react'
import {Link} from 'react-router-dom'
const Sidebar = () => {
    return (
        <>
            <aside id="leftsidebar" className="sidebar">
                <ul className="nav nav-tabs">
                    <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#dashboard"><i className="zmdi zmdi-home m-r-5" />Oreo</a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#user">Doctor</a></li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane stretchRight active" id="dashboard">
                        <div className="menu">
                            <ul className="list">
                                <li>
                                    <div className="user-info">
                                        <div className="image"><a href="profile.html"><img src="../assets/images/profile_av.jpg" alt="User" /></a></div>
                                        <div className="detail">
                                            <h4>Dr. Charlotte</h4>
                                            <small>Neurologist</small>
                                        </div>
                                    </div>
                                </li>
                                <li className="header">MAIN</li>
                                <li className="active open"><a href='Dashboard'><i className="zmdi zmdi-home" /><span>Dashboard</span></a></li>
                                <li><a href="BookAppointment"><i className="zmdi zmdi-calendar-check" /><span>Appointment</span></a></li>
                                <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-account-add" /><span>Doctors</span> </a>
                                    <ul className="ml-menu">
                                        <li><a href="ShowDoctors">All Doctors</a></li>
                                        <li><a href="AddDoctor">Add Doctor</a></li>
                                        <li><a href="profile.html">Doctor Profile</a></li>
                                        <li><a href="events.html">Doctor Schedule</a></li>
                                    </ul>
                                </li>
                                <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-account-o" /><span>Patients</span> </a>
                                    <ul className="ml-menu">
                                        <li><a href="ShowPatients">All Patients</a></li>
                                        <li><a href="AddPatient">Add Patient</a></li>
                                        <li><a href="patient-profile.html">Patient Profile</a></li>
                                        <li><a href="patient-invoice.html">Invoice</a></li>
                                    </ul>
                                </li>
                                <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-balance-wallet" /><span>Payments</span> </a>
                                    <ul className="ml-menu">
                                        <li><a href="payments.html">Payments</a></li>
                                        <li><a href="add-payments.html">Add Payment</a></li>
                                        <li><a href="invoice.html">Invoice</a></li>
                                    </ul>
                                </li>
                                <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-label-alt" /><span>Departments</span> </a>
                                    <ul className="ml-menu">
                                        <li><a href="AddDepartment">Add</a></li>
                                        <li><a href="AllDepartment">All Departments</a></li>
                                        <li><a href="javascript:void(0);">Cardiology</a></li>
                                        <li><a href="javascript:void(0);">Pulmonology</a></li>
                                        <li><a href="javascript:void(0);">Gynecology</a></li>
                                        <li><a href="javascript:void(0);">Neurology</a></li>
                                        <li><a href="javascript:void(0);">Urology</a></li>
                                        <li><a href="javascript:void(0);">Gastrology</a></li>
                                        <li><a href="javascript:void(0);">Pediatrician</a></li>
                                        <li><a href="javascript:void(0);">Laboratory</a></li>
                                    </ul>
                                </li>
                                <li> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-lock" /><span>Authentication</span> </a>
                                    <ul className="ml-menu">
                                        <li><a href="sign-in.html">Sign In</a> </li>
                                        <li><a href="sign-up.html">Sign Up</a> </li>
                                        <li><a href="forgot-password.html">Forgot Password</a> </li>
                                        <li><a href="404.html">Page 404</a> </li>
                                        <li><a href="500.html">Page 500</a> </li>
                                        <li><a href="page-offline.html">Page Offline</a> </li>
                                        <li><a href="locked.html">Locked Screen</a> </li>
                                    </ul>
                                </li>
                                <li className="header">EXTRA COMPONENTS</li>
                                <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-blogger" /><span>Blog</span></a>
                                    <ul className="ml-menu">
                                        <li><a href="blog-dashboard.html">Blog Dashboard</a></li>
                                        <li><a href="AddBlog">New Post</a></li>
                                        <li><a href="AllBlog">Blog List</a></li>
                                        <li><a href="blog-grid.html">Blog Grid</a></li>
                                        <li><a href="blog-details.html">Blog Single</a></li>
                                    </ul>
                                </li>
                                <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-folder" /><span>File Manager</span> </a>
                                    <ul className="ml-menu">
                                        <li><a href="file-dashboard.html">All File</a></li>
                                        <li><a href="file-documents.html">Documents</a></li>
                                        <li><a href="file-media.html">Media</a></li>
                                        <li><a href="file-images.html">Images</a></li>
                                    </ul>
                                </li>
                                <li> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-apps" /><span>App</span> </a>
                                    <ul className="ml-menu">
                                        <li><a href="mail-inbox.html">Inbox</a></li>
                                        <li><a href="chat.html">Chat</a></li>
                                        <li><a href="contact.html">Contact list</a></li>
                                    </ul>
                                </li>
                                <li> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-delicious" /><span>Widgets</span> </a>
                                    <ul className="ml-menu">
                                        <li><a href="widgets-app.html">Apps Widgetse</a></li>
                                        <li><a href="widgets-data.html">Data Widgetse</a></li>
                                    </ul>
                                </li>
                                <li> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-copy" /><span>Sample Pages</span> </a>
                                    <ul className="ml-menu">
                                        <li><a href="blank.html">Blank Page</a> </li>
                                        <li><a href="https://thememakker.com/templates/oreo/hospital/html/rtl/index.html">RTL Support</a></li>
                                        <li><a href="image-gallery.html">Image Gallery</a> </li>
                                        <li><a href="profile.html">Profile</a></li>
                                        <li><a href="timeline.html">Timeline</a></li>
                                        <li><a href="invoice.html">Invoices</a></li>
                                        <li><a href="search-results.html">Search Results</a></li>
                                    </ul>
                                </li>
                                <li> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-swap-alt" /><span>User Interface (UI)</span> </a>
                                    <ul className="ml-menu">
                                        <li><a href="ui_kit.html">UI KIT</a></li>
                                        <li><a href="alerts.html">Alerts</a></li>
                                        <li><a href="collapse.html">Collapse</a></li>
                                        <li><a href="colors.html">Colors</a></li>
                                        <li><a href="dialogs.html">Dialogs</a></li>
                                        <li><a href="icons.html">Icons</a></li>
                                        <li><a href="list-group.html">List Group</a></li>
                                        <li><a href="media-object.html">Media Object</a></li>
                                        <li><a href="modals.html">Modals</a></li>
                                        <li><a href="notifications.html">Notifications</a></li>
                                        <li><a href="progressbars.html">Progress Bars</a></li>
                                        <li><a href="range-sliders.html">Range Sliders</a></li>
                                        <li><a href="sortable-nestable.html">Sortable &amp; Nestable</a></li>
                                        <li><a href="tabs.html">Tabs</a></li>
                                        <li><a href="waves.html">Waves</a></li>
                                    </ul>
                                </li>
                                <li className="header">Extra</li>
                                <li>
                                    <div className="progress-container progress-primary m-t-10">
                                        <span className="progress-badge">Traffic this Month</span>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={67} aria-valuemin={0} aria-valuemax={100} style={{ width: '67%' }}>
                                                <span className="progress-value">67%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="progress-container progress-info">
                                        <span className="progress-badge">Server Load</span>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={86} aria-valuemin={0} aria-valuemax={100} style={{ width: '86%' }}>
                                                <span className="progress-value">86%</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-pane stretchLeft" id="user">
                        <div className="menu">
                            <ul className="list">
                                <li>
                                    <div className="user-info m-b-20 p-b-15">
                                        <div className="image"><a href="profile.html"><img src="../assets/images/profile_av.jpg" alt="User" /></a></div>
                                        <div className="detail">
                                            <h4>Dr. Charlotte</h4>
                                            <small>Neurologist</small>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a>
                                                <a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a>
                                                <a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a>
                                            </div>
                                            <div className="col-4 p-r-0">
                                                <h5 className="m-b-5">18</h5>
                                                <small>Exp</small>
                                            </div>
                                            <div className="col-4">
                                                <h5 className="m-b-5">125</h5>
                                                <small>Awards</small>
                                            </div>
                                            <div className="col-4 p-l-0">
                                                <h5 className="m-b-5">148</h5>
                                                <small>Clients</small>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <small className="text-muted">Location: </small>
                                    <p>795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                    <hr />
                                    <small className="text-muted">Email address: </small>
                                    <p>Charlotte@example.com</p>
                                    <hr />
                                    <small className="text-muted">Phone: </small>
                                    <p>+ 202-555-0191</p>
                                    <hr />
                                    <small className="text-muted">Website: </small>
                                    <p>dr.charlotte.com/ </p>
                                    <hr />
                                    <ul className="list-unstyled">
                                        <li>
                                            <div>Colorectal Surgery</div>
                                            <div className="progress m-b-20">
                                                <div className="progress-bar l-blue " role="progressbar" aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} style={{ width: '89%' }}> <span className="sr-only">62% Complete</span> </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div>Endocrinology</div>
                                            <div className="progress m-b-20">
                                                <div className="progress-bar l-green " role="progressbar" aria-valuenow={56} aria-valuemin={0} aria-valuemax={100} style={{ width: '56%' }}> <span className="sr-only">87% Complete</span> </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div>Dermatology</div>
                                            <div className="progress m-b-20">
                                                <div className="progress-bar l-amber" role="progressbar" aria-valuenow={78} aria-valuemin={0} aria-valuemax={100} style={{ width: '78%' }}> <span className="sr-only">32% Complete</span> </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div>Neurophysiology</div>
                                            <div className="progress m-b-20">
                                                <div className="progress-bar l-blush" role="progressbar" aria-valuenow={43} aria-valuemin={0} aria-valuemax={100} style={{ width: '43%' }}> <span className="sr-only">56% Complete</span> </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>

        </>
    )
}
export default Sidebar;
