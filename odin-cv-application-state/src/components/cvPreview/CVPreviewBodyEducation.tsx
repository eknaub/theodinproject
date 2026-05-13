import { useCVContext } from "../../context/CVProvider";
import { CVPreviewBodyEducationItem } from "./components/CVPreviewBodyEducationItem";
import "./styles/cvPreviewBody.css";

export function CVPreviewBodyEducation() {
  const { cvData } = useCVContext();

  return (
    <div className="cvPreviewBodyEducation">
      <h1>Education</h1>
      {cvData.education.map(
        (education, index) =>
          education.isVisible && (
            <CVPreviewBodyEducationItem education={education} key={index} />
          )
      )}
    </div>
  );
}
