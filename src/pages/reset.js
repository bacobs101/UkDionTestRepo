import React, { useState } from 'react'
import axios from 'axios'

import key from '../assets/key 1key.png'
import logo from '../assets/UK DION 2uk-dion-logo.png'
import qoutemarks from '../assets/Vectorcommas.png'

const initialState = {
    password: "",
    cf_password: ""
}

export default function Reset() {
    const [user, setUser] = useState(initialState)

    const { password, cf_password } = user

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
                    <h5>Reset Password</h5>

                    <p>Gain access to all work resources</p>

                    <div className="form-input">
                        <label htmlFor="email">Password*</label>
                        <input type="password" id="password" name="password" value={password} onChange={handleChange} />
                        <small>show</small>
                    </div>

                    <div className="form-input">
                        <label htmlFor="passowrd">Confirm Password*</label>
                        <input type="cf_password" id="cf_password" name="cf_password" value={cf_password} onChange={handleChange} />
                        <small>show</small>
                    </div>

                    <div className="form-input">
                        <button type="submit">Reset Password</button>
                    </div>
                </form>
            </div>

            <div className="oth-side col-50">
                <div className="employee-box">
                    <div className="e-b-out-key">
                        <img src={key} alt="img" />
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
