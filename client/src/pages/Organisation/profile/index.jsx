import React from 'react'
import {AiOutlineArrowLeft,AiOutlineMail,AiOutlineUnorderedList} from "react-icons/ai"


const Profile = () => {

  

  return (
    <div className='bg-[#F2F6FF] mt-0 h-[100vh]'>
      <div className='w-[90%] mx-auto pt-4 text-gray-500 font-[600] flex'>
        <AiOutlineArrowLeft className='mt-[5px]'/>
        <h1 className='ml-2'>Back</h1>
      </div>
      <div className='md:flex w-[87%] mx-auto mt-4 justify-between'>
        <div className='md:w-[28%]  rounded-xl shadow-lg bg-[#ffffff] pt-4 pb-0 md:pt-0  md:pb-6 '>
        <img className='shadow-xl mt-12 mx-auto w-36 h-36 rounded-full' src="https://cdn.dribbble.com/users/1297166/screenshots/9955321/media/3c4e377a7cefeaf2b518eb55541871b9.jpg" alt="basfdksb" />
        <h1 className='text-[#43b18d] text-center text-lg font-[700] mt-4'>Ananya Grover</h1>
        <p className='text-center text-[#989898] w-[80%] mx-auto mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolore pariatur, accusamus ratione repellat sunt sit unde accusantium possimus porro doloremque, corrupti numquam, voluptas impedit eum corporis veniam magni odio.</p>

        </div>
        <div className='md:w-[70%]'>
          <div className=' rounded-xl shadow-lg bg-[#F2F6FF] bg-[#ffffff] w-full'>
            <h1 className='font-[600] ml-[5%] pt-6 text-xl'>Basic Information</h1>
            <div className='mx-[5%] pt-3'>
            <div className='grid grid-cols-2 md:grid-cols-3  py-3'>
              {/* <div className='w-[33%] mt-3 pl-3'>
                  <h1 className='text-gray-500'>AGE</h1>
                  <h1 className='text-black'>20 years</h1>
              </div> */}
              <div className='w-[33%] mt-3 pl-3'>
                  <h1 className='text-gray-500'>Industry</h1>
                  <h1 className='text-black'>IT</h1>
              </div>
              <div className='w-[33%] mt-3 pl-3'>
                  <h1 className='text-gray-500'>PHONE</h1>
                  <h1 className='text-black'>20 years</h1>
              </div>
              <div className='w-[33%] mt-3 pl-3'>
                  <h1 className='text-gray-500'>Company Size</h1>
                  <h1 className='text-black'>50-100</h1>
              </div>
              <div className='w-[33%] mt-3 pl-3'>
                  <h1 className='text-gray-500'>LOCATION</h1>
                  <h1 className='text-black'>Delhi, India</h1>
              </div>
              <div className='w-[33%] mt-3 pl-3'>
                  <h1 className='text-gray-500'>EMAIL</h1>
                  <h1 className='text-black'>mdkaif@gmail.com</h1>
              </div>

            </div>
            <div className="md:flex pb-4 mt-3">
            <button className="flex border border-1 ease-in-out duration-300 border-[#43b18d] hover:text-[#43b18d] items-center py-2 px-4 bg-[#43b18d] hover:bg-white text-white rounded">
              <AiOutlineUnorderedList className="mr-2" />
              Job  listings
            </button>
            <button className="mt-3 md:mt-0 md:ml-3 flex border border-1 ease-in-out duration-300 border-[#43b18d] hover:text-white items-center py-2 px-4 hover:bg-[#43b18d] bg-white text-[#43b18d] rounded">
              <AiOutlineMail className="mr-2" />
              Send Email
            </button>
            </div>

          </div>
          </div>
        




        </div>

      </div>
    </div>
  )
}

export default Profile