import React from 'react';

const ButtonCard = ({clickRandom , randomColor}) => {
    return (
        <button onClick={clickRandom} 
        className='btn'
        style={{backgroundColor: randomColor}}
        > &#62; </button>
    );
}

export default ButtonCard;