import React from 'react';
import styled from 'styled-components';
import {Link} from "react-scroll";

const UL = styled.ul`
  justify-content: space-around;
  display: flex;
  list-style:none;
  flex-flow: row nowrap;
 
li {
  padding: 18px 10px;
  color: white;
  cursor:pointer;

  
}
a {
  list-style:none;
  text-decoration:none;
}
@media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({open}) => open ? 'translateX(0)': 'translateX(100%)'};
    top: 64px;
    right: 0;
    height: 100vh;
    width:64%;
    padding-top: 10px;
    transition: transform 0.3s ease-in-out;
    margin:0;
    padding:0;
    display: block;
    justify-content: space-around;
  

  li {
    color: #fff;
    border-bottom: 2px solid rgba(0, 0, 0, 0.3);
    font-size: 15px;
  }

}
`;

const RightNav = ({open}) => {
  return (
    <UL open={open}>
        {/* <li><Link to="home" spy={true} smooth={true}>Home</Link></li> */}
        <li><Link to="about" spy={true} smooth={true}>About</Link></li>
        <li><Link to="services" spy={true} smooth={true}>Skills</Link></li>
        <li><Link to="projects" spy={true} smooth={true}>Projects</Link></li>
        <li><Link to="Experience" spy={true} smooth={true}>Experience</Link></li>
        <li><Link to="contact" spy={true} smooth={true}>Contact</Link></li>
        
      </UL>
  )
}

export default RightNav
