import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FaIcon } from 'react-icons/fa'; // Assuming you have a library for icons like react-icons
import learn from "./learn.png"
import english from "./english.png"
import './LandingPage.css';


function LandingPage(props) {
  const navigate = useNavigate()
  const navigatehome = () => {
    console.log("Function called")
    // navigate("/home")
  }

  return (
    <div>

      <Navbar bg="light" expand="lg" style={{ display: "flex", margin: "auto auto" }}>
        <div className='left'>
          <Navbar.Brand href="#home">
            <img src={learn} />
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className='descr'>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Product</Nav.Link>
              <Nav.Link href="#link">Resource</Nav.Link>
              <Nav.Link href="#home">Company</Nav.Link>
              <Nav.Link href="#link">Pricing</Nav.Link>

              {/* Add more description links as needed */}
            </Nav>
          </Navbar.Collapse>
        </div>
        <div className='signs'>
          <Link to="/signup">
            <Button variant="outline-primary">Sign In</Button>
          </Link>
          <Link to="/register">
            <Button variant="primary">Sign Up</Button>
          </Link>
        </div>
      </Navbar>

      <div style={{ marginTop: "100px" }}>
        <h1> <b>Learn English <br></br>effortlessly</b></h1>
      </div>
      <div style={{ justifyContent: "center", marginLeft: "20%", marginRight: "20%", color: "grey" }}>
        Learn pronunciation, by using our advanced software by manually speaking sentences and get scores, stats and reviews. You can schedule your daily tasks using calender, set goals and learn English easily.
      </div>
      <div style={{ marginTop: "20px" }}>
        <Button style={{ fontSize: "30px", padding: "10px 80px" }}>Get Started</Button>
      </div>
      <div style={{ marginTop: "40px" }}>
        <img src={english} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '30px' }} >
        <div className='Box' style={{ backgroundColor: "#A7C7E7" }}>
          <div style={{ color: "#00008B", fontSize: "50px" }}> 1+M </div>
          <div> New Users </div>
        </div>
        <div className='Box' style={{ backgroundColor: "#DAF7A6" }}>
          <div style={{ color: "#023020", fontSize: "50px" }}> 2+M </div>
          <div> Classes </div>
        </div>
        <div className='Box' style={{ backgroundColor: "#CF9FFF" }}>
          <div style={{ color: "#9400d3", fontSize: "50px" }}> 200+ </div>
          <div> Professional Tutors </div>
        </div>
        <div className='Box' style={{ backgroundColor: "#FFD580" }}>
          <div style={{ color: "#FF8C00", fontSize: "50px" }}> 40% </div>
          <div> Save Time </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#f1f1f1", paddingTop: "30px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className='lowerbox'>
            <h3>Product</h3>
            <Link style={{ textDecoration: "None" }} to="">Features</Link> <br></br>
            <Link style={{ textDecoration: "None" }} to="">Pricing</Link>
          </div>
          <div className='lowerbox'>
            <h3>Resource</h3>
            <Link style={{ textDecoration: "None" }} to="">Blog</Link> <br></br>
            <Link style={{ textDecoration: "None" }} to="">User Guides</Link>  <br></br>
            <Link style={{ textDecoration: "None" }} to="">Webinars</Link>
          </div>
          <div className='lowerbox'>
            <h3>About Us</h3>
            <Link style={{ textDecoration: "None" }} to="">About us</Link> <br></br>
            <Link style={{ textDecoration: "None" }} to="">Contact Us</Link>
          </div>
          <div className='lowerbox'>
            <h3>Blog</h3>
            <Link style={{ textDecoration: "None" }} to="">Personal</Link> <br></br>
            <Link style={{ textDecoration: "None" }} to="">Organization</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
