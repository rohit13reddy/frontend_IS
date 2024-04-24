import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"
import Practice from "./Practice"
import LandingPage from './LandingPage';
import Signup from './Signup';
import Register from './Register';
import S_dashboard from './S_dashboard';
import T_dashboard from './T_dashboard';
import Help from "./Help";
import Settings from "./Settings";
import S_Practice from './S_Practice';
import S_Test from './S_Test';
import TCalender from './TCalender';
import SCalender from './SCalender';
import T_tests from './T_tests';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route exact path="/practice" element={<Practice/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/student_dashboard" element={<S_dashboard/>}/>
          <Route exact path="/teacher_dashboard" element={<T_dashboard/>}/>
          <Route exact path="/help" element={<Help/>}/>
          <Route exact path="/settings" element={<Settings/>}/>
          <Route exact path="/spractice" element={<S_Practice/>}/>
          <Route exact path="/stest" element={<S_Test/>}/>
          <Route exact path="/tcalender" element={<TCalender/>}/>
          <Route exact path="/scalender" element={<SCalender/>}/>
          <Route exact path="/ttest" element={<T_tests/>}/>
          {/* <LandingPage */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
