import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.module.css';

function Display({ val }) {
    return (
        <>
            <input type="text" className={styles.display} readOnly value={val} />
        </>
    );
}

Display.propTypes = {
    val: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

Display.defaultProps = {
    val: '',
};

export default Display;
