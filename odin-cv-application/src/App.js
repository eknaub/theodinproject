import { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/app.css';

class App extends Component {
  render() {
    return (
      <div id='app'>
        <div id='header'><Header></Header></div>
        <div id='content'><Main></Main></div>
        <div id='footer'><Footer></Footer></div>
      </div>
    );
  };
}

export default App;
