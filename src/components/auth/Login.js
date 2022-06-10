import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getLoginUser } from "../../store/actions/authActions";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {login_status, err_msg} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formdata = {
            username: email,
            password: password,
            token:  'hjghjghjggdgdhjghjghjhfjewewjjjgjghgh'
        }
        dispatch(getLoginUser(formdata));
    }
    
    if(login_status){
        navigate('/');
    }
    

    return (
        <div className="login-form mt-4">
            <p className="text-danger">{err_msg}</p>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="text" value={email} onChange={(e) => handleEmail(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={password} onChange={(e) => handlePassword(e)}  className="form-control" id="exampleInputPassword1" />
                </div>
                <input type="submit" value="Submit" className="btn btn-primary" />
            </form>
        </div>
    )
}

export default Login;