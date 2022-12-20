import { Component } from "react";

class GeneralInformation extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { onGeneralChanged } = this.props;
    
    return (
      <div>
        <input type='text' id='firstNameInput' onChange={onGeneralChanged} placeholder="First name"></input>
        <input type='text' id='lastNameInput' onChange={onGeneralChanged} placeholder="Last name"></input>
        <input type='text' id='addressInput' onChange={onGeneralChanged} placeholder="Address"></input>
        <input type='text' id='phoneInput' onChange={onGeneralChanged} placeholder="Phone"></input>
        <input type='text' id='emailInput' onChange={onGeneralChanged} placeholder="Email"></input>
      </div>
    );
  };
}

export default GeneralInformation;