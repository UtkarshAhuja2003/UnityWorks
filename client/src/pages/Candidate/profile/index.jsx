import React,{useState,useEffect} from 'react'
import {AiOutlineArrowLeft,AiOutlineMail} from "react-icons/ai"
import { FaDownload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  
  const navigate = useNavigate();
  const [isCandidate, setIsCandidate] = useState(false);
  useEffect(() => {
    const roleFromLocalStorage = localStorage.getItem("role");
    if (roleFromLocalStorage === "candidate") {
      setIsCandidate(true);
    } else {
      setIsCandidate(false);
    }
  }, []);
  const [data, setData] = useState();
  // let data={}
  useEffect(() => {
    fetch("http://192.168.206.54:5000/candidate/dashboard", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result.candidate);
        console.log(result.candidate);
        console.log("result", result);
        console.log("data", data);
      });
  }, []);

  var skills = [
      {
        "name": "Programming"
      },
      {
        "name": "Graphic Design"
      },
      {
        "name": "Data Analysis"
      },
      {
        "name": "Management"
      },
      {
        "name": "Communication"
      }
    ];

  

    function displaySkills() {
      return skills.map((skill) => {
        return (
          <div className='py-1 px-2 text-[#43b18d] border border-1 border-[#43b18d] rounded-xl bg-[#D5EBE4] mr-3 my-1 hover:bg-[#B1DDCE] ease-in-out duration-300'> 
            {skill.name}
          </div>
        );
      });
    }
    function display (data){
      return <div className='bg-[#F2F6FF] mt-0'>

      <div className='w-[90%] mx-auto pt-4 text-gray-500 font-[600] flex'>
        <AiOutlineArrowLeft className='mt-[5px]'/>
        <h1 className='ml-2'>Back</h1>
        {/* {console.log(data.name)} */}
      </div>
      <div className='md:flex w-[87%] mx-auto mt-4 justify-between'>
        <div className='md:w-[28%] rounded-xl shadow-lg bg-[#ffffff] pt-4 pb-0 md:py-0'>
        <img className='shadow-xl mt-12 mx-auto w-36 h-36 rounded-full' src="https://cdn.dribbble.com/users/1297166/screenshots/9955321/media/3c4e377a7cefeaf2b518eb55541871b9.jpg" alt="basfdksb" />
       <h1 className='text-[#43b18d] text-center text-lg font-[700] mt-4'>{data.name}</h1>
        <h1 className='text-[#989898] text-center text-[1rem] font-[600]'>UI/UX Designer</h1>
        <p className='text-center text-[#989898] w-[80%] mx-auto mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolore pariatur, accusamus ratione repellat sunt sit unde accusantium possimus porro doloremque, corrupti numquam, voluptas impedit eum corporis veniam magni odio.</p>
        <div className='mt-3'>
          <h1 className='font-[600] text-xl ml-[10%]'>Skills</h1>
          <div className='flex flex-wrap mx-[10%] mb-4 mt-2'>
            {displaySkills(skills)}
          </div>
        </div>
        </div>
        <div className='md:w-[70%]'>
          <div className=' rounded-xl shadow-lg bg-[#F2F6FF] bg-[#ffffff] w-full'>
            <h1 className='font-[600] ml-[5%] pt-6 text-xl'>Basic Information</h1>
            <div className='mx-[5%] pt-3'>
            <div className='grid grid-cols-2 md:grid-cols-3  py-3'>
              <div className='w-[33%] mt-3 pl-3'>
                  <h1 className='text-gray-500'>AGE</h1>
                  <h1 className='text-black'>20 years</h1>
              </div>
              <div className='w-[33%] mt-3 pl-3'>
                  <h1 className='text-gray-500'>Gender</h1>
                  <h1 className='text-black'>Male</h1>
              </div>
              <div className='w-[33%] mt-3 pl-3'>
                  <h1 className='text-gray-500'>PHONE</h1>
                  <h1 className='text-black'>20 years</h1>
              </div>
              <div className='w-[33%] mt-3 pl-3'>
                  <h1 className='text-gray-500'>Disablility</h1>
                  <h1 className='text-black'>Blind</h1>
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
              <FaDownload className="mr-2" />
              Download Resume
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
    }
    

    const renderContent = () => {
      if (isCandidate) {
        return <div>{display(data)}</div>;
      } else {
        navigate("/candidate/login");
        return null; // or render a loading state while navigating
      }
    };
    
    return(
       <>{renderContent()}</>
    );
}

export default Profile