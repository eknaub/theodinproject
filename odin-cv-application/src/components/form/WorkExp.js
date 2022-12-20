import { Component } from "react";

class WorkExp extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { onWorkChanged, workList, onWorkAdd, onWorkDelete } = this.props;
    
    return (
      <div>
        {workList.map((t) => {
          return (
              <div id={t.workExperience.id} key={t.workExperience.id}>
                <input type='text' id='positionInput' onChange={onWorkChanged} placeholder="Position"></input>
                <input type='text' id='companyNameInput' onChange={onWorkChanged} placeholder="Company name"></input>
                <input type='text' id='locationInput' onChange={onWorkChanged} placeholder="Location"></input>
                <input type='text' id='descriptionInput' onChange={onWorkChanged} placeholder="Description"></input>
                <input type='text' id='fromInput' onChange={onWorkChanged} placeholder="From"></input>
                <input type='text' id='toInput' onChange={onWorkChanged} placeholder="To"></input>
                <button onClick={() => onWorkDelete(t.workExperience.id)}>Delete</button>
              </div>
          );
        })}
        <button className="add-new" onClick={onWorkAdd}>Add</button>
      </div>
    );
  };
}

export default WorkExp;