import { Component } from "react";

class PreviewGeneral extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { workExperience } = this.props;
    
    return (
      <div>
        Work Preview
        <label htmlFor="positionInput">{workExperience.position}</label>
        <label htmlFor="companyNameInput">{workExperience.companyName}</label>
        <label htmlFor="locationInput">{workExperience.location}</label>
        <label htmlFor="descriptionInput">{workExperience.description}</label>
        <label htmlFor="fromInput">{workExperience.from}</label>
        <label htmlFor="toInput">{workExperience.to}</label>
      </div>
    );
  };
}

export default PreviewGeneral;