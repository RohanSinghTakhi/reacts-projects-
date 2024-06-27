import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import Forms from './components/forms';  // Ensure capitalization matches the file name
import Post from './components/Post';
import Hostlist from './components/Hostlist'
import { useState } from 'react';
import PostListProvider from './components/post-list-store';

function App() {
const [selected,setselected]= useState("Home")
 
  return (

    <>
    <PostListProvider>
      <Nav />
      <div className="main-content">
        <div className="sidebar">
          <SideBar selected={selected}  Home={()=>{setselected("Home")}} post={()=>{setselected("Create Post")} }/>
        </div>
        <div className="content">
          {selected=="Home"?<Hostlist />:<Forms />}
          
          
        </div>
      </div>
      <Footer />
      </PostListProvider>
    </>
  );
}

export default App;
