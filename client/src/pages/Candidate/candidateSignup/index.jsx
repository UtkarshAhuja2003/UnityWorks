import React ,{useState}from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import loginimage from "../../../assets/signin.png"
import {useNavigate} from "react-router-dom"
import { signupSchema } from '../../../schema/candidate';
import cookie from "js-cookie"
import { useFormik } from "formik";


const Register = () => {
  const navigate=useNavigate();
  const [image, setImage] = useState(null);
  const [resume, setResume] = useState(null);
  const initialValues = {
    name:"",email:"",mobile:"",image:"",dob:"",password:"",disability:"",gender:"",bio:""
  };
  const { values, handleBlur, handleChange, handleSubmit, errors, touched ,setValues} =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      validateOnChange: true,
      validateOnBlur: false,
      //// By disabling validation onChange and onBlur formik will validate on submit.
      onSubmit: (values, action) => {
        //// to get rid of all the values after submitting the form
        action.resetForm();
      },
    });
    function postData() {
      const pdfData = new FormData();
      pdfData.append("file", resume);  // Assuming 'pdf' is your PDF file
      pdfData.append("upload_preset", "unityworks");
      pdfData.append("cloud_name", "dpiswn2th");
    
      fetch("https://api.cloudinary.com/v1_1/dpiswn2th/upload", {
        method: "POST",
        body: pdfData,
      })
      .then(res => res.json())
      .then(pdfResponseData => {
        console.log(pdfResponseData);
        const imageData = new FormData();
        imageData.append("file", image);  // Assuming 'image' is your image file
        imageData.append("upload_preset", "unityworks");
        imageData.append("cloud_name", "dpiswn2th");
    
        fetch("https://api.cloudinary.com/v1_1/dpiswn2th/image/upload", {
          method: "POST",
          body: imageData,
        })
        .then(res => res.json())
        .then(imageResponseData => {
          console.log(imageResponseData);
    
          const {
            name,
            email,
            password,
            mobile,
            disability,
            gender,
            dob,
            bio,
          } = values;
    
          fetch("https://unityworks-backend.onrender.com/signupCandidate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name,
              email,
              password,
              mobile,
              disability,
              gender,
              dob,
              bio,
              image: imageResponseData.url,
              resume: pdfResponseData.url
            }),
          })
          .then(res => res.json())
          .then(data => {
            localStorage.setItem("jwt", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("role","candidate")
            navigate("/");
          })
          .catch(error => {
            console.error("Error posting user:", error);
          });
        })
        .catch(imageError => {
          console.log("Image upload error:", imageError);
        });
      })
      .catch(pdfError => {
        console.log("PDF upload error:", pdfError);
      });
    }
    
  return (
    <div className='flex mt-4 w-[95%] px-[5%] mx-auto mt-6 mb-6 bg-white shadow-xl rounded-lg'>
        <div className='w-[45%]'>
          <img src={loginimage} alt="" />
        </div>
        <div className='w-[45%]'>
        <div className='w-[50%] mx-auto'
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundImage: "url('3.png')",
        minHeight: '50vh',
        display: 'flex',
        // backgroundColor: '#f2f6ff',
      }}
    >
      <div
        style={{
          maxWidth: '500px',
          padding: '20px 20px',
          marginBottom:"20px"
          // height: '550px',
        }}
      >
        <div
          style={{
            width: '100%',
            background: '#fff',
            borderRadius: '5px',
            boxShadow: '0px 4px 10px 1px rgba(0,0,0,0.1)',
          }}
        >
          <div
            style={{
              height: '70px',
              background: '#43B18D',
              borderRadius: '5px 5px 0 0',
              color: '#ffffff',
              fontSize: '30px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'fadeInDown 1s',
            }}
          >
            <span>Register As Seeker</span>
          </div>
          <div
            style={{
              padding: '20px 25px 25px 25px',
              animation: 'fadeInUp 2s',
              width: '400px',
              height: '600px',
            }}
          >
            <div
              style={{
                height: '45px',
                // marginBottom: '15px',
                position: 'relative',
                padding: '7px',
                display: 'flex',
              }}
            >
              <AiOutlineUser
                style={{
                  width: '47px',
                  height: '100%',
                  color: '#fff',
                  fontSize: '18px',
                  background: '#16a085',
                  border: '1px solid #16a085',
                  borderRadius: '5px 0 0 5px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
              <input
                style={{
                  height: '100%',
                  width: '100%',
                  outline: 'none',
                  padding: '0 10px',
                  borderRadius: '5px',
                  border: '1px solid lightgrey',
                  fontSize: '16px',
                  transition: 'all 1s ease',
                }}
                type="text"
                placeholder="Name"
                required
                value={values.name}
                onChange={handleChange}
                autoComplete='off'
                name='name'
              />
            </div>
            <div
              style={{
                height: '45px',
                // marginBottom: '15px',
                position: 'relative',
                padding: '7px',
                display: 'flex',
              }}
            >
              <HiOutlineMail
                style={{
                  width: '47px',
                  height: '100%',
                  color: '#fff',
                  fontSize: '18px',
                  background: '#16a085',
                  border: '1px solid #16a085',
                  borderRadius: '5px 0 0 5px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
              <input
                style={{
                  height: '100%',
                  width: '100%',
                  outline: 'none',
                  padding: '0 10px',
                  borderRadius: '5px',
                  border: '1px solid lightgrey',
                  fontSize: '16px',
                  transition: 'all 1s ease',
                }}
                type="text"
                placeholder="Email"
                required
                value={values.email}
                onChange={handleChange}
                autoComplete='off'
                name='email'
              />
            </div>
            <div
              style={{
                height: '45px',
                // marginBottom: '15px',
                position: 'relative',
                padding: '7px',
                display: 'flex',
              }}
            >
              <FiPhone
                style={{
                  width: '47px',
                  height: '100%',
                  color: '#fff',
                  fontSize: '18px',
                  background: '#16a085',
                  border: '1px solid #16a085',
                  borderRadius: '5px 0 0 5px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
              <input
                style={{
                  height: '100%',
                  width: '100%',
                  outline: 'none',
                  padding: '0 10px',
                  borderRadius: '5px',
                  border: '1px solid lightgrey',
                  fontSize: '16px',
                  transition: 'all 1s ease',
                }}
                type="text"
                placeholder="Phone"
                required
                value={values.mobile}
                onChange={handleChange}
                autoComplete='off'
                name='mobile'
              />
            </div>
            <div
              style={{
                height: '45px',
                // marginBottom: '15px',
                position: 'relative',
                padding: '7px',
                display: 'flex',
              }}
            >
              <RiLockPasswordLine
                style={{
                  width: '47px',
                  height: '100%',
                  color: '#fff',
                  fontSize: '18px',
                  background: '#16a085',
                  border: '1px solid #16a085',
                  borderRadius: '5px 0 0 5px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
              <input
                style={{
                  height: '100%',
                  width: '100%',
                  outline: 'none',
                  padding: '0 10px',
                  borderRadius: '5px',
                  border: '1px solid lightgrey',
                  fontSize: '16px',
                  transition: 'all 1s ease',
                }}
                type="password"
                placeholder="Password"
                required
                value={values.password}
                onChange={handleChange}
                autoComplete='off'
                name='password'
              />
            </div>
            <div
              style={{
                height: '45px',
                marginBottom: '5px',
                position: 'relative',
                padding: '7px',
              }}
            >
              <label htmlFor="resume">Resume:</label>
              <input
                style={{
                  height: '100%',
                  width: '100%',
                  outline: 'none',
                  padding: '0 10px',
                  borderRadius: '5px',
                  border: '1px solid lightgrey',
                  fontSize: '16px',
                  transition: 'all 1s ease',
                }}
                type="file"
               accept=".pdf"  // Change this line to accept only PDF files
  onChange={(e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setResume(selectedFile);
    } else {
      // Handle error: file is not a PDF
      alert("Please select a PDF file.");
      e.target.value = null; // Reset the input field
    }
  }}
                required
              />
            </div>
            <div
              style={{
                height: '45px',
                marginBottom: '15px',
                position: 'relative',
                padding: '7px',
              }}
            >
              <label htmlFor="image">Image:</label>
              <input
                style={{
                  height: '100%',
                  width: '100%',
                  outline: 'none',
                  padding: '0 10px',
                  borderRadius: '5px',
                  border: '1px solid lightgrey',
                  fontSize: '16px',
                  transition: 'all 1s ease',
                }}
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            </div>
            <div
              style={{
                height: '45px',
                marginBottom: '15px',
                position: 'relative',
                padding: '7px',
              }}
            >
              <label htmlFor="gender">Gender:</label>
              <select
                style={{
                  height: '100%',
                  width: '100%',
                  outline: 'none',
                  borderRadius: '5px',
                  border: '1px solid lightgrey',
                  fontSize: '16px',
                  transition: 'all 1s ease',
                }}
                id="gender"
                name="gender"
                required
                value={values.gender}
                onChange={handleChange}
                autoComplete='off'
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div
              style={{
                height: '45px',
                marginBottom: '15px',
                position: 'relative',
                padding: '7px',
              }}
            >
              <label htmlFor="disability">Disability:</label>
              <select
                style={{
                  height: '100%',
                  width: '100%',
                  outline: 'none',
                  borderRadius: '5px',
                  border: '1px solid lightgrey',
                  fontSize: '16px',
                  transition: 'all 1s ease',
                }}
                id="disability"
                name="disability"
                required
                value={values.disability}
                onChange={handleChange}
                autoComplete='off'
              >
                <option value="">Select</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
            <div
              style={{
                height: '45px',
                marginBottom: '15px',
                position: 'relative',
                padding: '7px',
              }}
            >
              <label htmlFor="dob">Date of Birth:</label>
              <input
                style={{
                  height: '100%',
                  width: '100%',
                  outline: 'none',
                  padding: '0 10px',
                  borderRadius: '5px',
                  border: '1px solid lightgrey',
                  fontSize: '16px',
                  transition: 'all 1s ease',
                }}
                type="date"
                id="dob"
                name="dob"
                required
                value={values.dob}
                onChange={handleChange}
                autoComplete='off'
              />
            </div>
            <div
              style={{
                height: '45px',
                // marginBottom: '15px',
                position: 'relative',
                padding: '7px',
              }}
            >
              <input
                style={{
                  height: '100%',
                  width: '100%',
                  outline: 'none',
                  padding: '0 10px',
                  borderRadius: '5px',
                  border: '1px solid lightgrey',
                  fontSize: '16px',
                  transition: 'all 1s ease',
                }}
                type="text"
                placeholder="Your Bio"
                required
                value={values.bio}
                onChange={handleChange}
                autoComplete='off'
                name='bio'
              />
            </div>
            <div
              style={{
                textAlign: 'center',
                // marginTop: '20px',
              }}
            >
              <button 
              onClick={postData}
                style={{
                  color: '#fff',
                  fontSize: '21px',
                  fontWeight: '500',
                  padding: '10px 20px',
                  background: '#43B18D',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  // marginTop: '20px',
                  marginBottom:"10px"
                }}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
        </div>
  );
};

export default Register;
