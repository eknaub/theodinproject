import { useState } from "react";
import { CVEditWrapper } from "../CVEditWrapper";
import "../styles/cvEdit.css";
import { useCVContext } from "../../../context/CVProvider";
import { ExperienceForm } from "./ExperienceForm";

export function Experience() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const {
    cvData,
    editingExperienceIndex,
    handleEditExperience,
    toggleExperienceVisibility,
    handleAddExperience,
  } = useCVContext();

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <CVEditWrapper>
      <div className="experienceHeader">
        <h2>Experience</h2>
        <button
          onClick={toggleExpand}
          className={`iconButton ${isExpanded ? "rotate" : ""}`}
        >
          ▼
        </button>
      </div>
      {isExpanded && (
        <div className="experienceContent">
          {editingExperienceIndex === null ? (
            <>
              <ul className="experienceList">
                {cvData.experience.map((exp, index) => (
                  <li
                    key={index}
                    className="experienceItem"
                    onClick={() => handleEditExperience(index)}
                  >
                    <span>{exp.company}</span>
                    <div className="experienceActions">
                      <button
                        className="eyeButton"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExperienceVisibility(index);
                        }}
                      >
                        {exp.isVisible ? "👁️" : "🙈"}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                className="addExperienceButton"
                onClick={handleAddExperience}
              >
                + Experience
              </button>
            </>
          ) : (
            <ExperienceForm />
          )}
        </div>
      )}
    </CVEditWrapper>
  );
}
