import React from "react";
import Modal from "react-modal";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./modal.css";

const modal = ({ isOpen, onRequestClose, name }) => {
    const validationSchema = Yup.object({
        name:Yup.string().required('Name is a required field'),
        email: Yup.string().email().required('Email is a required field'),
        phonenumber: Yup.number().required('Phone number is a required field').positive().integer(),
        course: Yup.string().required('Please select a course'),
    })
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            phonenumber:'',
            course:''
        },
        validationSchema:validationSchema,
        onSubmit: values=>{
            console.log(values);
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
                <label htmlFor="phonenumber">
                    Phone Number
                </label>
                <input type="text" onBlur={formik.handleBlur} name="phonenumber" onChange={formik.handleChange} value={formik.values.phonenumber} id="phonenumber"  placeholder="Enter Phone Number *"/>
                {
                    formik.errors.phonenumber && formik.touched.phonenumber && <p style={{color:'red'}}>{formik.errors.phonenumber}</p>
                }
                <label for="course">Select Course</label>
                <select name="course" id="course" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.course}>
                    <option value="">Select Course</option>
                    <option value="Course 1">Course 1</option>
                    <option value="Course 2">Course 2</option>
                    <option value="Course 3">Course 3</option>
                    <option value="Course 4">Course 4</option>
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
