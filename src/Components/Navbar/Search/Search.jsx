// import React from 'react'
// import { FiSearch } from "react-icons/fi";

// function Search() {
//     return (

//         <div className="nav_center">
//             <input className='imput' type="text" placeholder='Search...' />
//             <button > <FiSearch /> </button>
//         </div>

//     )
// }

// export default Search











import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { HiX } from "react-icons/hi";

function Search() {
    const [inputValue, setInputValue] = useState('');
    const [borderColor, setBorderColor] = useState('dodgerblue');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        setInputValue('');
    };

    const handleInputClick = () => {
        setBorderColor('#1C64F2');
    };

    const handleInputBlur = () => {
        setBorderColor('dodgerblue');
    };

    return (
        <div className="nav_center" style={{ boxShadow: `  0 0  10px 7px  ${borderColor}`, display: 'flex', alignItems: 'center' }}>
            <input className='input' type="text" placeholder='Search...'  value={inputValue} onChange={handleInputChange} onClick={handleInputClick} onBlur={handleInputBlur} />
            {inputValue && <button onClick={handleButtonClick}>< HiX /></button>}
            <button><FiSearch /></button>
        </div>
    );
}

export default Search;
