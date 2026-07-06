import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaUserShield,
    FaLock,
    FaEye,
    FaEyeSlash
} from "react-icons/fa";

import "../styles/AdminLogin.css";

function AdminLogin() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] =
        useState(false);

    const [username, setUsername] =
        useState("");

    const [password, setPassword] =
        useState("");

    function handleLogin(e) {

        e.preventDefault();

        // TEMP LOGIN
        // Backend வந்த பிறகு மட்டும் மாற்றலாம்

        if (
            username === "nantha" &&
            password === "123456"
        ) {

            navigate("/admin-dashboard");

        } else {

            alert("Invalid Admin Credentials");

        }

    }

    return (

        <div className="admin-login-page">

            {/* LEFT SIDE */}

            <div className="admin-left">

                <div className="brand-box">

                    <h1>
                        Fix<span>Local</span>
                    </h1>

                    <h2>
                        FixLocal Admin Portal
                    </h2>

                    <p>
                        Manage service providers,
                        customer bookings, approvals,
                        categories and platform settings.
                    </p>

                </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="admin-right">

                <div className="login-card">

                    <div className="login-top">

                        <div className="shield-icon">
                            <FaUserShield />
                        </div>

                        <h2>Admin Login</h2>

                        <p>
                            Authorized Personnel Only
                        </p>

                    </div>

                    <form onSubmit={handleLogin}>

                        <div className="input-groupp">

                            <label>
                                Username
                            </label>

                            <input
                                type="text"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) =>
                                    setUsername(e.target.value)
                                }
                            />

                        </div>

                        <div className="input-groupp">

                            <label>
                                Password
                            </label>

                            <div className="password-wrapper">

                                <input
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />

                                <button
                                    type="button"
                                    className="eye-btn"
                                    onClick={() =>
                                        setShowPassword(
                                            !showPassword
                                        )
                                    }
                                >

                                    {
                                        showPassword
                                            ? <FaEyeSlash />
                                            : <FaEye />
                                    }

                                </button>

                            </div>

                        </div>

                        <button
                            type="submit"
                            className="admin-login-btn"
                        >
                            Login
                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default AdminLogin;