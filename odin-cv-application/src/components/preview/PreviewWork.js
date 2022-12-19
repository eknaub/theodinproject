import { Component } from "react";

class PreviewGeneral extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { workList } = this.props;
    
    return (
      <div>
        {workList.map((t) => {
          return (
            <div key={t.workExperience.id}>
              <label htmlFor="positionInput">{t.workExperience.position}</label>
              <label htmlFor="companyNameInput">{t.workExperience.companyName}</label>
              <label htmlFor="locationInput">{t.workExperience.location}</label>
              <label htmlFor="descriptionInput">{t.workExperience.description}</label>
              <label htmlFor="fromInput">{t.workExperience.from}</label>
              <label htmlFor="toInput">{t.workExperience.to}</label>
            </div>
          );
        })}
      </div>
    );
  };
}

export default PreviewGeneral;