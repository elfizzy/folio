import React from 'react';
// import Typewriter from "typewriter-effect";



const Expe = () => {
  return (
    <>
      <div className="writer">
      {/* <Typewriter */}
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("Hello!!! and welcome to my portfolio")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString("I'm an inquisitive Frontend Web Developer with a Degree in Computer Science.")
       .pauseFor(1000)
       .deleteAll()
       .typeString("I derive joy from building responsive web application. I leverage on technologies including  Javascript, React.js, HTML5, CSS3 and Node.js")
       .pauseFor(1000)
       .deleteAll()
       .typeString("I am ABDULHAFIZ IBRAHIM")

       .start();
       }}
       />
    </div>
    </>
  )
}

export default Expe
