import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
    const [state, setState] = useState("Signup");
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: ""
    });

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const login = async () => {
        console.log("login", formData);
        let responseData;
        await fetch('http://localhost:4000/login', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((data) => responseData = data);

        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.errors)
        }
    };

    const signup = async () => {
        console.log("signup", formData);
        let responseData;
        await fetch('http://localhost:4000/signup', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((data) => responseData = data);

        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.errors)
        }
    };

    const handleSubmit = () => {
        if (state === "Login") {
            login();
        } else {
            signup();
        }
    };

    return (
        <div className='loginsignup'>
            <div className='loginsignup-container'>
                <h1>{state}</h1>
                <div className='loginsignup-fields'>
                    {state === "Signup" && (
                        <input
                            name='username'
                            value={formData.username}
                            onChange={changeHandler}
                            type="text"
                            placeholder='Your Name'
                        />
                    )}
                    <input
                        name='email'
                        value={formData.email}
                        onChange={changeHandler}
                        type="email"
                        placeholder='Email Address'
                    />
                    <input
                        name='password'
                        value={formData.password}
                        onChange={changeHandler}
                        type="password"
                        placeholder='Password'
                    />
                </div>
                <button onClick={handleSubmit}>Continue</button>
                <p className='loginsignup-login'>
                    {state === "Signup" ? "Already have an account?" : "Don't have an account?"}
                    <span onClick={() => setState(state === "Signup" ? "Login" : "Signup")}>
                        {state === "Signup" ? "Login here" : "Signup here"}
                    </span>
                </p>
                {state === "Signup" && (
                    <div className='loginsignup-agree'>
                        <input type='checkbox' name='' id='' />
                        <p>By continuing, I agree to the terms of use & privacy policy</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginSignup;
