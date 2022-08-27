import React from 'react';
import "./home.css";
import myPhoto from "../../assets/photo.png"
function Home() {
  return (
    <>
      <div className="bg"></div>
<div className="bg bg1"></div>
<div className="bg bg2"></div>
<div className="content">

  <div class="flex-item-left">
  <div id='intro'>
    <h1>Hi!</h1>
    <h1> I'm Ritika</h1>
    </div>
  </div>
  <div class="flex-item-right">
  <div className="imageP">
  <img src={myPhoto} alt="Image"/>
  </div>
  </div>

</div>
    </>
  )
}

export default Home
