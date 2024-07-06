import React from 'react';
import { useSelector } from 'react-redux';

function Count() {
  const counter = useSelector((store) => store.counter);

  return (
    <div>
      <p className="lead mb-4">
        {counter}
      </p>
    </div>
  );
}

export default Count;
