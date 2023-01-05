import React from 'react';

const Button = ({data, setData, value}) => {
    return (
        <>
            <button onClick={e => setData(data + e.target.value)} value={value}>
                {value}
            </button>
        </>
    );
};

export {Button};