import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { tasks } = this.props;
    return (
      <ul>
        {tasks.map((t) => {
          return (
              <div key={t.task.id}>
                <li>Task {t.task.count}: {t.task.text}</li>
                <button onClick={() => this.props.handleDelete(t.task.id)}>Delete</button>
              </div>
          );
        })}
      </ul>
    );
  }
}

export default Overview;