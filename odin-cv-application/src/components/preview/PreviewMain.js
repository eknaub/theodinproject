import { Component } from "react";
import PreviewEducation from "./PreviewEducation";
import PreviewGeneral from "./PreviewGeneral";
import PreviewWork from "./PreviewWork";
import '../../styles/preview.css';

class PreviewMain extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { generalInformation, educationList, workList } = this.props;

    return (
      <div>
        <div className="preview-title">Preview</div>
        <PreviewGeneral generalInformation={generalInformation}></PreviewGeneral>
        <PreviewEducation educationList={educationList}></PreviewEducation>
        <PreviewWork workList={workList}></PreviewWork>
      </div>
    );
  };
}

export default PreviewMain;