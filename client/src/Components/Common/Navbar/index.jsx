import React, { useEffect, useState } from "react";
import { FaBars, FaCaretDown } from "react-icons/fa";
import Logo from "../../../assets/logo_white2.png";
import { Link } from "react-router-dom";
import {AiOutlineArrowLeft,AiOutlineMail,AiOutlineUnorderedList} from "react-icons/ai"


const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Jobs", link: "/jobs" },
    // { name: "Job listings", link: "/news" },
    { name: "Contact", link: "#contact" },
  ];

  let [open, setOpen] = useState(false);
  let [joinOpen, setJoinOpen] = useState(false);
  let [name,setName]=useState();
  useEffect(() => {
    let Name=localStorage.getItem("name");
    setName(Name);
  }
  ,[name])
  let [role,setRole]=useState();
  useEffect(() => {
    let Role=localStorage.getItem("role");
    setRole(Role);
  }
  ,[role])
  

  return (
    <section id="navbar" className="z-50 shadow-md w-full fixed top-0 left-0 bg-[#43b18d]">
      <div className="md:flex items-center justify-between bg-theme py-2 xl:px-16 px-6 md:px-12">
        <div className="cursor-pointer">
          <Link to ="/">
          <img
            className="w-[210px] md:w-[23px] xl:w-[100px] h-auto"
            src={Logo}
            alt="Logo"
          />
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl text-white absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <FaBars name={open ? "close" : "menu"}></FaBars>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 font-defaultFont absolute md:static md:z-auto z-[-1] left-0 bg-[#43b18d] w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 bg-theme " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="lg:ml-8 md:ml-4 sm:tracking-tighter md:text-[10px] lg:text-[11px]  xl:text-lg font-normal xl:tracking-wider leading-5 md:my-0 my-7"
            >
              <a
                href={link.link}
                className="hover:underline hover:delay-1000 transition-transform ease-in-out scale-x-0 hover:scale-x-1 underline-offset-8 decoration-[#F9F7F7] text-[#F9F7F7] hover:text-gray-300 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <div >
            {name?
            <button
            className="bg-theme md:text-[9px]  xl:text-[15px] font-normal tracking-wider leading-5 text-[#F9F7F7] hover:text-theme border-[#F9F7F7] border-2 font-defaultFont px-5 py-1 rounded md:ml-8 hover:bg-[#F9F7F7]
    duration-500"
          >
            {
              role=="student"?
              <Link to="/student/profile">
              {name}
              </Link>:
              <Link to="/alumni/profile">
              {name}
              </Link>
            }
            
          </button>:
          <button onClick={() => setJoinOpen(!joinOpen)}
          className="ml-4 flex border border-1 ease-in-out duration-300 border-[#43b18d] hover:text-[#43b18d] items-center py-2 text-xl px-4 bg-[#43b18d] hover:bg-white text-white rounded"
        >
          Join Us
        </button>
          }
          
          
          {joinOpen && (
            <div className="w-[110px] absolute right-12 z-10 py-2 bg-[#f9f7f7]  text-theme rounded-lg mt-2">
              <Link to="/organisation/register" className="block px-2 py-1   hover:bg-[#dbe2ef]">
                As Recruiter
              </Link>
              <Link to="/candidate/register" className="block px-2 py-1 hover:bg-[#dbe2ef]">
              As Applicant
              </Link>
            </div>
          )}
            </div>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
