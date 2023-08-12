import React from 'react';
import WorkIcon from '@mui/icons-material/Work';
import DescriptionIcon from '@mui/icons-material/Description';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ConstructionIcon from '@mui/icons-material/Construction';
import { useState } from 'react';
import "./style.css"

const PostJob = () => {

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

  const [disabil, setDisability] = useState("");
  const [skill, setSkill] = useState("");
  const [industry, setIndustry] = useState("");

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
                />
              </div>
              <div className='description'>
                <DescriptionIcon />
                <input
                  type="text"
                  placeholder="Job Description"
                  required
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
                  />
              </div>
              <div className='salary'>
                  <AttachMoneyIcon />
                  <input
                    type="text"
                    placeholder="Salary"
                    required
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
            <div className='responsibility'>
              <div className="select-label"></div>
              <ConstructionIcon />
              <div className="select-container">
                <select onChange={(e) => setSkill(e.target.value)}>
                  <option value="">Choose Skills</option>
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