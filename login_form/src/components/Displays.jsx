import React, { useContext } from 'react';
import UserContext from '../store/UserContext';

function Display() {
  const { user } = useContext(UserContext);

  return (
    <div>{user}</div>
  );
}

export default Display;
 