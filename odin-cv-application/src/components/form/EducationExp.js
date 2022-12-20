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
                <input type='text' id='uniNameInput' onChange={onEducationChanged} placeholder="University name"></input>
                <input type='text' id='degreeInput' onChange={onEducationChanged} placeholder="Degree"></input>
                <input type='text' id='locationInput' onChange={onEducationChanged} placeholder="Location"></input>
                <input type='text' id='fromInput' onChange={onEducationChanged} placeholder="From"></input>
                <input type='text' id='toInput' onChange={onEducationChanged} placeholder="To"></input>
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