import React from 'react';
import './experience.css';

function Experience() {
  return (
    <div className='bodyExp'>
      <h1>EXPERIENCE </h1>
      <div className='experience'>
        <ul>
          <li>
            <h3 className='title'>Cloud Security Solutions Engineer Intern</h3>
            <p>Researched and documented various security vulnerabilities in
              the AWS and Azure cloud infrastructure.
              Tested existing plugins made using Node.js and reported edge
              cases to avoid failures.
              Researched, identified and removed various cloud misconfigurations.</p>
              <span className='circle'></span>
              <span className='date'>October,2021 - March,2022 </span>
          </li>
          <li>
            <h3 className='title'>Frontend Developer Intern</h3>
            <p>Working on various communication channels for delivering user oriented responses for our product. Working with HTML Email as well.</p>
              <span className='circle'></span>
              <span className='date'>August,2022 - Present </span>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Experience
