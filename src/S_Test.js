import React, { useState, useEffect } from 'react';
import './S_test.css';
import { Link } from 'react-router-dom';
const S_Test = () => {
    const [isRecording, setIsRecording] = useState(false);

    const handleStartRecording = () => {
        // Logic to start recording audio
        setIsRecording(true);
        console.log('Recording started');
    };

    const handleStopRecording = () => {
        // Logic to stop recording audio
        setIsRecording(false);
        console.log('Recording stopped');
    };

    const sentences = [
        'I like to play football.',
        'Hello how was your day?',
        'Lets finish the barbeque otherwise it will get cold.',
        'The monkeys fought with the gorillas.',
        'Neeraj ate the authentic Biryani.',
        'Lets have some fun.',
    ];
    const handleFinishTesting = () => {
        // Add your logic for finishing testing here
        console.log('Testing finished!');
    };
    return (
        <div>
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand">Student Tests</a>
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
                    <div style={{ display: "flex" }}>
                        <div style={{ margin: "20px 40px" }}>
                            <h1> TEST </h1>
                        </div>
                    </div>

                    <div style={{ display: "flex", marginTop: "50px", margin: "20px 40px" }}>
                        <h3>Sentences</h3>
                    </div>

                    <div style={{ margin: "20px 60px" }}>
                        <table className="audio-table">
                            <thead>
                                <tr>
                                    <th>Sentence</th>
                                    <th>Start Recording</th>
                                    <th>Stop Recording</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sentences.map((sentence, index) => (
                                    <tr key={index}>
                                        <td>{sentence}</td>
                                        <td>
                                            <button onClick={handleStartRecording}>Start</button>
                                        </td>
                                        <td>
                                            <button onClick={handleStopRecording} disabled={!isRecording}>
                                                Stop
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div style={{ marginTop: "30px" }}>
                        <button onClick={handleFinishTesting} style={{ fontSize: '25px' }}>Finish Testing</button>
                    </div>
                </div>



            </div>


        </div>
    )
}

export default S_Test