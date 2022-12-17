import { Component } from 'react';
import Overview from './components/Overview';
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      task: { 
        text: '',
        id: uniqid(),
        count: 1,
      },
      tasks: [],
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  };

  handleChange(e) {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        count: this.state.task.count,
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState( {
      tasks: [...this.state.tasks, {
        task: this.state.task,
        id: this.state.task.id,
      }],
      task: { 
        text: '',
        id: uniqid(),
        count: this.state.task.count + 1,
      },
    });
  }

  handleDelete(id) {
    const newList = this.state.tasks.filter((item) => item.id !== id);
    this.setState( {
      tasks: newList,
    });
  }

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="taskInput">Todo</label>
          <input type='text' id='taskInput' value={task.text} onChange={this.handleChange}></input>
          <button type='submit'>Add</button>
        </form>
        <Overview tasks={tasks} handleDelete={this.handleDelete}></Overview>
      </div>
    )
  }
}

export default App;
