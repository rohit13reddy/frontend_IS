import React, { useState, useEffect } from 'react'
import profile from "./profile.png"
import { Link } from 'react-router-dom';

const Settings = () => {
    const [userData, setUserData] = useState({
        username: 'Rohit2432',
        password: 'fffn32r223',
        name: 'Rohit Reddy'
    });

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            // Make an API call to fetch user data from the backend
            const response = await fetch('');
            const data = await response.json();
            setUserData(data); // Assuming the response contains username, password, and name fields
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    return (
        <div>
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand">Student Dashboard</a>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>

            <div style={{ display: "flex", minHeight: "100vh" }}>
                <div style={{ borderRight: "1px solid #ccc", padding: "30px" }}>
                    <ul class="nav flex-column">
                        <li class="nav-item" style={{margin: "10px 0px"}}>
                            <Link to="../student_dashboard" style={{ textDecoration: "None"}}>Dashboard</Link>
                        </li>
                        <li class="nav-item" style={{margin: "10px 0px"}}>
                            <Link to="../stest" style={{ textDecoration: "None"}}>Test</Link>
                        </li>
                        <li class="nav-item" style={{margin: "10px 0px"}}>
                            <Link to="../spractice" style={{ textDecoration: "None"}}>Practice</Link>
                        </li>
                        <li class="nav-item" style={{margin: "10px 0px"}}>
                            <Link to="../settings" style={{ textDecoration: "None"}}>Profile</Link>
                        </li>
                        <li class="nav-item" style={{margin: "10px 0px"}}>
                            <Link to="../scalender" style={{ textDecoration: "None"}}>Calender</Link>
                        </li>
                    </ul>
                </div>


                <div>
                    <div style={{ margin: "10px 30px" }}>
                        <h1>Profile</h1>


                        <div style={{ display: "flex" }}>

                            <div style={{ margin: "40px 40px" }}>
                                <img src={profile} style={{ width: '200px', height: '200px' }} />
                            </div>

                            <div style={{ margin: "40px 40px" }}>
                                <div style={{marginTop: "40px"}}>
                                    <label> <b>Username: </b></label> {userData.username}
                                </div>
                                <div style={{marginTop: "40px"}}>
                                    <label><b>Password:</b></label> {userData.password}
                                </div>
                                <div style={{marginTop: "40px"}}>
                                    <label><b>Name:</b></label> {userData.name}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;