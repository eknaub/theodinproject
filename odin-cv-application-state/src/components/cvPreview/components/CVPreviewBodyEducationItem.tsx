import { Education } from "../../../utils/interfaces";
import "../styles/cvPreviewBody.css";

interface CVPreviewBodyEducationItemProps {
  education: Education;
}

export function CVPreviewBodyEducationItem(
  props: CVPreviewBodyEducationItemProps
) {
  return (
    <div className="cvPreviewBodyEducationItem">
      <div className="cvPreviewBodyEducationItemTitle">
        {props.education.degree} at {props.education.institution}
      </div>
      <div className="cvPreviewBodyEducationItemDetail">
        {props.education.startDate} - {props.education.endDate}
      </div>
      <div className="cvPreviewBodyEducationItemDetail">
        {props.education.location}
      </div>
    </div>
  );
}
