import { useState } from "react";
import CommonComponent from "./commonsection/common";
import CustomSkeleton from "./helper/customskeleton";

const SkillSetComponent = () => {
  const skillDataSet = {
    Frontend: {
      category: 3,
      all_categories: {
        Web: [
          "HTML5",
          "CSS3",
          "Javascript",
          "React.js",
          "Next.js",
          "Bootstrap",
          "Tailwind CSS",
          "Material UI",
        ],
        Mobile: ["Flutter"],
        // "State Management": ["Redux", "Provider"],
      },
    },
    Backend: {
      category: 1,
      all_categories: {
        Backend: ["Node.js", "Express.js", "REST APIs", "Flask"],
        // Mobile: ["Flutter"],
      },
    },
    "Data Science": {
      category: 1,
      all_categories: {
        "Data Science": ["Pandas", "Numpy", "seaborn", "matplotlib"],
      },
    },
    Database: {
      category: 1,
      all_categories: {
        Database: ["MySQL", "MongoDB", "SQLite"],
      },
    },
    "Tools Used": {
      category: 1,
      all_categories: {
        "Tools Used": ["NPM", "Github", "next.JS"],
      },
    },
    "Other Skills": {
      category: 1,
      all_categories: {
        "Other Skills": ["Analytical Skills", "Problem Solving"],
      },
    },
  };

  // const defaultItemsGrid = () => (Object.keys(skillDataSet).length > 0 ? 3 : 1);
  // const midItemsGrid = () => (Object.keys(skillDataSet).length > 0 ? 2 : 1);

  // const breakpointColumnsObj = {
  //   default: defaultItemsGrid(),
  //   1100: midItemsGrid(),
  //   500: 1,
  // };

  return (
    <CommonComponent>
      {(skillDataSet && <SkillSetSection skillDataSet={skillDataSet} />) || (
        <CustomSkeleton />
      )}
    </CommonComponent>
  );
};

const SkillSetSection = ({ skillDataSet }) => {
  return (
    <div className="container mt-5">
      <h2
        className="text-center mb-5"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        Skill Set
      </h2>
      <div className="row justify-content-center">
        {Object.keys(skillDataSet).map((key, index) => {
          return (
            <div className="col-md-6 col-lg-4" key={index}>
              <SkillContainer
                skillSingleSet={skillDataSet[key]}
                mainTechSkillName={key}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const SkillContainer = ({ skillSingleSet, mainTechSkillName }) => {
  return (
    <div
      className="card w-100 skill-set-card mb-5 mx-md-3 list-group aos-removal-class"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-delay="800"
    >
      <p className="card-header text-center skill-card-header text-white">
        {mainTechSkillName}
      </p>

      {skillSingleSet.category >= 2 ? (
        <ManySkillTypeCollection
          allTypeSkillsCollection={skillSingleSet.all_categories}
        />
      ) : (
        <div className="card-body my-auto">
          <SkillShow
            allCategories={
              skillSingleSet.all_categories[`${mainTechSkillName}`]
            }
          />
        </div>
      )}
    </div>
  );
};

const ManySkillTypeCollection = ({ allTypeSkillsCollection }) => {
  const [currIndex, setcurrIndex] = useState(0);

  const getCardActivationStatusNavItem = (index) => {
    if (index === currIndex) {
      return "nav-link active text-black border-0 mb-1";
    } else {
      return "nav-link border-0";
    }
  };

  const getCardActivationStatusTabPane = (index) => {
    if (index === currIndex) {
      return "tab-pane active";
    } else {
      return "tab-pane";
    }
  };

  return (
    <>
      <div className="card-header domain-options">
        <ul
          className="nav nav-tabs card-header-tabs text-center justify-content-center"
          id="bologna-list"
          role="tablist"
        >
          {Object.keys(allTypeSkillsCollection).map((key, index) => {
            return (
              <li
                className="nav-item"
                key={index}
                onClick={() => setcurrIndex(index)}
              >
                <a
                  className={getCardActivationStatusNavItem(index)}
                  aria-current="true"
                  href="#domain-navigation-tab"
                  style={{ borderRadius: "12px" }}
                >
                  {key}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="card-body">
        {Object.keys(allTypeSkillsCollection).map((key, index) => {
          return (
            <div className="tab-content mt-3" id="myTabContent" key={index}>
              <div
                className={getCardActivationStatusTabPane(index)}
                id="description"
                role="tabpanel"
                aria-labelledby={index}
              >
                <div className="card-text">
                  <SkillShow allCategories={allTypeSkillsCollection[key]} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const SkillShow = ({ allCategories }) => {
  return (
    <ol className="list-unstyled d-flex flex-wrap align-items-center justify-content-center">
      {allCategories.map((category, index) => {
        return (
          <li
            key={index}
            className="mx-5 mb-3 px-2 text-white"
            style={{
              background: "#19E738",
              borderRadius: "10px",
              letterSpacing: "1px",
            }}
          >
            {category}
          </li>
        );
      })}
    </ol>
  );
};

export default SkillSetComponent;
