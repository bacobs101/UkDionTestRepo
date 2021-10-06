import React from 'react'


import logo from '../assets/UK DION 2uk-dion-logo.png'
import userImg from '../assets/Rectangle 15img-round-egde.png'

export default function Dashboard() {
    return (
        <div className="dashboard-page">
            <div className="lhs">
                <div className="d-logo logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="menu">
                    <ul>
                        <li>Dashboard</li>
                        <li>Evaluation</li>
                        <li>Loan</li>
                        <li>Salary</li>
                        <li>Leave Management</li>
                    </ul>
                </div>

                <div className="oth-menu">
                    <ul>
                        <li>My Account</li>
                        <li>Resources</li>
                        <li>Recommendation</li>
                        <li>Sign out</li>
                    </ul>
                </div>
            </div>

            <div className="rhs">
                <div className="d-header flex">
                    <div className="search">
                        <input type="search" />
                    </div>

                    <div className="title-icons flex">
                        <div className="noti-bell">

                        </div>
                        <div className="user-title flex">
                            <p>Gloria A</p>
                            <img src={userImg} alt="user-img" />

                        </div>
                    </div>
                </div>

                <div className="top-items flex">
                    <div className="sc-t-1">
                        <div className="sc-tb-1">

                        </div>

                        <div className="sc-tb-1">

                        </div>
                    </div>

                    <div className="sc-t-1b">

                    </div>

                    <div className="sc-t-1b">

                    </div>
                </div>

                <div className="notification-zone flex">
                    <div className="n-box-1">

                    </div>
                    <div className="n-box-2">

                    </div>
                </div>

                <div className="oth-news">
                    
                </div>
            </div>
        </div>
    )
}
