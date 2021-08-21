import React from 'react';
import {MdLaptopMac, MdSecurity} from "react-icons/md";
import {IoIosBrush} from "react-icons/io";

const Services = () => {
  return (
    <>
      <section id="services">
      <h1>Skills</h1>
      <div className="container">
        <div className="box">
          <MdLaptopMac className="iconss" />
          <h3>Web Development</h3>
          <p>I love the idea of bringing things to life, so i build Web Application
             focusing mostly on the Front end using React.js, Node.js, JavaScript, Styled Component 
             and a host of others</p>
        </div>

      <div className="box">
        <MdSecurity className="iconss" />
        <h3>Cyber Security/Penetration Testing </h3>
        <p>Securing web application and finding vulnerabilities as well as
           general ethical hacking has always been something i love doing,some of my 
           tools include Burpsuite, OwaspZap,Metasploit,Maltego etc.</p>
      </div>

      <div className="box"> 
        <IoIosBrush className="iconss" />
        <h3>Graphics Design</h3>
        <p>In my spare time, I try out my creativity with Graphic Designs 
          and illustrations using Photoshop and Inkskape</p>
      </div>

     
    </div>
  </section>

    </>
  )
}

export default Services
