import React from 'react';
import './experience.css';
import pingsafe from '../../assets/Pingsafe.jpeg';
import wicys from '../../assets/wicys.jpg';
import nullImg from '../../assets/null.jpeg';
function Experience() {

  return (
    <div className='bodyExp'>

      <h1>EXPERIENCE </h1>

      <div className='line'></div>

      <div className='experience'>
        <ul>

          <li>
            <span className='pingsafeImg'><img src={pingsafe} title='PingSafe'></img><h3 className='companyName'><a href='https://www.pingsafe.com/'>PingSafe</a></h3></span><h3 className='title'>Frontend Developer Intern</h3>
            <p>Working on various communication channels for delivering user oriented responses for our product. Working with HTML Email as well.</p>

            <span className='date'>Aug, 2022 - Present </span>
          </li>
          <li>
            <span className='pingsafeImg'><img src={pingsafe} title='PingSafe'></img><h3 className='companyName'><a href='https://www.pingsafe.com/'>PingSafe</a></h3></span><h3 className='title'>Cloud Security Solutions Engineer Intern</h3>
            <p>Researched and documented various security vulnerabilities in
              the AWS and Azure cloud infrastructure.
              Tested existing plugins made using Node.js and reported edge
              cases to avoid failures.
              Researched, identified and removed various cloud misconfigurations.</p>
            <span className='date'>Oct, 2021 - March, 2022 </span>
          </li>
        </ul>
        <div className='line v'></div>
        <div className='volunteer'>
        <h1>VOLUNTEER</h1>
        <div className='line v'></div>
        <div className='containerVol'>

       
          <div className='wicys'>
          <a href='https://www.wicys.org/'><img className='wicysImg' src={wicys}></img></a>
          
            <p>Took part in monthly meetups.
              Actively participated in activities organized by mentor.</p>
              <span className='date community'>Oct, 2021 - March, 2022 </span>
          </div>
          <div className='null'>
          <a href='https://null.community/'><img src={nullImg}></img></a>
            <p>Documented the projects and events of different chapters of
              Null.
              Published Monthly Newsletters for the Community.</p>
              <span className='date community'>Oct, 2021 - March, 2022 </span>
          </div>
          </div>


        </div>
      </div>

    </div>
  )
}

export default Experience
