import { Education } from "./cvEdit/education/Education";
import { Experience } from "./cvEdit/experience/Experience";
import { Personal } from "./cvEdit/personal/Personal";
import { CVEditActions } from "./CvEditActions";

export function CVEdit() {
  return (
    <div className="cvEditContainer">
      <CVEditActions /> <Personal /> <Education /> <Experience />
    </div>
  );
}
