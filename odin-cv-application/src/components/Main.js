import { Component } from "react";
import FormMain from './form/FormMain';
import PreviewMain from './preview/PreviewMain';
import uniqid from "uniqid";
import '../styles/main.css'

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
      educationList: [
        {
          educationExperience: { 
            id: uniqid(),
            universityName: '',
            degree: '',
            location: '',
            from: '',
            to: '',
          },
        }
      ],
      workList: [
        {
          workExperience: { 
            id: uniqid(),
            position: '',
            companyName: '',
            location: '',
            description: '',
            from: '',
            to: '',
          },
        }
      ],
    }

    this.handleGeneralInformation = this.handleGeneralInformation.bind(this);
    this.handleEducationExperience = this.handleEducationExperience.bind(this);
    this.handleEducationAdd = this.handleEducationAdd.bind(this);
    this.handleEducationDelete = this.handleEducationDelete.bind(this);
    this.handleWorkExperience = this.handleWorkExperience.bind(this);
    this.handleWorkAdd = this.handleWorkAdd.bind(this);
    this.handleWorkDelete = this.handleWorkDelete.bind(this);
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
    this.state.educationList.forEach((item) => {
      if(item.educationExperience.id === e.target.parentNode.id) {
        item.educationExperience.universityName = e.target.id === 'uniNameInput' ? e.target.value : item.educationExperience.universityName;
        item.educationExperience.degree = e.target.id === 'degreeInput' ? e.target.value : item.educationExperience.degree;
        item.educationExperience.location = e.target.id === 'locationInput' ? e.target.value : item.educationExperience.location;
        item.educationExperience.from = e.target.id === 'fromInput' ? e.target.value : item.educationExperience.from;
        item.educationExperience.to = e.target.id === 'toInput' ? e.target.value : item.educationExperience.to;
      }
    });

    this.setState( {
      educationList: [...this.state.educationList],
    });
  }

  handleEducationAdd(e) {
    this.setState( {
      educationList: [...this.state.educationList, {
        educationExperience: { 
          id: uniqid(),
          universityName: e.target.id === 'uniNameInput' ? e.target.value : '',
          degree: e.target.id === 'degreeInput' ? e.target.value : '',
          location: e.target.id === 'locationInput' ? e.target.value : '',
          from: e.target.id === 'fromInput' ? e.target.value : '',
          to: e.target.id === 'toInput' ? e.target.value : '',
        },
      }],
    });
  }

  handleEducationDelete(id) {
    const newList = this.state.educationList.filter((item) => item.educationExperience.id !== id);
    this.setState( {
      educationList: [...newList],
    });
  }

  handleWorkExperience(e) {
    this.state.workList.forEach((item) => {
      if(item.workExperience.id === e.target.parentNode.id) {
        item.workExperience.position = e.target.id === 'positionInput' ? e.target.value : item.workExperience.position;
        item.workExperience.companyName = e.target.id === 'companyNameInput' ? e.target.value : item.workExperience.companyName;
        item.workExperience.location = e.target.id === 'locationInput' ? e.target.value : item.workExperience.location;
        item.workExperience.description = e.target.id === 'descriptionInput' ? e.target.value : item.workExperience.description;
        item.workExperience.from = e.target.id === 'fromInput' ? e.target.value : item.workExperience.from;
        item.workExperience.to = e.target.id === 'toInput' ? e.target.value : item.workExperience.to;
      }
    });

    this.setState( {
      workList: [...this.state.workList],
    });
  }

  handleWorkAdd(e) {
    this.setState( {
      workList: [...this.state.workList, {
        workExperience: { 
          id: uniqid(),
          position: e.target.id === 'positionInput' ? e.target.value : '',
          companyName: e.target.id === 'companyNameInput' ? e.target.value : '',
          location: e.target.id === 'locationInput' ? e.target.value : '',
          description: e.target.id === 'descriptionInput' ? e.target.value : '',
          from: e.target.id === 'fromInput' ? e.target.value : '',
          to: e.target.id === 'toInput' ? e.target.value : '',
        },
      }],
    });
  }

  handleWorkDelete(id) {
    const newList = this.state.workList.filter((item) => item.workExperience.id !== id);
    this.setState( {
      workList: [...newList],
    });
  }

  render() {
    return (
      <div id="main">
        <div className="form">
          <FormMain
          onGeneralChanged={this.handleGeneralInformation} 
          educationList={this.state.educationList} onEducationChanged={this.handleEducationExperience} onEducationAdd={this.handleEducationAdd} onEducationDelete={this.handleEducationDelete}
          workList={this.state.workList} onWorkChanged={this.handleWorkExperience} onWorkAdd={this.handleWorkAdd} onWorkDelete={this.handleWorkDelete}
          ></FormMain>
        </div>
        <div className="preview">
          <PreviewMain generalInformation={this.state.generalInformation} educationList={this.state.educationList} workList={this.state.workList}></PreviewMain>
        </div>
      </div>
    );
  };
}

export default Main;