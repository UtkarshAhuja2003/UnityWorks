// import React from 'react';
// import WorkIcon from '@mui/icons-material/Work';
// import DescriptionIcon from '@mui/icons-material/Description';
// import TaskAltIcon from '@mui/icons-material/TaskAlt';
// import AssistWalkerIcon from '@mui/icons-material/AssistWalker';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import ConstructionIcon from '@mui/icons-material/Construction';
// import { useState } from 'react';
// import "./style.css";
// import axios from 'axios';
// import { text } from 'express';

// const PostJob = () => {

//   const [disabilities, setDisabilities] = useState(["Blind", "Handicap"]);
//   const [skills, setSkills] = useState(["xyz", "xyz2"]);
//   const [disabil, setDisability] = useState("");
//   const [skill, setSkill] = useState("");
//   const [industry, setIndustry] = useState("");
//   const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");
//   const [responsibility, setResponsibility] = useState("");
//   const [salary, setSalary] = useState("");

//   const industries = [
//     "Information Technology",
//     "Sell"
//   ]

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/v1/jobsPost', {
//         title,
//         desc,
//         responsibility,
//         skills: [skill], // Convert to an array of objects if needed
//         disabilities: [disabil], // Convert to an array of objects if needed
//         // lowerSalary: parseInt(salary), // Convert to number if needed
//         // upperSalary: parseInt(salary), // Convert to number if needed
//         jobType: industry,
//       });
//       console.log('Job posted:', response.data);
//       // Reset the form or perform other actions after successful posting
//     } catch (error) {
//       console.error('Error posting job:', error);
//     }
//   };

//   return (
//     <form className="form-container" onSubmit={handleSubmit}>
//         <div>
//             <h1>Post a Job</h1>
//             <div className='job'>
//               <div className='jobTitle'>
//                 <WorkIcon />
//                 <input
//                   type="text"
//                   placeholder="Job Title"
//                   required
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                 />
//               </div>
//               <div className='description'>
//                 <DescriptionIcon />
//                 <input
//                   type="text"
//                   placeholder="Job Description"
//                   required
//                   value={desc}
//                   onChange={(e) => setDesc(e.target.value)}
//                 />
//               </div>
//               <div className='category'>
//                   <TaskAltIcon />
//                   <select onChange={(e) => setSkills(e.target.value)}>
//                     <option value="">Choose Skills</option>
//                     {skills.map((skll) => (
//                       <option key={skll} value={skll}>
//                         {skll}
//                       </option>
//                     ))}
//                   </select>
//               </div>
//               <div className='responsibility'>
//                   <input
//                     type="text"
//                     placeholder="Responsibility"
//                     required
//                     value={responsibility}
//                     onChange={(e) => setResponsibility(e.target.value)}
//                   />
//               </div>
//               <div className='salary'>
//                   <AttachMoneyIcon />
//                   <input
//                     type="text"
//                     placeholder="Salary"
//                     required
//                     value={salary}
//                     onChange={(e) => setSalary(e.target.value)}
//                   />
//               </div>
//               <div className='responsibility'>
//                 <AssistWalkerIcon />
//                 <div className="select-container">
//                   <select onChange={(e) => setDisabilities(e.target.value)}>
//                     <option value="">Choose Disability</option>
//                     {disabilities.map((des) => (
//                       <option key={des} value={des}>
//                         {des}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//             </div>
//             <div className='responsibility'>
//               <div className="select-label"></div>
//               <ConstructionIcon />
//               <div className="select-container">
//                 <select onChange={(e) => setIndustry(e.target.value)}>
//                   <option value="">Choose Industry</option>
//                   {industries.map((des) => (
//                     <option key={des} value={des}>
//                       {des}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </div>
//         </div>
//         <button type="submit">Submit!</button>
//     </form>
//   )
// }

// export default PostJob;