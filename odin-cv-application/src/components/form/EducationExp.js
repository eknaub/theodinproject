import { Component } from "react";

class EducationExp extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { onEducationChanged, educationList, onEducationAdd, onEducationDelete } = this.props;
    
    return (
      <div>
        {educationList.map((t) => {
          return (
              <div id={t.educationExperience.id} key={t.educationExperience.id}>
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
                <button onClick={() => onEducationDelete(t.educationExperience.id)}>Delete</button>
              </div>
          );
        })}
        <button onClick={onEducationAdd}>Add</button>
      </div>
    );
  };
}

export default EducationExp;