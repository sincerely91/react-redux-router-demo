import { useState } from "react";

const Modal = () => {

    const [display, setDisplay] = useState('none')

    const handleDisplay = () => {
        setDisplay('block')
    }

    const handleClose = () => {
        setDisplay('none')
    }


    return (
        <div className="container">
            <h1>Hello World</h1>
            <button className="btn btn-default btn-primary" onClick={handleDisplay}>Open</button>
            
            <div id="myModal" className="modal" style={{display: display}}>
                <div className="modal-content">
                    <span className="close" onClick={handleClose}>&times;</span>
                    <p>Some text in the Modal..</p>
                </div>
            </div>
        </div>
    )
}

export default Modal;