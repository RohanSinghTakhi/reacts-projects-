import React from 'react';

function List({ items }) {
    return (
        <div>
            <ul className="list-group">
                {items.map((item, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between">
                        <label className="form-check-label" htmlFor={`checkbox${index}`}>{item}</label>
                        <label className="form-check-label" htmlFor={`checkbox${index}`}>time</label>
                        <input className="form-check-input me-1" type="checkbox" id={`checkbox${index}`} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;
