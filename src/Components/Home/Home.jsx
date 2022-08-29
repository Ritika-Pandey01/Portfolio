import React from 'react';
import "./home.css";
import bg1 from "../../assets/bg1.png"
import bg2 from "../../assets/bg2.png"
import photo from "../../assets/image.png"
function Home() {
  return (
    <>
      
<div className="content">
<img className='bg1' src={bg1}/>


  <div className="flex-item-left">
  <div className='intro'>
    <h3>Hi! I'm Ritika</h3>
    </div>
    <h3 className='intro1'>I am a <span className='front'>Frontend Developer </span></h3>
    
  </div>
  <div className="flex-item-right">

  <img className='bg2' src={bg2}/>
  <img className="picture" src={photo}/>
  </div>

</div>
    </>
  )
}

export default Home
