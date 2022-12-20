import { Component } from "react";
import '../../styles/preview.css';

class PreviewGeneral extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { workList } = this.props;
    
    return (
      <div className="preview-education-wrapper">
        <div className="preview-education-information">
        <div className="preview-education-title">Work experience</div>
          {workList.map((t) => {
            return (
              <div key={t.workExperience.id}>
                <div className="preview-group">
                  <label htmlFor="companyNameInput">{t.workExperience.companyName} -</label>
                  <label htmlFor="locationInput">{t.workExperience.location}</label>
                </div>
                <div className="preview-group">
                  <label htmlFor="positionInput">Position: {t.workExperience.position}</label>
                </div>
                <div className="preview-group">
                  <label htmlFor="descriptionInput">{t.workExperience.description}</label>
                </div>
                <div className="preview-group">
                  <label htmlFor="fromInput">{t.workExperience.from} -</label>
                  <label htmlFor="toInput">{t.workExperience.to}</label>
                </div>
                <hr></hr>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
}

export default PreviewGeneral;