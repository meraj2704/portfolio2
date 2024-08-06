import React from 'react';
interface ButtonFillI{
    content:string;
}

const ButtonFill = ({content}:ButtonFillI) => {
    return (
        <button className='py-4 px-10 rounded-full text-bg1 bg-brand1 hover:scale-105'>
            {content}
        </button>
    );
};

export default ButtonFill;