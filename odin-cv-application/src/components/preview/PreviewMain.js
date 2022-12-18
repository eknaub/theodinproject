import { Component } from "react";
import PreviewEducation from "./PreviewEducation";
import PreviewGeneral from "./PreviewGeneral";
import PreviewWork from "./PreviewWork";

class PreviewMain extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { generalInformation, educationExperience, workExperience } = this.props;

    return (
      <div>
        PreviewMain
        <PreviewGeneral generalInformation={generalInformation}></PreviewGeneral>
        <PreviewEducation educationExperience={educationExperience}></PreviewEducation>
        <PreviewWork workExperience={workExperience}></PreviewWork>
      </div>
    );
  };
}

export default PreviewMain;