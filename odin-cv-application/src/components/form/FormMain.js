import { Component } from "react";
import EducationExp from "./EducationExp";
import GeneralInformation from "./GeneralInformation";
import WorkExp from "./WorkExp";
import '../../styles/form.css';

class FormMain extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { onGeneralChanged,
       onEducationChanged, educationList, onEducationAdd, onEducationDelete,
       onWorkChanged, workList, onWorkAdd, onWorkDelete } = this.props;

    return (
      <div className="form-main">
        <div className="category-title">General Information</div>
        <GeneralInformation onGeneralChanged={onGeneralChanged}></GeneralInformation>
        <div className="category-title">Education</div>
        <EducationExp onEducationChanged={onEducationChanged} educationList={educationList} onEducationAdd={onEducationAdd} onEducationDelete={onEducationDelete}></EducationExp>
        <div className="category-title">Work experience</div>
        <WorkExp onWorkChanged={onWorkChanged} workList={workList} onWorkAdd={onWorkAdd} onWorkDelete={onWorkDelete}></WorkExp>
      </div>
    );
  };
}

export default FormMain;