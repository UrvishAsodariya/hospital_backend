import React, { useState } from 'react'
import axios from 'axios'
import RightSideBar from './RightSideBar'
import Sidebar from './Sidebar'
import Header from './Header'

const AddDepartment = () => {
    const [AddBlogData, SetAddBlogData] = useState({
        DepartmentName: '',
        Discription: ''
    })
    const [AddImage, SetAddImage] = useState([])
    const HandleImages = (event) => {

        console.log(SetAddImage(event.target.files[0]));
    }
    const From_Data_Submit = () => {

        const formData = new FormData()
        formData.append("add", "data")
        formData.append('DepartmentName', AddBlogData.DepartmentName)
        formData.append('image', AddImage)
        formData.append('Discription', AddBlogData.Discription)
        formData.append("uid", window.localStorage.getItem("uid"))

        axios.post('http://localhost/work/hospital_be/add-department.php', formData)
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
        SetAddBlogData({ ...AddBlogData, [targetName]: targetValue })
    }
    return (
        <>
            <Sidebar />
            <RightSideBar />
            <Header />
            <section className="content">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-7 col-md-5 col-sm-12">
                            <h2>Add Departments
                                <small>Welcome to Oreo</small>
                            </h2>
                        </div>
                        <div className="col-lg-5 col-md-7 col-sm-12">
                            <ul className="breadcrumb float-md-right">
                                <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Oreo</a></li>
                                <li className="breadcrumb-item"><a href="javascript:void(0);">Departments</a></li>
                                <li className="breadcrumb-item active">Add</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="header">
                                    <h2><strong>Add</strong> Departments<small>Description text here...</small> </h2>
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
                                                <input type="text" className="form-control" name='DepartmentName' placeholder="Departments Name" onChange={Form_Fetch_Data}/>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <textarea rows={4} className="form-control no-resize" name='Discription' placeholder="Please type what you want..." defaultValue={""} onChange={Form_Fetch_Data} />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <form action="https://thememakker.com/" id="frmFileUpload" className="dropzone m-b-20" method="post" encType="multipart/form-data">
                                                <div className="dz-message">
                                                    <div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>
                                                    <h3>Drop files here or click to upload.</h3>
                                                    <em>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</em> </div>
                                                <div className="fallback">
                                                    <input name="File" onChange={HandleImages} type="file" multiple />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="row clearfix">
                                        <div className="col-sm-12">
                                            <button type="button" onClick={From_Data_Submit} className="btn btn-primary btn-round">Submit</button>
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

export default AddDepartment
