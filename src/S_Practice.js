import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const S_Practice = () => {
    const [sentence, setSentence] = useState('Play Cricket');
    const [isRecording, setIsRecording] = useState(false);
    const [audioChunks, setAudioChunks] = useState([]);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [showGraph, setShowGraph] = useState(false);
    const syllableData = [
        { syllable: 'Play', Intonation: 10, Pronunciation: 20, Pauses: 15, Stress: 30 },
        { syllable: 'Cric', Intonation: 25, Pronunciation: 15, Pauses: 20, Stress: 10 },
        { syllable: 'Ket', Intonation: 18, Pronunciation: 22, Pauses: 17, Stress: 25 },
    ];

    useEffect(() => {
        fetchQuestion();
    }, []);

    const fetchQuestion = () => {
        // Fetch sentence from backend
        fetch('your-backend-url')
            .then(response => response.json())
            .then(data => setSentence(data.sentence))
            .catch(error => console.error('Error fetching sentence:', error));
    };

    const startRecording = () => {
        setIsRecording(true);
        setAudioChunks([]);
        try {
            navigator.mediaDevices.getUserMedia({ audio: true })
                .then(mediaStream => {
                    const mediaRecorder = new MediaRecorder(mediaStream);
                    mediaRecorder.ondataavailable = event => {
                        if (event.data.size > 0) {
                            setAudioChunks(prevChunks => [...prevChunks, event.data]);
                        }
                    };
                    mediaRecorder.start();
                    setMediaRecorder(mediaRecorder);
                })
                .catch(error => console.error('Error starting recording:', error));
        } catch (error) {
            console.error('Error accessing media devices:', error);
        }
    };

    const stopRecording = () => {
        if (mediaRecorder && isRecording) {
            mediaRecorder.stop();
            setIsRecording(false);
        }
    };


    const handleEvaluate = () => {
        setShowGraph(true); // Update state to show the graph
    };

    const handleNextQuestion = () => {
        fetchQuestion();
        setShowGraph(false);
        // Additional logic for handling next question if needed
    };
    return (
        <div>
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand">Student Practice</a>
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

                <div style={{ margin: "40px 40px" }}>
                    <h2>You can practice here!!</h2>
                    <div style={{ marginTop: "50px" }}>
                        <h3> Sentence: <b>{sentence}</b></h3>
                        <div style={{ display: "flex" }}>
                            <div>
                                <div style={{ marginTop: "50px" }}>
                                    <button onClick={startRecording} disabled={isRecording} style={{ fontSize: '25px', padding: '10px 20px' }}>
                                        Start Recording
                                    </button>

                                    {/* Button to stop recording */}
                                    <button onClick={stopRecording} disabled={!isRecording} style={{ fontSize: '25px', padding: '10px 20px' }}>
                                        Stop Recording
                                    </button>
                                </div>
                                {/* Button to evaluate recorded audio */}
                                <div style={{ marginTop: "40px" }}>
                                    <button onClick={handleEvaluate}  style={{ fontSize: '25px', padding: '10px 20px' }}>
                                        Evaluate
                                    </button>
                                </div>
                            </div>
                            <div style={{ margin: "70px 70px" }}>
                                {/* Button for next question */}
                                <button onClick={handleNextQuestion} style={{ backgroundColor: 'green', color: 'white', fontSize: '25px', padding: '10px 20px' }}>
                                    Next Question
                                </button>
                            </div>
                        </div>
                    </div>

                    {showGraph && (
                <div style={{ marginTop: "50px" }}>
                    <BarChart width={400} height={300} data={syllableData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="syllable" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Intonation" fill="#8884d8" />
                        <Bar dataKey="Pronunciation" fill="#82ca9d" />
                        <Bar dataKey="Pauses" fill="#ffc658" />
                        <Bar dataKey="Stress" fill="#ff7300" />
                    </BarChart>
                </div>
            )}
                </div>
            </div>
        </div>
    )
}

export default S_Practice