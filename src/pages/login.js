import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import emImg from '../assets/Ellipse 2ELI-img.png'
import logo from '../assets/UK DION 2uk-dion-logo.png'
import qoutemarks from '../assets/Vectorcommas.png'

const initialState = {
    email: "",
    password: ""
}

export default function Login() {
    const [user, setUser] = useState(initialState)

    const { email, password } = user

    const handleChange = e => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            axios.post("https://dion-erp.herokuapp.com/api/employees/login", user)
        } catch (err) {

        }
    }
    return (
        <div className="auth-page">
            <div className="login-box col-50">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <form onSubmit={handleSubmit}>
                    <h5>Login</h5>

                    <p>Gain access to all work resources</p>

                    <div className="form-input">
                        <label htmlFor="email">Work Email*</label>
                        <input type="email" id="email" name="email" value={email} onChange={handleChange} />
                    </div>

                    <div className="form-input">
                        <label htmlFor="passowrd">Password*</label>
                        <input type="password" id="password" name="password" value={password} onChange={handleChange} />
                        <small>show</small>
                    </div>

                    <Link to="/forget" className="reset_link">Forgot Password?</Link>

                    <div className="form-input">
                        <button type="submit">Log in</button>
                    </div>
                </form>
            </div>

            <div className="oth-side col-50">
                <div className="employee-box">
                    <div className="e-b-out">
                        <h6>Employee of the month</h6>

                        <img src={emImg} alt="img" />

                        <h6>Gloria Agboifoh</h6>
                        <p>Product & Innovation Mgt.</p>
                    </div>
                </div>
                <div className="qoute">
                    <p>
                        You grow by changing, and you regress by being constant, so choose your path!
                        <br />
                        <br />
                        - Jojo
                    </p>
                    <div className="quote-img-box">
                        <img src={qoutemarks} alt="qoute-marks" />
                    </div>
                </div>
            </div>
        </div>
    )
}
