import { Component } from "react";

class GeneralInformation extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { onGeneralChanged } = this.props;
    
    return (
      <div>
        <label htmlFor="firstNameInput">First Name</label>
        <input type='text' id='firstNameInput' onChange={onGeneralChanged}></input>
        <label htmlFor="lastNameInput">Last Name</label>
        <input type='text' id='lastNameInput' onChange={onGeneralChanged}></input>
        <label htmlFor="addressInput">Address</label>
        <input type='text' id='addressInput' onChange={onGeneralChanged}></input>
        <label htmlFor="phoneInput">Phone</label>
        <input type='text' id='phoneInput' onChange={onGeneralChanged}></input>
        <label htmlFor="emailInput">Email</label>
        <input type='text' id='emailInput' onChange={onGeneralChanged}></input>
      </div>
    );
  };
}

export default GeneralInformation;