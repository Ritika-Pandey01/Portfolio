import React from 'react';
import './experience.css';

function Experience() {

  return (
    <div className='bodyExp'>

      <h1>EXPERIENCE </h1>

      <div className='line'></div>

      <div className='experience'>
        <ul>

          <li>
            <h3 className='title'><span className='pingsafeImg'></span>Frontend Developer Intern</h3>
            <p>Working on various communication channels for delivering user oriented responses for our product. Working with HTML Email as well.</p>

            <span className='date'>Aug, 2022 - Present </span>
          </li>
          <li>
            <h3 className='title'><span className='pingsafeImg'></span>Cloud Security Solutions Engineer Intern</h3>
            <p>Researched and documented various security vulnerabilities in
              the AWS and Azure cloud infrastructure.
              Tested existing plugins made using Node.js and reported edge
              cases to avoid failures.
              Researched, identified and removed various cloud misconfigurations.</p>
            <span className='circle'></span>
            <span className='date'>Oct, 2021 - March, 2022 </span>
          </li>
        </ul>
        <div className='line v'></div>
        <div className='volunteer'>
        <h1>VOLUNTEER</h1>
        <div className='line v'></div>
        <div className='containerVol'>

       
          <div className='wicys'>
          <h3>WiCYs</h3>
            <p>Took part in monthly meetups.
              Actively participated in activities organized by mentor.</p>
          </div>
          <div className='null'>
          <h3>Null:The Open Source Community</h3>
            <p>Documented the projects and events of different chapters of
              Null.
              Published Monthly Newsletters for the Community.</p>
          </div>
          </div>


        </div>
      </div>

    </div>
  )
}

export default Experience
