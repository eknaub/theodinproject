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
                <label htmlFor="positionInput">Position</label>
                <input type='text' id='positionInput' onChange={onWorkChanged}></input>
                <label htmlFor="companyNameInput">Company Name</label>
                <input type='text' id='companyNameInput' onChange={onWorkChanged}></input>
                <label htmlFor="locationInput">Location</label>
                <input type='text' id='locationInput' onChange={onWorkChanged}></input>
                <label htmlFor="descriptionInput">Description</label>
                <input type='text' id='descriptionInput' onChange={onWorkChanged}></input>
                <label htmlFor="fromInput">From</label>
                <input type='text' id='fromInput' onChange={onWorkChanged}></input>
                <label htmlFor="toInput">To</label>
                <input type='text' id='toInput' onChange={onWorkChanged}></input>
                <button onClick={() => onWorkDelete(t.workExperience.id)}>Delete</button>
              </div>
          );
        })}
        <button onClick={onWorkAdd}>Add</button>
      </div>
    );
  };
}

export default WorkExp;