import { Component } from "react";
import EducationExp from "./EducationExp";
import GeneralInformation from "./GeneralInformation";
import WorkExp from "./WorkExp";

class FormMain extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { onGeneralChanged,
       onEducationChanged, educationList, onEducationAdd, onEducationDelete,
       onWorkChanged, workList, onWorkAdd, onWorkDelete } = this.props;

    return (
      <div>
        General Information
        <GeneralInformation onGeneralChanged={onGeneralChanged}></GeneralInformation>
        EDUCATION
        <EducationExp onEducationChanged={onEducationChanged} educationList={educationList} onEducationAdd={onEducationAdd} onEducationDelete={onEducationDelete}></EducationExp>
        Work Experience
        <WorkExp onWorkChanged={onWorkChanged} workList={workList} onWorkAdd={onWorkAdd} onWorkDelete={onWorkDelete}></WorkExp>
      </div>
    );
  };
}

export default FormMain;