import React from 'react';

function Layout({ otp }) {
  return (
    <div>
      <div className="number">
        {otp.map((digit, index) => (
          <div key={index} className="num">{digit}</div>
        ))}
      </div>
    </div>
  );
}

export default Layout;
