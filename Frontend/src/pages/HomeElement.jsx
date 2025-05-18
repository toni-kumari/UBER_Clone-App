import React, { useState } from 'react';

const HomeElement = () => {
    const [data, setData] = useState('');

    const handleChange = (e) => {
        setData(e.target.value);
    };

    const handleSave = () => {
        localStorage.setItem('data', data);
        alert('Data saved!');
    };

    return (
        <div>
            <input type="text" value={data} onChange={handleChange} />
            <button onClick={handleSave}>Save Data</button>
        </div>
    );
};

export default HomeElement;