import React from "react";
import heroimage from "../../../assets/heroimage.png";
import { AiOutlineArrowLeft, AiOutlineMail } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
import img1 from '../../../assets/1.png';
import img2 from '../../../assets/2.png';
import img3 from '../../../assets/3.png';
import img4 from '../../../assets/4.png';
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="w-full">
      <div className="flex w-[80%] mx-auto mt-24">
        <section class="py-16 px-4  mt-[18vh] w-[100%]">
          <div class="container mx-auto">
            <h1 class="text-4xl font-semibold mb-4">Welcome to Your Company</h1>
            <p class="text-lg text-gray-600">
              Find the perfect job or hire the best talent with us.
            </p>
            <Link to="/candidate/login">
            <button className="mt-4 flex border border-1 ease-in-out duration-300 border-[#43b18d] hover:text-[#43b18d] items-center py-2 px-4 bg-[#43b18d] hover:bg-white text-white rounded">
              Sign in as Applicant
            </button>
            
            </Link>
            <Link to='/oganisation/login' >
            <button className="mt-4 flex border border-1 ease-in-out duration-300 border-[#43b18d] hover:text-[#43b18d] items-center py-2 px-4 bg-[#43b18d] hover:bg-white text-white rounded">
              Sign in as Recruiter
            </button>
            </Link>
          </div>
        </section>
        <div>
          <img src={heroimage} className="w-full mx-auto" alt="" />
        </div>
      </div>
      <div className="md:flex justify-between w-[80%] mx-auto mt-24">
        <div className=" w-[80%] mt-4 md:w-[23%] px-2">
            <img src={img1} className="w-24 h-[80px]" alt="" />
            <h1 className="text-lg mt-2 font-[100]">Search Millions of Jobs</h1>
            <h1 className="mt-1 text-gray-400">A small river named Duden flows by their place and supplies.</h1>
        </div>
        <div className=" w-[80%] mt-4 md:w-[23%] px-2">
            <img src={img2} className="w-[80px] h-[80px]" alt="" />
            <h1 className="text-lg mt-2 font-[100]">Easy To Manage Jobs</h1>
            <h1 className="mt-1 text-gray-400">A small river named Duden flows by their place and supplies.</h1>
        </div>
        <div className=" w-[80%] mt-4 md:w-[23%] px-2">
            <img src={img3} className="w-[80px] h-[80px]" alt="" />
            <h1 className="text-lg mt-2 font-[100]">Top Careers</h1>
            <h1 className="mt-1 text-gray-400">A small river named Duden flows by their place and supplies.</h1>
        </div>
        <div className=" w-[80%] mt-4 md:w-[23%] px-2">
            <img src={img4} className="w-[80px] h-[80px] " alt="" />
            <h1 className="text-lg mt-2 font-[100]">Search Expert Candidates</h1>
            <h1 className="mt-1 text-gray-400">A small river named Duden flows by their place and supplies.</h1>
        </div>

      </div>
    </div>
  );
};

export default index;
