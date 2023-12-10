import './AboutUs.css'
import aboutusimage from "/src/image/YifanYuan.jpg";

function AboutUs() {

  return (
    
    
  
     <main id="main" className= "aboutus__page">
   
      <h2 className= "aboutus__title"> About Us</h2>
      <h3 className= "aboutus__subtitle">Yifan Yuan</h3>
      <img className="aboutus__image" alt="man with sunglass stand by the river" src={aboutusimage}/ > 
      
       <p className="aboutus__text">Now Studying MS in Software Engineer System in NEU.
Previous Finished BS in Computer Science In Auburn University, Learned Skiles with Java, Algorithms, OS. Had internship using C++, C# with CAD in Zhongwang Longteng Software Co. C# development in Global Technology Specialist Partners.
study and love Front-end now. look forward to become an excellent Software engineer</p>
        

    </main>

    

  );
}

export default AboutUs;
