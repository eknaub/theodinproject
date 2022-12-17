import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    //Alternativ so, dann muss man nicht this.props schreiben (Destructuring)
    const { onButtonClicked } = this.props;
    //Gets rerendered when the count state changes
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button onClick={onButtonClicked}>Click me!</button>
      </div>
    );
  }
}

/*
function MyComponent({title}) { //Destructurin in Parameter
  return <div>{title}</div>;
}
*/

export default MyComponent;