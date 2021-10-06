import React, { useState } from 'react'

import emImg from '../assets/Ellipse 2ELI-img.png'
import logo from '../assets/UK DION 2uk-dion-logo.png'
import qoutemarks from '../assets/Vectorcommas.png'


export default function Forget() {
    const [email, setEmail] = useState(" ")

    const handleSubmit = e => {
        
    }
    return (
        <div className="auth-page">
            <div className="login-box col-50">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <form onSubmit={handleSubmit}>
                    <h5>Send confimation link</h5>

                    <p>Gain access to all work resources</p>

                    <div className="form-input">
                        <label htmlFor="email">Work Email*</label>
                        <input type="email" id="email" name="email" value={email} onChange={e => setEmail(email)} />
                    </div>

                    <div className="form-input">
                        <button type="submit">Send Confirmation</button>
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
