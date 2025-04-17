import { Experience } from "../../../utils/interfaces";
import "../styles/cvPreviewBody.css";

interface CVPreviewBodyExperienceItemProps {
  experience: Experience;
}

export function CVPreviewBodyExperienceItem(
  props: CVPreviewBodyExperienceItemProps
) {
  return (
    <div className="cvPreviewBodyExperienceItem">
      <div className="cvPreviewBodyExperienceItemTitle">
        {props.experience.position} at {props.experience.company}
      </div>
      <div className="cvPreviewBodyExperienceItemDetail">
        {props.experience.startDate} - {props.experience.endDate}
      </div>
      <div className="cvPreviewBodyExperienceItemDetail">
        {props.experience.location}
      </div>
      <div>{props.experience.description}</div>
    </div>
  );
}
