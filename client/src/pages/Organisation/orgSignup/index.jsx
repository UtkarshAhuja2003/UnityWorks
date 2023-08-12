import React,{useState} from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineMail,HiOutlineLocationMarker } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import image2 from "../../../assets/signin.png"
import {useNavigate} from "react-router-dom"
import { signupSchema } from '../../../schema/organisation';
import cookie from "js-cookie"
import { useFormik } from "formik";


const Register = () => {
  const navigate=useNavigate();
  const [image, setImage] = useState(null);
  const initialValues = {
    name:"",email:"",mobile:"",location:"",password:"",about:""
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
        location,
        about,
        companySize,
        industry,
          } = values;
    
          fetch("http://localhost:5000/signupOrganisation", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name,
        email,
        password,
        mobile,
        location,
        about,
        image: imageResponseData.url,
        companySize,
        industry,
            }),
          })
          .then(res => res.json())
          .then(data => {
            localStorage.setItem("jwt", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("role","organisation")
            navigate("/");
          })
          .catch(error => {
            console.error("Error posting user:", error);
          });
        })
        .catch(imageError => {
          console.log("Image upload error:", imageError);
        });
      }
  return (
    <div className='flex mt-4 w-[95%] px-[5%] mx-auto mt-6 mb-6 bg-white shadow-xl rounded-lg'>
        <div className='w-[45%]'>
          <img src={image2} alt="" />
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
            <span>Register As Organisation</span>
          </div>
          <div
            style={{
              padding: '20px 25px 25px 25px',
              animation: 'fadeInUp 2s',
              width: '400px',
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
                placeholder="Company Name"
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
                // marginBottom: '15px',
                position: 'relative',
                padding: '7px',
                display: 'flex',
              }}
            >
              <HiOutlineLocationMarker
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
                placeholder="Where are you located?"
                required
                value={values.location}
                onChange={handleChange}
                autoComplete='off'
                name='location'
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
              <textarea
              className='h-24'
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
                placeholder="About your Company"
                required
                value={values.about}
                onChange={handleChange}
                autoComplete='off'
                name='about'
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
              <label htmlFor="image">Logo:</label>
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
                textAlign: 'center',
                // marginTop: '20px',
              }}
            >
              <button
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
                onClick={postData}
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
