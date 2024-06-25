import React, { useState } from 'react';

function List({ items }) {
    const [activeItems, setActiveItems] = useState([]);

    const handleCheckboxChange = (index) => {
        setActiveItems((prev) =>
            prev.includes(index)
                ? prev.filter((itemIndex) => itemIndex !== index)
                : [...prev, index]
        );
    };

    return (
        <div>
            <ul className="list-group">
                {items.map((item, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between">
                        <label
                            className={`form-check-label ${activeItems.includes(index) ? 'active' : ''}`}
                            htmlFor={`checkbox${index}`}
                        >
                            {item}
                        </label>
                        <label className="form-check-label" htmlFor={`checkbox${index}`}>
                            time
                        </label>
                        <input
                            className="form-check-input me-1"
                            type="checkbox"
                            id={`checkbox${index}`}
                            onChange={() => handleCheckboxChange(index)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;
