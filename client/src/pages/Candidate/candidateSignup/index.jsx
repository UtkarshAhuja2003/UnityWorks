import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import image from "../../../assets/signin.png"


const Register = () => {
  return (
    <div className='flex mt-4 w-[95%] px-[5%] mx-auto mt-6 mb-6 bg-white shadow-xl rounded-lg'>
        <div className='w-[45%]'>
          <img src={image} alt="" />
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
          <form
            style={{
              padding: '20px 25px 25px 25px',
              animation: 'fadeInUp 2s',
              width: '400px',
              height: '600px',
            }}
            action="#"
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
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
        </div>
        </div>
  );
};

export default Register;
