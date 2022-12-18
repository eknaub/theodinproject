import { Component } from "react";

class PreviewGeneral extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        General Preview
        <label htmlFor="firstNameInput">{this.props.generalInformation.firstName}</label>
        <label htmlFor="lastNameInput">{this.props.generalInformation.lastName}</label>
        <label htmlFor="addressInput">{this.props.generalInformation.address}</label>
        <label htmlFor="phoneInput">{this.props.generalInformation.phone}</label>
        <label htmlFor="emailInput">{this.props.generalInformation.email}</label>
      </div>
    );
  };
}

export default PreviewGeneral;