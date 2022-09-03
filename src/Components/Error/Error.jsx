import React from 'react'
import error from "../../assets/404-error.png"
import "./error.css"
function Error() {
  return (
    <>
    <h1>The page that you are looking for doesn't exist!</h1>
      <img src={error} alt="Error 404!!"/>
    </>
  )
}

export default Error;
