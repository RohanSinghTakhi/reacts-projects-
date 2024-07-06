import React from 'react'
import Count from './Count';
import Buttons2 from './Buttons2';

function Header() {
  return (
    <div className="px-4 py-5 my-5 text-center">
       
      <h1 className="display-5 fw-bold text-body-emphasis">Counter</h1>
      <div className="col-lg-6 mx-auto">
      <Count></Count>
    <Buttons2></Buttons2>
      </div>
    </div>
  );
};

  

export default Header