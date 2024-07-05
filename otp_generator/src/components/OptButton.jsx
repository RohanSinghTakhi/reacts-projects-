import React from 'react'

function OptButton({inc,res}) {
  return (
    <div className='button2'>
      <button className='button' type="button" onClick={inc}>Generate</button>
      <button className='button' type="button" onClick={res}>  reset  </button>
    </div>
      
  )
}

export default OptButton