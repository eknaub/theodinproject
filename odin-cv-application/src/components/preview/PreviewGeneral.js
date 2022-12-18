import { Component } from "react";

class PreviewGeneral extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { generalInformation } = this.props;
    
    return (
      <div>
        General Preview
        <label htmlFor="firstNameInput">{generalInformation.firstName}</label>
        <label htmlFor="lastNameInput">{generalInformation.lastName}</label>
        <label htmlFor="addressInput">{generalInformation.address}</label>
        <label htmlFor="phoneInput">{generalInformation.phone}</label>
        <label htmlFor="emailInput">{generalInformation.email}</label>
      </div>
    );
  };
}

export default PreviewGeneral;