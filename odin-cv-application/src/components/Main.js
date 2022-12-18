import { Component } from "react";
import FormMain from './form/FormMain';
import PreviewMain from './preview/PreviewMain';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generalInformation: { 
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
        email: '',
      },
    }

    this.handleGeneralInformation = this.handleGeneralInformation.bind(this);
  }

  handleGeneralInformation(e) {
    this.setState( {
      generalInformation: { 
        firstName: e.target.id === 'firstNameInput' ? e.target.value : this.state.generalInformation.firstName,
        lastName: e.target.id === 'lastNameInput' ? e.target.value : this.state.generalInformation.lastName,
        address: e.target.id === 'addressInput' ? e.target.value : this.state.generalInformation.address,
        phone: e.target.id === 'phoneInput' ? e.target.value : this.state.generalInformation.phone,
        email: e.target.id === 'emailInput' ? e.target.value : this.state.generalInformation.email,
      },
    });
  }

  render() {console.log(this.state.generalInformation); 
    return (
      <div>
        Main
        <FormMain onGeneralChanged={this.handleGeneralInformation}></FormMain>
        <PreviewMain generalInformation={this.state.generalInformation}></PreviewMain>
      </div>
    );
  };
}

export default Main;