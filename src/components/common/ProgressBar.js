import React from 'react';

const ProgressBar = ({ value=0, max=100, className }) => {
    return (
        <progress value={value} max={max} className={className}/>
    );
};

export default ProgressBar;