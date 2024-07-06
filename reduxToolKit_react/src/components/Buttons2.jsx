import React from 'react'
import { useDispatch } from 'react-redux'

function Buttons2() {

    const Dispatchbutton = useDispatch();
    const inc =()=>{
        Dispatchbutton({type :"INCREMENT"})
    }
    const dec =()=>{
        Dispatchbutton({type:"DECREMENT"})

    }

  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={inc}>+ one</button>
          <button type="button" className="btn btn-success btn-lg px-4" onClick={dec}>- one</button>
    </div>
  )
}

export default Buttons2