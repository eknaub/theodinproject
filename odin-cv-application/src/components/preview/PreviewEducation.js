import { Component } from "react";

class PreviewEducation extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { educationExperience } = this.props;

    return (
      <div>
        Education Preview
        <label htmlFor="uniNameInput">{educationExperience.universityName}</label>
        <label htmlFor="degreeInput">{educationExperience.degree}</label>
        <label htmlFor="locationInput">{educationExperience.location}</label>
        <label htmlFor="fromInput">{educationExperience.from}</label>
        <label htmlFor="toInput">{educationExperience.to}</label>
      </div>
    );
  };
}

export default PreviewEducation;