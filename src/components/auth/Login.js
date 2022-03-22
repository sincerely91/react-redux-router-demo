import React, { useState } from "react";
import { useDispatch } from "react-redux";
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

    const dispatch = useDispatch();
    //const history = useHistory();

    const handleSubmit = () => {

        const formdata = {
            username: email,
            password: password,
            token:  'hjghjghjghjghjghjhfjewewewjjjgjghgh'
        }
            
        dispatch(getLoginUser(formdata))
        //history.push('/dashboard')

    }


    return (
        <div className="login-form">
            <h1>Login</h1>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={email} onChange={(e) => handleEmail(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={password} onChange={(e) => handlePassword(e)}  className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="button" onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login;