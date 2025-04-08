import CommonComponent from "./commonsection/common";

const EducationComponent = () => {
  return (
    <CommonComponent>
      <EducationContainer />
    </CommonComponent>
  );
};

const educationDetails = [
  {
    title: "Master of Technology (SSP)",
    courseDuration: "2020 - 2022",
    instituteName: "JNTUH College of Engineering, Hyderabad",
    score: "CGPA 8.6",
    logo: "fas fa-graduation-cap",
    logoColor: "#925EE6",
  },
  {
    title: "Bachelor of Technology (ECE)",
    courseDuration: "2013 - 2017",
    instituteName: "CVR College of Engineering, Hyderabad",
    score: "Scored 80%",
    logo: "fas fa-graduation-cap",
    logoColor: "#925EE6",
  },
  {
    title: "Higher Secondary - Class XII",
    courseDuration: "2011 - 2013",
    instituteName: "St. Johns High School, Hyderabad",
    score: "Scored 96% in Inter board",
    logo: "fas fa-school",
    logoColor: "#65AD83",
  },
  {
    title: " SSC - Class X",
    courseDuration: "2011",
    instituteName: "Paramita High School",
    score: "Scored 90% in SSC board",
    logo: "fas fa-book",
    logoColor: "#365580",
  },
];

const EducationContainer = () => (
  <div className="container bg-education-section mt-5 py-md-5">
    <h2
      className="text-center mb-5"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      Education
    </h2>
    <div className="row mt-5 mt-md-0">
      {educationDetails.map((item, index) => (
        <div className="col-lg-4 mb-5" align="center" key={index}>
          {<EducationItem item={educationDetails[index]} />}
        </div>
      ))}
    </div>
  </div>
);

const EducationItem = ({ item }) => (
  <div
    className="college aos-removal-class"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="500"
  >
    <div className="circle_education">
      <i
        className={item.logo}
        style={{ fontSize: "3em", color: `${item.logoColor}` }}
      ></i>
    </div>
    <div className="para">
      <strong>
        <p className="fs-6 mt-3">{item.title}</p>
      </strong>
      <div className="date">{item.courseDuration}</div>
    </div>
    <p>{item.instituteName}</p>
    <div className="para_about">{item.score}</div>
  </div>
);

export default EducationComponent;
