import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const T_tests = () => {
    const [tests, setTests] = useState([]);
    const [sentences, setSentences] = useState({});
    const [currentTest, setCurrentTest] = useState('');
    const [newTestName, setNewTestName] = useState('');
    const [newSentence, setNewSentence] = useState('');

    const handleTestChange = (e) => {
        const selectedTest = e.target.value;
        setCurrentTest(selectedTest);
    };

    const handleSentenceChange = (e) => {
        setNewSentence(e.target.value);
    };

    const addTest = () => {
        if (newTestName.trim() !== '') {
            setTests([...tests, newTestName]);
            setSentences({ ...sentences, [newTestName]: [] });
            setNewTestName('');
        }
    };

    const addSentence = () => {
        if (newSentence.trim() !== '') {
            setSentences({ ...sentences, [currentTest]: [...sentences[currentTest], newSentence] });
            setNewSentence('');
        }
    };

    const removeSentence = (indexToRemove) => {
        setSentences({
            ...sentences,
            [currentTest]: sentences[currentTest].filter((_, index) => index !== indexToRemove),
        });
    };

    return (
        <div>
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand">Teacher Tests</a>
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
                        <li class="nav-item" style={{ margin: "10px 0px" }}>
                            <Link to="../teacher_dashboard" style={{ textDecoration: "None" }}>Dashboard</Link>
                        </li>
                        <li class="nav-item" style={{ margin: "10px 0px" }}>
                            <Link to="../ttest" style={{ textDecoration: "None" }}>Test</Link>
                        </li>
                        <li class="nav-item" style={{ margin: "10px 0px" }}>
                            <Link to="../tcalender" style={{ textDecoration: "None" }}>Calender</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <div style={{ margin: "20px 30px" , display: "flex"}}>  <h1> Tests </h1></div>
                    <div>
                        <div style={{display: "flex", margin: "20px 60px"}}>
                        <div style={{backgroundColor: "lightBlue", padding: "20px"}}>
                            <h3>Add Test</h3>
                        <input type="text" value={newTestName} onChange={(e) => setNewTestName(e.target.value)} />
                        <button onClick={addTest}>Add Test</button>
                        </div>

                        <div style={{marginLeft: "100px", backgroundColor: "lightblue", padding: "20px"}}>
                            <h3>Select a test</h3>
                        <select onChange={handleTestChange} value={currentTest}>
                            <option value="">Select a test</option>
                            {tests.map((test, index) => (
                                <option key={index} value={test}>{test}</option>
                            ))}
                        </select>

                        </div>
                        </div>

                        {currentTest && (
                            <div style={{margin: "40px 40px", backgroundColor: "#FFFFAD", padding: "20px"}}>
                                <h3>Sentences for {currentTest}</h3>
                                <ul>
                                    {sentences[currentTest].map((sentence, index) => (
                                        <li key={index}>
                                            {sentence}
                                            <button onClick={() => removeSentence(index)} style={{backgroundColor: "lightred", marginLeft: "10px"}}> Remove</button>
                                        </li>
                                    ))}
                                </ul>

                                <input type="text" value={newSentence} onChange={handleSentenceChange} />
                                <button onClick={addSentence} style={{backgroundColor: "lightgreen"}}>Add Sentence</button>
                            </div>
                        )}
                    </div>
                </div>
            </div></div>
    )
}

export default T_tests