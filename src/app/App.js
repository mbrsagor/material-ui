import React, { Component } from 'react';
import '../style/style.scss';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';

class App extends Component {
  
  render() { 
    return (
      <>
        <SideMenu />
        <Header />
      </>
    );
  }
}
 
export default App;
