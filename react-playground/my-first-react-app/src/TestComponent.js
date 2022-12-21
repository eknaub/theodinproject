import React, { Component } from 'react';

//const ErrorComponent = () => <div>{this.props.ignore}</div> 

class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    }
  }

  /*
    https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

    Mounting:
      - constructor()
      - static getDerivedStateFromProps()
      - render()
      - componentDidMount()

    Updating:
      - static getDerivedStateFromProps()
      - shouldComponentUpdate()
      - render()
      - getSnapshotBeforeUpdate()
      - componentDidUpdate()

    Unmounting:
      - componentWillUnmount()

    Error Handling:
      - static getDerivedStateFromError()
      - componentDidCatch()
  */

  componentDidMount() {
    //Creation of the component
    console.log("componentDidMount");
    /*
      Component is inserted in the DOM tree.
      Common tasks:
        - Connect Web APIs or JS Frameworks
        - Set Timers with setTimeout or setInterval
        - Add event listeners
    */
  }

  componentDidUpdate() {
    //Update of the component
    console.log("componentDidUpdate");
    /*
      Gets called when the component updates (can cause inf. loops)
      Always use Conditions like, compare previous and current props
      Common tasks:
        - Do stuff on DOM when component has updated
        - Network requests
    */
  }

  componentWillUnmount() {
    //Death of the component
    console.log("componentWillUnmount");
    /*
      Called when the component gets removed from the DOM tree.
      Common tasks:
        - Clean up what you did in componentDidMount
        - Remove event listeners
        - Cancel network requests
    */
  }

  shouldComponentUpdate(prevProps) {
    //Only starts the render when this returns true
    return this.props.count !== prevProps.count;
  }

  static getDerivedStateFromError() {
    console.log("getDerivedStateFromError");
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch', { error, info });
    this.setState({hasError: true});
  }
  
  render() {
    //Render of the component
    console.log("render");
    //Display the component on screen
    //Pure function, no setState

    //Alternativ so, dann muss man nicht this.props schreiben (Destructuring)
    const { onButtonClicked } = this.props;

    if(this.state.hasError) {
      return <div>Something went wrong.</div>
    }

    //Gets rerendered when the count state changes
    return (
      <div>
        <h1>Counter: {this.props.count}</h1>
        <button onClick={onButtonClicked}>Click me!</button>
        {/* <ErrorComponent></ErrorComponent> */}
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