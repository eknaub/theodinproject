import { Component } from "react";
import FormMain from './form/FormMain';
import PreviewMain from './preview/PreviewMain';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Main
        <FormMain></FormMain>
        <PreviewMain></PreviewMain>
      </div>
    );
  };
}

export default Main;