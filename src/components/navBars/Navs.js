import React from 'react';
import Burger from "./Burger";
import styled from 'styled-components';
import zIndex from '@material-ui/core/styles/zIndex';

const Nav = styled.nav`
width: 100%;
height: 65px;
display: flex;
background: #262626;
border-bottom: 2px solid #f1f1f1;
padding: 3px 20px;
justify-content: space-between;

.logo {
  
// position: fixed;
padding: 15px 0;
}

.logo span {
  border-right: #e8563e 3px solid;
  padding-right: 3px;
}
.logo a {
  color:white;
}
`

const Navs = () => {
  return (
    //has a class of nav
    <div style={{position:"fixed", width:"100%", zIndex:"1"}}>
      <Nav className=""> 
      <div className="logo">
     <a href="#"><span>Abdulhafiz</span> tech<i>.portfolio();</i></a>
        {/* LOGO */}
      </div>
      <Burger />
      </Nav>
    </div>
    
  )
}

export default Navs
