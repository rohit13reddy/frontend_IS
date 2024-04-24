import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import sky from "./sky.png";
// useLocation
const Signup = () => {
    const [alignment, setAlignment] = useState('left');
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [allFieldsFilled, setAllFieldsFilled] = useState(false); // State to track all fields filled

    const handleAlignment = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };

    const handleInputChange1 = (event) => {
        setInputValue1(event.target.value);
        checkAllFieldsFilled(); // Check if all fields are filled when input changes
    };

    const handleInputChange2 = (event) => {
        setInputValue2(event.target.value);
        checkAllFieldsFilled(); // Check if all fields are filled when input changes
    };

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        checkAllFieldsFilled(); // Check if all fields are filled when checkbox changes
    };

    const checkAllFieldsFilled = () => {
        if (inputValue1 && inputValue2 && isChecked) {
            setAllFieldsFilled(true);
        } else {
            setAllFieldsFilled(false);
        }
    };

    const handleSignIn = () => {
        if (allFieldsFilled) {
            if (alignment === 'left') {
                // Navigate to student dashboard
                console.log("Navigating to student dashboard");
            } else if (alignment === 'right') {
                // Navigate to teacher dashboard
                console.log("Navigating to teacher dashboard");
            }
        }
    };

    return (
        <div style={{ backgroundImage: `url(${sky})`, height: "100vh", padding: "8% 35%" }}>
            <div style={{ backgroundColor: "#FFFFFF", paddingTop: "30px", paddingBottom: "30px" }}>
                <div>
                    <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                    >
                        <ToggleButton value="left" aria-label="left aligned">
                            Student
                        </ToggleButton>
                        <ToggleButton value="right" aria-label="right aligned">
                            Teacher
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
                <div style={{marginTop: "20px"}}>
                    <b>Email: </b> 
                    <input
                        type="text"
                        value={inputValue1}
                        onChange={handleInputChange1}
                        placeholder="example@gmail.com"
                    />
                </div>
                <div style={{marginTop: "20px"}}>
                    <b>Password: </b> 
                    <input
                        type="text"
                        value={inputValue2}
                        onChange={handleInputChange2}
                        placeholder="Enter at least 8 characters"
                    />
                </div>
                <div style={{marginTop: "10px"}}>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    /> I agree with Terms and Conditions
                </div>
                <div style={{marginTop: "20px"}}>
                    {/* Use Link component for navigation */}
                    {/* {allFieldsFilled && ( */}
                        <Link
                            to={alignment === 'left' ? '../student_dashboard' : '../teacher_dashboard'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Button
                                style={{ fontSize: "20px", padding: "10px 60px" }}
                            >
                                Sign In
                            </Button>
                        </Link>
                    {/* )} */}
                </div>
                <div><br></br>or sign in with</div>
                <div style={{marginTop: "10px"}}>
                    <Button style={{backgroundColor: "green"}}> Google </Button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
