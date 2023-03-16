import React, { useState } from 'react'
import axios from 'axios'
import RightSideBar from './RightSideBar'
import Sidebar from './Sidebar'
import Header from './Header'
const AddBlog = () => {
    const [AddBlogData, SetAddBlogData] = useState({
        Title: '',
        Category: '',
        Discription:''
    })
    const [AddImage, SetAddImage] = useState([])
    const HandleImages = (event) => {

        console.log(SetAddImage(event.target.files[0]));
    }
    const [AddDate,SetAddDate]=useState(new Date().toISOString().split('T')[0])
    const From_Data_Submit = () => {
        const formData = new FormData()
        formData.append("add", "data")
        formData.append('title', AddBlogData.Title)
        formData.append('category', AddBlogData.Category)
        formData.append('image', AddImage)
        formData.append('discription', AddBlogData.Discription)
        formData.append('Date',AddDate)
        formData.append("uid", window.localStorage.getItem("uid"))

        axios.post('http://localhost/work/hospital_be/Addblog.php', formData)
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
            <section className="content blog-page">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-7 col-md-5 col-sm-12">
                            <h2>New Post
                                <small>Welcome to Oreo</small>
                            </h2>
                        </div>
                        <div className="col-lg-5 col-md-7 col-sm-12">
                            <ul className="breadcrumb float-md-right">
                                <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Oreo</a></li>
                                <li className="breadcrumb-item"><a href="blog-dashboard.html">Blog</a></li>
                                <li className="breadcrumb-item active">New Post</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="body">
                                    <div className="form-group">
                                        <input type="text" className="form-control" onChange={Form_Fetch_Data} name='Title' placeholder="Enter Blog title" />
                                    </div>
                                    <select name='Category' onChange={Form_Fetch_Data} className="form-control show-tick">
                                        <option selected disabled>Select Category --</option>
                                        <option value='Web Design' >Web Design</option>
                                        <option value='Photography' >Photography</option>
                                        <option value='Technology' >Technology</option>
                                        <option value='Lifestyle' >Lifestyle</option>
                                        <option value='Sports' >Sports</option>
                                    </select>
                                    <form action="https://thememakker.com/" id="frmFileUpload" className="dropzone m-b-20 m-t-20" method="post" encType="multipart/form-data">
                                        <div className="dz-message">
                                            <div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>
                                            <h3>Drop files here or click to upload.</h3>
                                            <em>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</em> </div>
                                        <div className="fallback">
                                            <input name="File"  onChange={HandleImages} type="file" multiple />
                                        </div>
                                    </form>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <textarea rows={4} onChange={Form_Fetch_Data} name='Discription' className="form-control no-resize" placeholder="Description" defaultValue={""} />
                                        </div>
                                    </div>
                                    <button type="button" onClick={From_Data_Submit} className="btn btn-primary btn-round waves-effect m-t-20">Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AddBlog
