import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import CommonComponent from "./commonsection/common";
import sribhashyam_rithvik_pic from "./images/sunnyrithvik.png";
import { getAllProjectCategory } from "./project/helper/api_call";

const HomeComponent = () => {
  return <CommonComponent>{<MiddleSection />}</CommonComponent>;
};

const MiddleSection = () => {
  // As backend sometime sleeps, that's for trigger so that Projects and Certificate section loads faster
  useEffect(() => {
    fetchAllProjectCategory();
  }, []);

  const fetchAllProjectCategory = () => {
    getAllProjectCategory();
  };

  return (
    <div className="container bg-home-section" align="center">
      <img
        src={sribhashyam_rithvik_pic}
        alt="Sribhashyam Rithvik Logo"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="1000"
        className="h-25 img-fluid rounded-circle"
      />
      <h3
        className="display-5 fw-bold home-page-my-name mt-2 aos-removal-class"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Sribhashyam Rithvik
      </h3>
      <h6
        className="home-page-status aos-removal-class"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {/* What you seek is seeking you */}
      </h6>
      <AutoTypingHelper />
    </div>
  );
};

const AutoTypingHelper = () => {
  return (
    <div
      className="auto-typing aos-removal-class"
      data-aos="zoom-in"
      data-aos-duration="2000"
      data-aos-delay="1000"
      style={{ color: "#000000" }}
    >
      <Typewriter
        options={{
          strings: [
            "Developer From India",
            "I am a full-time Software Developer",
            "Enthusiastic to learn Data Science, AI and ML",
            "Works on full stack Web Development",
            "Lives with ChatGPT 😉",
          ],
          autoStart: true,
          loop: true,
          delay: 40,
          deleteSpeed: 20,
          typeSpeed: 40,
        }}
      />
    </div>
  );
};

export default HomeComponent;
