import { Component } from "react";

class PreviewEducation extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { educationList } = this.props;

    return (
      <div>
        {educationList.map((t) => {
          return (
            <div key={t.educationExperience.id}>
              <label htmlFor="uniNameInput">{t.educationExperience.universityName}</label>
              <label htmlFor="degreeInput">{t.educationExperience.degree}</label>
              <label htmlFor="locationInput">{t.educationExperience.location}</label>
              <label htmlFor="fromInput">{t.educationExperience.from}</label>
              <label htmlFor="toInput">{t.educationExperience.to}</label>
            </div>
          );
        })}
      </div>
    );
  };
};

export default PreviewEducation;