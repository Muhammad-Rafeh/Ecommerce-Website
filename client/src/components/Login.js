import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../redux/login/loginActions'
import { Redirect , Link } from 'react-router-dom';
import './login.css'

function Login() {

    //const userEmail = useState(state => state.signupReducers.)

    const loggedIn = useSelector(state => state.loginReducers.loggedIn);

    const [ email , setEmail ] = useState("");
    const [ password , setPassword ] = useState("");
    //const [ confirmPassword , setConfirmPassword ] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({email , password}));
    }

    return (
        <div className="container-l">
            <form onSubmit={handleSubmit} className="form-l">
                <div className="login-p-wrapper">
                    <p className="login-p">Login</p>
                </div>
                <p className="email-p" >email : </p>
                <input className="email-input" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>

                <p className="password-p" >password : </p>
                <input className="password-input" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />


                <input className="submit-l" type="submit"  value="Login" />
            </form>

            {
                loggedIn ? 
                <Redirect exact to='/' /> : ""

            }
        </div>
    )
}

export default Login
