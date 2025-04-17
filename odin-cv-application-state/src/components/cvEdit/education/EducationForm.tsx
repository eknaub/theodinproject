import { useState } from "react";
import { useCVContext } from "../../../context/CVProvider";
import "../styles/cvEdit.css";
import { Education } from "../../../utils/interfaces";

export function EducationForm() {
  const {
    cvData,
    editingEducationIndex,
    handleCancelEducation,
    handleDeleteEducation,
    handleSaveEducation,
  } = useCVContext();

  const isNew = editingEducationIndex === -1;

  const getInitEducation = () => {
    if (editingEducationIndex === null) return null;

    if (isNew)
      return {
        institution: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
        isVisible: true,
      } as Education;
    return cvData.education[editingEducationIndex];
  };

  const [education, setEducation] = useState<Education | null>(
    getInitEducation()
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEducation((prev) => {
      if (!prev) return null;
      return { ...prev, [name]: value };
    });
  };

  if (!education) return null;

  return (
    <form className="cvEditForm">
      <label>
        Institution
        <input
          type="text"
          name="institution"
          value={education.institution}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label>
        Degree
        <input
          type="text"
          name="degree"
          value={education.degree}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label>
        Start Date
        <input
          type="date"
          name="startDate"
          value={education.startDate}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label>
        End Date
        <input
          type="date"
          name="endDate"
          value={education.endDate}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label>
        Location
        <input
          type="text"
          name="location"
          value={education.location}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <div className="formActions">
        {!isNew && (
          <button
            type="button"
            className="deleteButton"
            onClick={handleDeleteEducation}
          >
            Delete
          </button>
        )}
        <button
          type="button"
          className="cancelButton"
          onClick={handleCancelEducation}
        >
          Cancel
        </button>
        <button
          type="button"
          className="saveButton"
          onClick={() => handleSaveEducation(education, isNew)}
        >
          Save
        </button>
      </div>
    </form>
  );
}
