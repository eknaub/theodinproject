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
      educationExperience: {
        universityName: '',
        degree: '',
        location: '',
        from: '',
        to: '',
      },
      workExperience: {
        position: '',
        companyName: '',
        location: '',
        description: '',
        from: '',
        to: '',
      }
    }

    this.handleGeneralInformation = this.handleGeneralInformation.bind(this);
    this.handleEducationExperience = this.handleEducationExperience.bind(this);
    this.handleWorkExperience = this.handleWorkExperience.bind(this);
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

  handleEducationExperience(e) {
    this.setState( {
      educationExperience: { 
        universityName: e.target.id === 'uniNameInput' ? e.target.value : this.state.educationExperience.universityName,
        degree: e.target.id === 'degreeInput' ? e.target.value : this.state.educationExperience.degree,
        location: e.target.id === 'locationInput' ? e.target.value : this.state.educationExperience.location,
        from: e.target.id === 'fromInput' ? e.target.value : this.state.educationExperience.from,
        to: e.target.id === 'toInput' ? e.target.value : this.state.educationExperience.to,
      },
    });
  }

  handleWorkExperience(e) {
    this.setState( {
      workExperience: { 
        position: e.target.id === 'positionInput' ? e.target.value : this.state.workExperience.position,
        companyName: e.target.id === 'companyNameInput' ? e.target.value : this.state.workExperience.companyName,
        location: e.target.id === 'locationInput' ? e.target.value : this.state.workExperience.location,
        description: e.target.id === 'descriptionInput' ? e.target.value : this.state.workExperience.description,
        from: e.target.id === 'fromInput' ? e.target.value : this.state.workExperience.from,
        to: e.target.id === 'toInput' ? e.target.value : this.state.workExperience.to,
      },
    });
  }

  render() {console.log(this.state.generalInformation); 
    return (
      <div>
        Main
        <FormMain onGeneralChanged={this.handleGeneralInformation} onEducationChanged={this.handleEducationExperience} onWorkChanged={this.handleWorkExperience}></FormMain>
        <PreviewMain generalInformation={this.state.generalInformation} educationExperience={this.state.educationExperience} workExperience={this.state.workExperience}></PreviewMain>
      </div>
    );
  };
}

export default Main;