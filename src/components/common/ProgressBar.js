import React from 'react';

const ProgressBar = (props) => {
    const { value=0, max=100, className } = props;
    return (
        <progress value={value} max={max} className={className}/>
    );
};

export default ProgressBar;