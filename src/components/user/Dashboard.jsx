import React, { useRef } from 'react';

const Dashboard = () => {
    const inputRef = useRef(null);
    const pRef = useRef('red');

    const onClick = () => {
        console.log('INPUT VALUE: ', inputRef.current?.value);
    }
    

    const onClickFocus = () => {
        console.log('Focus input');
        inputRef.current?.focus();
        //inputRef.style.color = "blue";
    }

    const onClickHandle = () => {
        pRef.current.style.color = "blue"
    }

    return (
        <div >
            <input ref={inputRef} />
            <p ref={pRef} >Hello</p>
            <button onClick={onClick}>Log value</button>
            <button onClick={onClickFocus}>Focus on input</button>
            <button  onClick={onClickHandle}>Change color</button>
        </div>
    );
};

export default Dashboard;