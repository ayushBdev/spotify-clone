import React, { useState } from "react";
import "./Auth.css";

import { logo } from "../Images/Images";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'

import { signup, signin } from "../#Redux/Actions/Auth_Action";

import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { danger } from "../Notifications/Notifications";

import Loader from "react-loader-spinner";

const Auth = () => {

    const initialState = {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    };

    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showLoader, setShowLoader] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    const handelSubmit = (event) => {
        event.preventDefault();
        setShowLoader(true);
        if(isSignup) {
            dispatch(signin(form, history));
        } else {
            if(form.password === form.confirmPassword) {
                dispatch(signup(form, history));
            } else {
                danger("Password Mismatch");
                setShowLoader(false);
            }
        }
        setForm(initialState);
    };

    const handelChange = (event) => {
        return setForm({...form, [event.target.name] : event.target.value});
    };

    const switchMode = () => {
        setForm(initialState);
        setIsSignup(preValue => !preValue);
        setShowPassword(false);
    };

    const handelShowPassword = () => {
        setShowPassword(preValue => !preValue);
    };

    return(
        <div className="auth">
            <Link to="/" className="logo">
                <img src={logo} alt=""/>
            </Link>
            <form className="auth_form" onSubmit={handelSubmit}>
                {isSignup ? null : (
                    <div>
                        <input 
                            type="text"
                            placeholder="Enter Name"
                            value={form.name}
                            name="name"
                            onChange={handelChange}
                        />
                    </div>
                )}
                <div>
                    <input 
                        type="email"
                        placeholder="Enter Email Address"
                        value={form.email}
                        name="email"
                        onChange={handelChange}
                    />
                </div>
                <div>
                    <input 
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Password"
                        value={form.password}
                        name="password"
                        onChange={handelChange}
                    />
                    {showPassword ? <VisibilityIcon onClick={handelShowPassword}/> : <VisibilityOffIcon onClick={handelShowPassword}/>}
                </div>
                {isSignup ? null : (
                    <div>
                        <input 
                            type="password"
                            placeholder="Confirm Password"
                            value={form.confirmPassword}
                            name="confirmPassword"
                            onChange={handelChange}
                        />
                    </div>
                )}
                <button className="auth_btn" type="submit">
                    {isSignup ? "Log In" : "Sign Up"}
                </button>
            </form>
            <div className="switch_btn" onClick={switchMode}>
                {isSignup ? "Don't have a account. Sign Up" : "Already have a account? Log In"}
            </div>
            <Loader
                type="TailSpin"
                color="#00BFFF"
                height={50}
                width={50}
                timeout={5000000000}
                visible={showLoader}
            />
        </div>
    );
};

export default Auth;