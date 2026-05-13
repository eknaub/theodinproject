import { useState } from "react";
import { CVEditWrapper } from "../CVEditWrapper";
import "../styles/cvEdit.css";
import { useCVContext } from "../../../context/CVProvider";
import { EducationForm } from "./EducationForm";

export function Education() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const {
    cvData,
    editingEducationIndex,
    handleEditEducation,
    toggleEducationVisibility,
    handleAddEducation,
  } = useCVContext();

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <CVEditWrapper>
      <div className="educationHeader">
        <h2>Education</h2>
        <button
          onClick={toggleExpand}
          className={`iconButton ${isExpanded ? "rotate" : ""}`}
        >
          ▼
        </button>
      </div>
      {isExpanded && (
        <div className="educationContent">
          {editingEducationIndex === null ? (
            <>
              <ul className="educationList">
                {cvData.education.map((edu, index) => (
                  <li
                    key={index}
                    className="educationItem"
                    onClick={() => handleEditEducation(index)}
                  >
                    <span>{edu.institution}</span>
                    <div className="educationActions">
                      <button
                        className="eyeButton"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleEducationVisibility(index);
                        }}
                      >
                        {edu.isVisible ? "👁️" : "🙈"}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                className="addEducationButton"
                onClick={handleAddEducation}
              >
                + Education
              </button>
            </>
          ) : (
            <EducationForm />
          )}
        </div>
      )}
    </CVEditWrapper>
  );
}
