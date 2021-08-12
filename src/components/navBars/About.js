import React from 'react';
import {FaLinkedin,FaGithub,FaTwitter,FaEnvelope} from "react-icons/fa"
import {Link} from "react-scroll";
import "../../App.css";

const About = () => {
  return (
    <>
  <section id="about">
    <h1 style={{color:"white"}} >ABDULHAFIZ IBRAHIM</h1>
    <div className="description conatiner">
      <div className="pic element">
          <img src={"./hack.webp"} alt=""/>
        <br/>
          <li> <a href="https://www.linkedin.com/in/abdulhafiz-ibrahim" rel="noreferrer noopener" target="_blank" ><FaLinkedin className="aboutFa"/></a></li>
          <li> <a href="https://www.github.com/elfizzy" rel="noreferrer noopener" target="_blank" ><FaGithub className="aboutFa"/></a></li>
          <li> <a href="https://twitter.com/Dcypher0" rel="noreferrer noopener" target="_blank" ><FaTwitter className="aboutFa"/></a></li>
          {/* <li> <a href="#contact"   data-value="contact"><FaEnvelope className="aboutFa"/></a></li> */}
          <li><Link to="contact" spy={true} smooth={true}><a href="#contact"   data-value="contact"><FaEnvelope className="aboutFa"/></a></Link></li>

      </div>
      <div className="disc">
        <p>I'm an inquisitive Frontend Web Developer with a Degree in Computer Science who derives joy 
          from building responsive web applications, making use of technologies such as React.js, Node.js, JavaScript
        </p>
      </div>
      {/* <div className="boxing ">
    <Exp/>
    </div> */}
    </div>
  </section>
    </>
  )
}

export default About
