import React from 'react';
import WorkIcon from '@mui/icons-material/Work';
import DescriptionIcon from '@mui/icons-material/Description';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ConstructionIcon from '@mui/icons-material/Construction';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css"

const PostJob = () => {
const navigate = useNavigate()
  const disabilities = [
    "Blind",
    "Handicap"
  ];

  const industries = [
    "Information Technology",
    "Selling"
  ];

  const skills = [
    "xyz",
    "xyz2"
  ];
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [salary, setSalary] = useState("");
  const [responsibility, setResponsibility] = useState("");
  const [disabil, setDisability] = useState("");
  const [skill, setSkill] = useState("");

  function postData() {
      fetch("http://localhost:5000/api/v1/jobsPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
          // "Authorization": "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          title,
          desc,
          salary,
          responsibility,
          disability: disabil,
          skill
        }),
      })
      .then(() => {
        console.log(title);
        alert("Event Posted Successfully")
        navigate("/jobs");
      })
      .catch((error) => {
        console.error("Error posting event:", error);
      });
  };


  return (
    <form className="form-container" action="submit">
        <div>
            <h1>Post a Job</h1>
            <div className='job'>
              <div className='jobTitle'>
                <WorkIcon />
                <input
                  type="text"
                  placeholder="Job Title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className='description'>
                <DescriptionIcon />
                <input
                  type="text"
                  placeholder="Job Description"
                  required
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
              <div className='category'>
                  <TaskAltIcon />
                  <select onChange={(e) => setSkill(e.target.value)}>
                    <option value="">Choose Skills</option>
                    {skills.map((skll) => (
                      <option key={skll} value={skll}>
                        {skll}
                      </option>
                    ))}
                  </select>
              </div>
              <div className='responsibility'>
                  <input
                    type="text"
                    placeholder="Responsibility"
                    required
                    value={responsibility}
                    onChange={(e) => setResponsibility(e.target.value)}
                  />
              </div>
              <div className='salary'>
                  <AttachMoneyIcon />
                  <input
                    type="text"
                    placeholder="Salary"
                    required
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                  />
              </div>
              <div className='responsibility'>
                <AssistWalkerIcon />
                <div className="select-container">
                  <select onChange={(e) => setDisability(e.target.value)}>
                    <option value="">Choose Disability</option>
                    {disabilities.map((des) => (
                      <option key={des} value={des}>
                        {des}
                      </option>
                    ))}
                  </select>
                </div>
            </div>
          </div>
        </div>
        <button type="button">Submit!</button>
    </form>
  )
}

export default PostJob