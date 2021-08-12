import React, {useEffect} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaGithub,FaGlobe} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";


const Projects = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3
  // };
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed:3000,
    autoplaySpeed:3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pushOnHover:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    Aos.init({duration:2000})
   
  }, [])
  return (
    
   <>
    <section id="projects">
      <h1>Projects</h1>
      <div className="container">
          {/* <Slider> */}
      
        <div className="box2" data-aos="fade-up">
          <div>
            <img src="./fit.webp" alt=""/>
            <h3>Builder's Gym</h3>
            <p>A fitness center web application with access to nutritionist and an online shop for sport equipment and wears</p>
          </div>
            <div>
            <a href="https://github.com/elfizzy/Builders-Gym" target="_blank"  rel="noreferrer noopener"><FaGithub  className="projectFa" /></a>
            <a href="https://buildersg.surge.sh" target="_blank"  rel="noreferrer noopener"><FaGlobe className="projectFa"/></a>
            </div>
          </div>

          <div className="box2" data-aos="fade-up">
          <div>
            <img src="./eaze.webp" alt=""/>
            <h3>Eaze SME</h3>
            <p>An application that aim at breaching the gap between investors and Small Medium Enterprises (SME)  by providing a transparent platform that is trustworthy</p>
          </div>
      
          <div>
            <a href="https://github.com/BuildForSDG/Team-028-Product" target="_blank"  rel="noreferrer noopener"><FaGithub  className="projectFa" /></a>
            <a href="https://eazsme-frontend.herokuapp.com/" target="_blank" rel="noreferrer noopener"> <FaGlobe className="projectFa"/></a>
          </div>
      </div>

          <div className="box2" data-aos="fade-up">
            <img src="./build.webp" alt="" />
            <h3>Yin-Yeng Engineers </h3>
            <p>A landing page for an Engineering company</p>
          <div>
            <a href="https://github.com/elfizzy/Yin-Yen-Engineers" target="_blank"  rel="noreferrer noopener"><FaGithub className ="projectFa" /></a> 
            <a href="#"><FaGlobe className="projectFa"/></a>
            </div>
        </div>
        {/* </Slider> */}
      </div>     
      <button>View More</button>
    </section>
  </>
  )
}

export default Projects
