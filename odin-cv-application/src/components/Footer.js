import { Component } from "react";
import { AiFillGithub } from 'react-icons/ai';
import '../styles/footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="discord-social">
         Made by Eduard <a href="https://github.com/eknaub"><AiFillGithub size="2em" color="white"></AiFillGithub></a>
      </div>
    );
  };
}

export default Footer;