import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import sky from "./sky.png";

const Register = () => {
    const [alignment, setAlignment] = useState('left');
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
    const [inputValue4, setInputValue4] = useState('');
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

    const handleInputChange3 = (event) => {
        setInputValue3(event.target.value);
        checkAllFieldsFilled(); // Check if all fields are filled when input changes
    };
      
    const handleInputChange4 = (event) => {
        setInputValue4(event.target.value);
        checkAllFieldsFilled(); // Check if all fields are filled when input changes
    };

    const checkAllFieldsFilled = () => {
        if (inputValue1 && inputValue2 && inputValue3 && inputValue4) {
            setAllFieldsFilled(true);
        } else {
            setAllFieldsFilled(false);
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

                <div style={{justifyContent: "flex-start"}}>
                <div style={{ marginTop: "20px",  }}>
                    <b>Email: </b>
                    <input
                        type="text"
                        value={inputValue1}
                        onChange={handleInputChange1}
                        placeholder="example@gmail.com"
                    />
                </div>


                <div style={{ marginTop: "20px" }}>
                    <b>Full Name: </b>
                    <input
                        type="text"
                        value={inputValue2}
                        onChange={handleInputChange2}
                    />
                </div>


                <div style={{ marginTop: "20px" }}>
                    <b>Password: </b>
                    <input
                        type="text"
                        value={inputValue3}
                        onChange={handleInputChange3}
                        placeholder="Enter at least 8 characters"
                    />
                </div>

                <div style={{ marginTop: "20px" }}>
                    <b>Confirm Password: </b>
                    <input
                        type="text"
                        value={inputValue4}
                        onChange={handleInputChange4}
                        placeholder="Enter at least 8 characters"
                    />
                </div>

                <div style={{marginTop: "20px"}}>
                {/* Conditionally render a Link or Button based on allFieldsFilled state */}
                {allFieldsFilled ? (
                    <Link to="../">
                        <Button style={{ fontSize: "20px", padding: "10px 60px" }}>Register</Button>
                    </Link>
                ) : (
                    <Button style={{ fontSize: "20px", padding: "10px 60px" }} disabled>Register</Button>
                )}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
