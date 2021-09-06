import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { signUp } from '../redux/signup/signupActions'
import './login.css';

function Signup() {

    //const userEmail = useState(state => state.signupReducers.)

    const [ email , setEmail ] = useState("");
    const [ password , setPassword ] = useState("");
    const [ confirmPassword , setConfirmPassword ] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUp({email , password}));
    }

    return (
        <div className="container-l">
            <form onSubmit={handleSubmit} className="form-l">
            <   div className="login-p-wrapper">
                    <p className="login-p">Signup</p>
                </div>
                <p className="email-p">email : </p><br/>
                <input type="email" className="email-input" name="email" value={email} onChange={e => setEmail(e.target.value)}/>

                <p className="password-p">password : </p><br/>
                <input className="password-input" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />

                <p className="password-p" >Confirm password : </p><br/>
                <input type="password" className="password-input" name="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />

                <input className="submit-l" value="Signup" type="submit"/>
            </form>
        </div>
    )
}

export default Signup
