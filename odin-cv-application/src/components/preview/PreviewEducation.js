import { Component } from "react";
import '../../styles/preview.css';

class PreviewEducation extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { educationList } = this.props;

    return (
      <div className="preview-education-wrapper">
        <div className="preview-education-information">
          <div className="preview-education-title">Education</div>
          {educationList.map((t) => {
            return (
              <div key={t.educationExperience.id}>
                <div className="preview-group">
                  <label htmlFor="uniNameInput">{t.educationExperience.universityName} -</label>
                  <label htmlFor="locationInput">{t.educationExperience.location}</label>
                </div>
                <div className="preview-group">
                  <label htmlFor="degreeInput">Degree: {t.educationExperience.degree}</label>
                </div>
                <div className="preview-group">
                  <label htmlFor="fromInput">{t.educationExperience.from} -</label>
                  <label htmlFor="toInput">{t.educationExperience.to}</label>
                </div>
              <hr></hr>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
};

export default PreviewEducation;