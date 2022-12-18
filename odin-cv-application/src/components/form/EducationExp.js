import { Component } from "react";

class EducationExp extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { onEducationChanged } = this.props;
    
    return (
      <div>
        <label htmlFor="uniNameInput">University Name</label>
        <input type='text' id='uniNameInput' onChange={onEducationChanged}></input>
        <label htmlFor="degreeInput">Degree</label>
        <input type='text' id='degreeInput' onChange={onEducationChanged}></input>
        <label htmlFor="locationInput">Location</label>
        <input type='text' id='locationInput' onChange={onEducationChanged}></input>
        <label htmlFor="fromInput">From</label>
        <input type='text' id='fromInput' onChange={onEducationChanged}></input>
        <label htmlFor="toInput">To</label>
        <input type='text' id='toInput' onChange={onEducationChanged}></input>
      </div>
    );
  };
}

export default EducationExp;