import React from 'react';
import image from "../../../assets/signin.png"

const Login = () => {
  return (
      <div className='flex mt-4 w-[95%] px-[5%] mx-auto mt-6 bg-white shadow-xl rounded-lg'>
        <div className='w-[45%]'>
          <img src={image} alt="" />
        </div>
        <div style={{ padding: '0 20px', height: '550px' }} className='w-[45%] mt-20'>
        <div className='ml-auto ' style={{ background: '#fff', borderRadius: '5px', boxShadow: '0px 4px 10px 1px rgba(0,0,0,0.1)' }}>
          <div style={{ height: '90px', background: '#43B18D', borderRadius: '5px 5px 0 0', color: '#ffffff', fontSize: '30px', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'fadeInDown 1s' }}>
            <span>Sign In</span>
          </div>
          <form style={{ padding: '20px 25px 25px 25px', animation: 'fadeInUp 2s', width: '400px', height: '300px' }} action="#">
            <div style={{ height: '45px', marginBottom: '15px', position: 'relative', padding: '7px' }}>
              <i style={{ position: 'absolute', width: '47px', height: '100%', color: '#fff', fontSize: '18px', background: '#16a085', border: '1px solid #16a085', borderRadius: '5px 0 0 5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="fas fa-user"></i>
              <input style={{ height: '100%', width: '100%', outline: 'none', paddingLeft: '60px', borderRadius: '5px', border: '1px solid lightgrey', fontSize: '16px', transition: 'all 1s ease' }} type="text" placeholder="Email or Phone" required/>
            </div>
            <div style={{ height: '45px', marginBottom: '15px', position: 'relative', padding: '7px' }}>
              <i style={{ position: 'absolute', width: '47px', height: '100%', color: '#fff', fontSize: '18px', background: '#16a085', border: '1px solid #16a085', borderRadius: '5px 0 0 5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="fas fa-lock"></i>
              <input style={{ height: '100%', width: '100%', outline: 'none', paddingLeft: '60px', borderRadius: '5px', border: '1px solid lightgrey', fontSize: '16px', transition: 'all 1s ease' }} type="password" placeholder="Password" required/>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '17px' }}>
              Not a member? <button style={{ color: '#16a085', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer' }} id="registerCandidate">Register as Seeker</button> <button style={{ color: '#16a085', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer' }} id="registerOrganisation">Register as an Organisation</button>
            </div>
          </form>
        </div>
      </div>

      </div>
  );
};

export default Login;
