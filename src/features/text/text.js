import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addText, removeText } from './textSlice'
//import styles from './Counter.module.css'

function Text() {

    //const count = useSelector((state) => state.counter.value)
    const textVal = useSelector((state) => state.text.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                aria-label="Remove Text"
                onClick={() => dispatch(removeText())}
                >
                Remove
                </button>
                   <span>{textVal}</span>  
                <button
                aria-label="Add Text"
                onClick={() => dispatch(addText())}
                >
                Add
                </button>
                <button
                aria-label="Add Text"
                onClick={() => dispatch(addText())}
                >
                Add
                </button>
            </div>
        </div>
    )
}

export default Text;