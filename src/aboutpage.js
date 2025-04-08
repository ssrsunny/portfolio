import Typewriter from "typewriter-effect";
import CommonComponent from "./commonsection/common";

const AboutComponent = () => {
  return (
    <CommonComponent>
      <AboutPage />
    </CommonComponent>
  );
};

const AboutPage = () => {
  return (
    <div className="container mt-3 about-page">
      <h2 className="text-center" data-aos="zoom-in" data-aos-duration="1000">
        About Myself
      </h2>
      <p
        className="mt-4 about-me"
        data-aos="fade-out"
        data-aos-duration="2000"
        data-aos-delay="800"
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `Myself <a href="https://www.linkedin.com/in/rithvik-sribhashyam/" target="_blank">Sribhashyam Rithvik</a>, Software Developer from
                  Hyderabad, India. Working with Front-end and MERN technologies with having a great passion for learning
                  new technologies.<br /><br />
  
                  Interested in Data Science, Machine Learning and Deep Learning and have deep interest in AI applications. 
                  Working as a full-time Full Stack Web Developer in a startup. Beside that, working on some of my personal projects and learning new technologies.`
              )
              .start();
          }}
          options={{
            delay: 20,
            typeSpeed: 40,
          }}
        />
      </p>
    </div>
  );
};

export default AboutComponent;
