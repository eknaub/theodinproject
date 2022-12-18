import { Component } from "react";
import PreviewGeneral from "./PreviewGeneral";

class PreviewMain extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        PreviewMain
        <PreviewGeneral generalInformation={this.props.generalInformation}></PreviewGeneral>
      </div>
    );
  };
}

export default PreviewMain;