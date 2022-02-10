import React, { useState } from "react";

const Register = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleFirstname = (e) => {
        setFirstname(e.target.value)
    }
    const handleLastname = (e) => {
        setLastname(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmitForm = () => {
        const formdata = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        }
        console.log(formdata);
    }

    return (
        <div>
            <h1>Register</h1>
            <form>
                <div className="mb-3">
                    <label for="firstname" className="form-label">Firstname</label>
                    <input type="text" value={firstname} onChange={(e) => handleFirstname(e)} className="form-control" id="firstname" />
                </div>
                <div className="mb-3">
                    <label for="lastname" className="form-label">Lastname</label>
                    <input type="text" value={lastname} onChange={(e) => handleLastname(e)} className="form-control" id="lastname" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" value={email} onChange={(e) => handleEmail(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={password} onChange={(e) => handlePassword(e)}  className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSubmitForm}>Submit</button>
            </form>
        </div>
    )
}

export default Register;