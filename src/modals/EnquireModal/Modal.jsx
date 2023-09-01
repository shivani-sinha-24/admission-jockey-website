import React from "react";
import Modal from "react-modal";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./modal.css";
import axios from "axios";
import { toast } from "react-toastify";

const modal = ({ isOpen, onRequestClose, name,setIsOpen }) => {
    const notify = () => toast("Wow so easy!");
    const validationSchema = Yup.object({
        name:Yup.string().required('Name is a required field'),
        email: Yup.string().email().required('Email is a required field'),
        phone_number: Yup.number().required('Phone number is a required field').positive().integer(),
        course: Yup.string().required('Please select a course'),
    })
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            phone_number:'',
            course:''
        },
        validationSchema:validationSchema,
        onSubmit: values=>{
            axios.post(`${import.meta.env.VITE_BASE_URL}/createWebQueryList`,values)
            .then(res=>{
                setIsOpen(false);
                setTimeout(()=>{toast.success(res?.data?.message)},500)
            })
            .catch(err=>console.log(err))
        }
    })
  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Modal"
        appElement={document.getElementById("root")} // Set the app element here
        className={{
        base: "modal-base",
        afterOpen: "modal-base_after-open",
        beforeClose: "modal-base_before-close",
        }}
        overlayClassName={{
        base: "overlay-base",
        afterOpen: "overlay-base_after-open",
        beforeClose: "overlay-base_before-close"
        }}
        shouldCloseOnOverlayClick={true}
        closeTimeoutMS={2000}
    >
    <div className="modal-content">
        <div className="modal-top">
            <p>Enquire Now</p>
        </div>
        <div className="modal-bottom">
            <form action="" onSubmit={formik.handleSubmit}>
                <label htmlFor="name">
                    Name
                </label>
                <input type="text" onBlur={formik.handleBlur} name="name" onChange={formik.handleChange} value={formik.values.name} id="name" placeholder="Enter Name *"/>
                {
                    formik.errors.name && formik.touched.name && <p style={{color:'red'}}>{formik.errors.name}</p>
                }
                <label htmlFor="email">
                    Email Address
                </label>
                <input type="email" onBlur={formik.handleBlur} name="email" onChange={formik.handleChange} value={formik.values.email} id="email"  placeholder="Enter email Address *"/>
                {
                    formik.errors.email && formik.touched.email && <p style={{color:'red'}}>{formik.errors.email}</p>
                }
                <label htmlFor="phone_number">
                    Phone Number
                </label>
                <input type="text" onBlur={formik.handleBlur} name="phone_number" onChange={formik.handleChange} value={formik.values.phone_number} id="phone_number"  placeholder="Enter Phone Number *"/>
                {
                    formik.errors.phone_number && formik.touched.phone_number && <p style={{color:'red'}}>{formik.errors.phone_number}</p>
                }
                <label htmlFor="course">Select Course</label>
                <select name="course" id="course" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.course}>
                    <option value="">Select Course</option>
                    <option value="MCA">MCA</option>
                    <option value="MBA">MBA</option>
                    <option value="M.Com">M.Com</option>
                    <option value="M.Sc">M.Sc</option>
                    <option value="M.A">M.A</option>
                    <option value="BCA">BCA</option>
                    <option value="BBA">BBA</option>
                    <option value="B.Com">B.Com</option>
                    <option value="B.Sc">B.Sc</option>
                    <option value="B.A">B.A</option>
                </select>
                {
                    formik.errors.course && formik.touched.course && <p style={{color:'red'}}>{formik.errors.course}</p>
                }
                <button type="submit" onClick={()=>formik.handleSubmit}> Submit</button>
            </form>
        </div>
    </div>

  </Modal>
  )
}

export default modal
