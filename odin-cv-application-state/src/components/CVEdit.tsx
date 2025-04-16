import { Education } from "./cvEdit/education/Education";
import { Experience } from "./cvEdit/experience/Experience";
import { Personal } from "./cvEdit/personal/Personal";

export function CVEdit() {
  return (
    <div>
      <Personal /> <Education /> <Experience />
    </div>
  );
}
