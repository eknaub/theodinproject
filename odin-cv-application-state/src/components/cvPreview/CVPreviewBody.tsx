import { useCVContext } from "../../context/CVProvider";
import { CVPreviewBodyEducation } from "./CVPreviewBodyEducation";
import { CVPreviewBodyExperience } from "./CVPreviewBodyExperience";
import "./styles/cvPreviewBody.css";

export function CVPreviewBody() {
  const { cvData } = useCVContext();

  return (
    <div className="cvPreviewBody">
      {cvData.education.length > 0 && <CVPreviewBodyEducation />}
      {cvData.experience.length > 0 && <CVPreviewBodyExperience />}
    </div>
  );
}
