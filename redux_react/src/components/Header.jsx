import React from 'react'
import Count from './Count';

function Header() {
  return (
    <div className="px-4 py-5 my-5 text-center">
       
      <h1 className="display-5 fw-bold text-body-emphasis">Counter</h1>
      <div className="col-lg-6 mx-auto">
      <Count></Count>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary btn-lg px-4 gap-3">+ one</button>
          <button type="button" className="btn btn-success btn-lg px-4">- one</button>
        </div>
      </div>
    </div>
  );
};

  

export default Header