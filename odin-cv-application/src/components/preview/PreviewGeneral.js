import { Component } from "react";
import avatar from '../../img/avatar.jpg';
import '../../styles/preview.css';

class PreviewGeneral extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { generalInformation } = this.props;
    
    return (
      <div className="preview-general-wrapper">
        <div><img src={avatar} alt="avatar" height="200px"/></div>
        <div className="preview-general-information">
          <div className="preview-general-title">General Information</div>
          <div className="preview-group">
            <label htmlFor="firstNameInput">{generalInformation.firstName}</label>
            <label htmlFor="lastNameInput">{generalInformation.lastName}</label>
          </div>
          <div className="preview-group">
            <label htmlFor="addressInput">{generalInformation.address}</label>
          </div>
          <div className="preview-group">
            <label htmlFor="phoneInput">{generalInformation.phone} -</label>
            <label htmlFor="emailInput">{generalInformation.email}</label>
          </div>
        </div>
      </div>
    );
  };
}

export default PreviewGeneral;