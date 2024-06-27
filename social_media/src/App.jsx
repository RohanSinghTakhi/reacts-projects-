import React from 'react';
import './App.css';  // Make sure to import the CSS file
import Nav from './components/Nav';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import Forms from './components/forms';

function App() {
  return (
    <>
      <Nav />
      <div className="main-content">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="content">
          <Forms />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
