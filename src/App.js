import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Header';
import Menu from './Menu';
import About from './About';
import WebApp from './WebApp';
import StaticUi from './StaticUi';
import Footer from './Footer';
import './style.scss';
class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="app-container">
          <Header />
          <Menu />
          <About />
          <WebApp />
          <StaticUi />
          <Footer />
        </div>
      </div >
    );
  }
}

export default App;
