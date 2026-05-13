import { useCVContext } from "../../context/CVProvider";
import { CVPreviewBodyExperienceItem } from "./components/CVPreviewBodyExperienceItem";
import "./styles/cvPreviewBody.css";

export function CVPreviewBodyExperience() {
  const { cvData } = useCVContext();

  return (
    <div className="cvPreviewBodyExperience">
      <h1>Experience</h1>
      {cvData.experience.map(
        (experience, index) =>
          experience.isVisible && (
            <CVPreviewBodyExperienceItem experience={experience} key={index} />
          )
      )}
    </div>
  );
}
