import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getLoginUser } from "../../store/actions/authActions";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = () => {

        const formdata = {
            username: email,
            password: password,
            token:  'hjghjghjghjghjghjhfjewewewjjjgjghgh'
        }
            
        dispatch(getLoginUser(formdata))
        navigate('/')

    }


    return (
        <div className="login-form mt-4">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={email} onChange={(e) => handleEmail(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={password} onChange={(e) => handlePassword(e)}  className="form-control" id="exampleInputPassword1" />
                </div>
                <input type="submit" value="Submit" className="btn btn-primary" />
            </form>
        </div>
    )
}

export default Login;