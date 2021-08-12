import React, { Component } from 'react';
import {FaRegCopyright} from "react-icons/fa";
import * as emailjs from "emailjs-com";
import {Alert }from "@material-ui/lab"


 
export default class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:"",
      subject:"",
      email:"",
      message:"",
      submitted:false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const {name, subject, email, message,} = this.state;
    const templateParams = {
      from_name : name,
      from_email: email,
      to_name : 'Abdulhafiz',
      subject,
      message_html: message,
     
    };
    emailjs.send(
      'service_1avfgma',
      'template_fbputzj',
      templateParams,
      'user_8hvRhraBRIWyEFpIAno3X'
    )
    
    // this.resetForm();
    this.successMessage();

  }
  successMessage(){
    this.setState({
      submitted : true
      
  })
  // setTimeout(()=>{
  //   this.setState({
  //     submitted:false
  //   })
  // }, 2000)
}

  resetForm() {
    this.setState({
      name: "",
      subject: "",
      email: "",
      message: ""
  
    });
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  


  render() {
   
    const {name,subject,email, message,submitted} = this.state;
    // const {}
    return (
      <>
      <section className="section2" id="contact">
        {/* {<div style={{width:"18%",background:"wheat",position:"center",float:"right", animationDuration:"2s",transition:"ease-in 3s"}}><Alert className="mobile" severity="success">Message sent! Thanks.</Alert></div>} */}
      <form onSubmit= {this.handleSubmit}>
          <h1 style={{color:"white"}} >Get in touch, use the form below!</h1>
          <input type="text" name="name" placeholder="Name*" value={name} onChange={this.handleChange} style={{fontSize:"20px"}} required/>
          <input type="email" name="email" value={email} onChange={this.handleChange} placeholder="E-Mail*" style={{fontSize:"20px"}} required/><br/>
          <input type="text" name="subject" value={subject} onChange={this.handleChange} placeholder="Subject*" style={{fontSize:"20px"}} required/><br/>
          <textarea type="text" name="message" value={message} onChange={this.handleChange} id="" cols="30" rows="10" placeholder="Message" style={{fontSize:"20px"}} required></textarea><br/>
          <button type="submit">Submit</button>
      </form>
    </section>
    <footer>Copyright <FaRegCopyright/> 2021 | Dcypher-Tech </footer>
        
      </>
    )
  }
}

