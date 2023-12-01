import React from "react";
import { skills } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCode,
  faDatabase,
  faCogs,
  faMobileAlt,
  faGlobe,
  faProjectDiagram,
  faTools,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  const icons = {
    programming: faCode,
    webDevelopment: faGlobe,
    machineLearningAI: faCogs,
    androidDevelopment: faMobileAlt,
    otherSkills: faTools,
    databases: faDatabase,
  };

  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center">
          <FontAwesomeIcon icon={faProjectDiagram} className="w-10 inline-block" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-3">
            Skills &amp; Technologies
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {Object.entries(skills).map(([category, categorySkills], index) => (
            <div key={category} className="w-full mb-6">
              <h2 className="text-xl font-semibold mb-2 text-white">
                {category
                  .split(/(?=[A-Z])/)
                  .map((word) => word.toUpperCase())
                  .join(" ")}
              </h2>
              <div className="flex flex-wrap">
                {Array.isArray(categorySkills) ? (
                  categorySkills.map((skill) => (
                    <div key={skill} className="p-2 w-1/2 sm:w-1/3 lg:w-1/4">
                      <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                        <FontAwesomeIcon
                          icon={icons[category.toLowerCase()] || faCheckCircle}
                          className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"
                        />
                        <span className="title-font font-medium text-white">{skill}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  Object.entries(categorySkills).map(([subCategory, subCategorySkills]) => (
                    <div key={subCategory} className="mb-2">
                      <h3 className="text-lg font-semibold mb-1 text-gray-300">
                        {subCategory
                          .split(/(?=[A-Z])/)
                          .map((word) => word.toUpperCase())
                          .join(" ")}
                      </h3>
                      <div className="flex flex-wrap">
                        {subCategorySkills.map((subSkill) => (
                          <div key={subSkill} className="p-2 w-1/2 sm:w-1/3 lg:w-1/4">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                              <FontAwesomeIcon
                                icon={icons[subCategory.toLowerCase()] || faCheckCircle}
                                className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"
                              />
                              <span className="title-font font-medium text-white">{subSkill}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </div>
              {index < Object.keys(skills).length - 1 && <hr className="border-gray-700 my-4" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
