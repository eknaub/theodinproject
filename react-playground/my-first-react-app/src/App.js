import React, { Component } from 'react';
import MyComponent from './TestComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      mount: true,
    };

    this.onClickBtn = this.onClickBtn.bind(this);

    this.mountCounter = () => this.setState({mount: true});
    this.unmountCounter = () => this.setState({mount: false});
  }

  onClickBtn() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.mountCounter} disabled={this.state.mount}>Mount counter</button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>Unmount counter</button>
        {this.state.mount ? <MyComponent count={this.state.count} onButtonClicked={this.onClickBtn}></MyComponent> : null}
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
