import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';

const SCalender = () => {
    
    const [date, setDate] = useState(new Date());
    const deadlines = [
        { date: new Date(2024, 4, 1), description: 'Test 1' },
        { date: new Date(2024, 4, 5), description: 'Test 2' },
        { date: new Date(2024, 4, 15), description: 'Midsem' },
    ];

    // Function to handle date change
    const onChange = (newDate) => {
        setDate(newDate);
    };

    const tileContent = ({ date: calendarDate }) => {
        const deadline = deadlines.find(d => d.date.toDateString() === calendarDate.toDateString());
        return deadline ? <div className="deadline">{deadline.description}</div> : null;
    };
    return (
        <div>
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand">Student Calendar</a>
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
                    {/* Calendar component */}
                    <div className="calendar-container" style={{ width: '800px', height: '600px', padding: '20px' }}>
                        {/* Text to be displayed */}
                        <div style={{ marginBottom: '10px', textAlign: 'center' }}></div>
                        {/* Calendar */}
                        <Calendar
                            onChange={onChange}
                            value={date}
                            tileContent={tileContent}
                            style={{ width: '100%', height: '100%' }} // To ensure the calendar fills its container
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SCalender