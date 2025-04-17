import { useState } from "react";
import { useCVContext } from "../../../context/CVProvider";
import "../styles/cvEdit.css";
import { Experience } from "../../../utils/interfaces";

export function ExperienceForm() {
  const {
    cvData,
    editingExperienceIndex,
    handleCancelExperience,
    handleDeleteExperience,
    handleSaveExperience,
  } = useCVContext();

  const isNew = editingExperienceIndex === -1;

  const getInitExperience = () => {
    if (editingExperienceIndex === null) return null;

    if (isNew)
      return {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
        isVisible: true,
      } as Experience;
    return cvData.experience[editingExperienceIndex];
  };

  const [experience, setExperience] = useState<Experience | null>(
    getInitExperience()
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setExperience((prev) => {
      if (!prev) return null;
      return { ...prev, [name]: value };
    });
  };
  console.log(experience);

  if (!experience) return null;

  return (
    <form className="cvEditForm">
      <label>
        Company
        <input
          type="text"
          name="company"
          value={experience.company}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label>
        Position
        <input
          type="text"
          name="position"
          value={experience.position}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label>
        Start Date
        <input
          type="date"
          name="startDate"
          value={experience.startDate}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label>
        End Date
        <input
          type="date"
          name="endDate"
          value={experience.endDate}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label>
        Location
        <input
          type="text"
          name="location"
          value={experience.location}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label>
        Description
        <textarea
          name="description"
          value={experience.description}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <div className="formActions">
        {!isNew && (
          <button
            type="button"
            className="deleteButton"
            onClick={handleDeleteExperience}
          >
            Delete
          </button>
        )}
        <button
          type="button"
          className="cancelButton"
          onClick={handleCancelExperience}
        >
          Cancel
        </button>
        <button
          type="button"
          className="saveButton"
          onClick={() => handleSaveExperience(experience, isNew)}
        >
          Save
        </button>
      </div>
    </form>
  );
}
