import React, { Component } from 'react';
import MyComponent from './TestComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  onClickBtn() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <MyComponent title={this.state.count} onButtonClicked={this.onClickBtn}></MyComponent>
      </div>
    );
  }
}

//Mit functions
/*
function App() {
  return (
    <div>
      <MyComponent title="Hello World" />
    </div>
  );
}
*/

export default App;
