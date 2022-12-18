import { Component } from "react";
import EducationExp from "./EducationExp";
import GeneralInformation from "./GeneralInformation";
import WorkExp from "./WorkExp";

class FormMain extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <GeneralInformation onGeneralChanged={this.props.onGeneralChanged}></GeneralInformation>
        <EducationExp></EducationExp>
        <WorkExp></WorkExp>
      </div>
    );
  };
}

export default FormMain;