import { Component } from "react";

class GeneralInformation extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        General Information
        <label htmlFor="firstNameInput">First Name</label>
        <input type='text' id='firstNameInput' onChange={this.props.onGeneralChanged}></input>
        <label htmlFor="lastNameInput">Last Name</label>
        <input type='text' id='lastNameInput' onChange={this.props.onGeneralChanged}></input>
        <label htmlFor="addressInput">Address</label>
        <input type='text' id='addressInput' onChange={this.props.onGeneralChanged}></input>
        <label htmlFor="phoneInput">Phone</label>
        <input type='text' id='phoneInput' onChange={this.props.onGeneralChanged}></input>
        <label htmlFor="emailInput">Email</label>
        <input type='text' id='emailInput' onChange={this.props.onGeneralChanged}></input>
      </div>
    );
  };
}

export default GeneralInformation;