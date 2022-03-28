import React from 'react';
import {VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import {FaGlobe, FaBriefcase} from "react-icons/fa";
import 'react-vertical-timeline-component/style.min.css';



export default function Experiance() {
 
  return (
     <>
    <section id="Experience">
    <h1>My Experiences</h1>
      
    <VerticalTimeline animate={true}>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33,  243 ,150 )'}}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="09/2021 - Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaBriefcase />}
     >
    <h3 className="vertical-timeline-element-title">Certified Cryptocurrency Investigator | Digital Forensics Specialist</h3>
    <h4 className="vertical-timeline-element-subtitle">A&D Forensics, No. 3 Rabat Street,Wuse Zone 6, Abuja,</h4>
    <p>
    Investigating cryptocurrency related crime using tools such as Chainalysis Reactor, QLUE, Crystal blockchain, etc. as well as other forensics task's.
    </p>
    <p></p>
   
  </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    // contentStyle={{ background: 'rgb(33,  243 ,150 )'}}
    // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="11/2020 - 7/2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaBriefcase />}
     >
    <h3 className="vertical-timeline-element-title">Web Developer | Ethical Hacking Instructor</h3>
    <h4 className="vertical-timeline-element-subtitle">Aptech Hardware And Networking Academy, Mabushi, Abuja,</h4>
    <p>
    Live pentesting,Scripting using Python,Security Triads CIA, Security Essentials
    </p>
    <p></p>
   
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="10/2020 - 1/2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaBriefcase  />}
>
    <h3 className="vertical-timeline-element-title">Web Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Bangeez Web Solutions, Kano, </h4>
    <p>
    User Interface Design,User Experience, SEO,CMS
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="4/2020 - 9/2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaBriefcase style={{color:""}} />}
  >
    <h3 className="vertical-timeline-element-title">Front-End Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Build for SDG challenge (Remote), Facebook | Andela</h4>
    <p>
      UI development,Endpoints connectivity, Password Strength indicator implementation, Admin Panel implementation
    </p>
  </VerticalTimelineElement>
  {/* <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="4/2019 - 7/2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaBriefcase/>}
  >
    <h3 className="vertical-timeline-element-title">Technical Assistant</h3>
    <h4 className="vertical-timeline-element-subtitle">Multi-Design Engineers, Kano</h4>
    <p>
      Hardware management, Software management,Audit
    </p>
  </VerticalTimelineElement> */}

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="1/2019 - 4/2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaBriefcase />}
  >
    
    <h3 className="vertical-timeline-element-title">Front-End Devloper(Intern)</h3>
    <h4 className="vertical-timeline-element-subtitle">Enovate Lab</h4>
    <p>
    UI/UX Design, Wordpress and CMS, Brainstorming sessions, Digital Marketing
    </p>
  
    
  </VerticalTimelineElement>
  
</VerticalTimeline>
    </section>
    
  </>
  )
}
// export default Experiance;