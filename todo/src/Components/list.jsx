import React from 'react'

function List(){
    return(
        <>
        <ul className="list-group ">
        <li className="list-group-item d-flex justify-content-between    ">
            <label className="form-check-label" for="firstCheckbox">First checkbox</label>
            <label className="form-check-label" for="firstCheckbox">time</label>
            <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"></input>
    
        </li>
        </ul>
        </>
    )
}

export default List