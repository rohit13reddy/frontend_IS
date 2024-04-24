import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const S_dashboard = () => {
    const [tests, setTests] = useState(0);
    const [questions, setQuestions] = useState(0);
    const [points, setPoints] = useState(0);

    useEffect(() => {
        // Fetch data from backend
        fetch('your-backend-api-endpoint')
            .then(response => response.json())
            .then(data => {
                setTests(data.tests || 0);
                setQuestions(data.questions || 0);
                setPoints(data.points || 0);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);
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

                    <div>
                        <h1> Overview</h1>
                    </div>


                    <div style={{ display: "flex", margin: "40px 0px" }}>
                        {/* Here some of the graphs have to be added */}

                        <div style={{ margin: "0px 40px", backgroundColor: "#ADD8E6", width: "300px", height: "150px", paddingTop: "25px" }}>
                            <h3>Tests Completed</h3>
                            <br></br>
                            {tests}
                        </div>
                        <div style={{ margin: "0px 40px", backgroundColor: "#FFD580", width: "300px", height: "150px", paddingTop: "25px" }}>
                            <h3>Total Problems solved</h3>
                            <br></br>
                            {questions}
                        </div>
                        <div style={{ margin: "0px 40px", backgroundColor: "lightgreen", width: "300px", height: "150px", paddingTop: "25px" }}>
                            <h3>Total Points earned</h3>
                            <br></br>
                            {points}
                        </div>
                    </div>

                    <div>
                        <div style={{ margin: "40px 0px" }}>
                            <h3>Recent tests</h3>
                        </div>
                        <div>
                            <table className="table" style={{ margin: "0px 50px" }}>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Test Title</th>
                                        <th scope="col">Score</th>
                                        <th scope="col">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>45</td>
                                        <td>21/4/2024</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>46</td>
                                        <td>17/4/2024</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>4325</td>
                                        <td>3/4/2024</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Jacob</td>
                                        <td>46</td>
                                        <td>17/4/2024</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Larry</td>
                                        <td>4325</td>
                                        <td>3/4/2024</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>Jacob</td>
                                        <td>46</td>
                                        <td>17/4/2024</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">7</th>
                                        <td>Larry</td>
                                        <td>4325</td>
                                        <td>3/4/2024</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default S_dashboard