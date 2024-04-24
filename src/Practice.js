import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import "./Home.css"
import bell from "./bell.png" 
import question from "./question.png"
import profile from "./profile.png"
import play from "./Play circle 1.png"


function Practice(){
    let sentences = [
        {"Sentence":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "status":"Added"},
        {
          "Sentence":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "status":"Not Added"
        },
        {"Sentence":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "status":"Added"},
        {
          "Sentence":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "status":"Not Added"
        },
        {
            "Sentence":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "status":"Not Added"
        },        
      ]    
  return(
    <div>    
    <div class="flex-container"> 
    <Sidebar class="sidebar">
      <h4 class="tophead">Student Name</h4> 
      <div class="sidebox"><p class="sidetext">Dashboard</p></div>
      <div class="sidebox"><p class="sidetext">Tests</p></div>
      <div class="sidebox"><p class="sidetext">Practice</p></div>
    </Sidebar>
    <div class="flex-child1">
    <input type="text" id="searchInput" placeholder="Search.."></input>
    <img src={bell} style={{width:"25px",height:"25px",marginLeft:"60%",marginTop:"18px"}}></img>
    <img src={question} style={{width:"22px",height:"25px",marginLeft:"40px"}}></img>
    <img src={profile} style={{width:"28  px",height:"28px",marginLeft:"40px"}}></img>
    <br/><br/>
    <div class="testcontainer">
    <p class="testheader">TEST</p>
    <button class="testbutton">Finish Testing</button>
    <br/><br/><br/>
    <div style={{boxShadow:"0 4px 2px -2px white",height:"100px"}}>
        <p class="testsent">Current Selected Sentence:</p><p class="testsent1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <br/>
        <p class="testrec">Current recording:</p><img style={{float:"left", marginLeft:"1%",width:"25px"}}src={play}/> 
        <div class="senetence-container" style={{backgroundColor:"rgb(249, 249, 249, 0.7)"}}>
            <br/><br/>
        <p style={{fontSize:"20px"}}><u>Ch-1 The Last Leaf</u></p>
        <p style={{fontSize:"25px",float:"left",marginLeft:"10px",marginTop:"0px"}}>Sentence</p>
        <br/>
        {
        sentences.map((sentence,index)=>
          index==0 ? <div class="sentence-div">
            <br/>
          <p class="sent">{sentence.Sentence}</p>
          <button class="but6">Record</button>
          <button class="but7">Evaluate</button>
        </div>:
        <div class="sentence-div1">
            <br/>
        <p class="sent">{sentence.Sentence}</p>
        <button class="but6">Record</button>
        <button class="but7">Evaluate</button>
      </div>      
        )
        }
      </div>                 
    </div>    
    </div>    
    </div>
    </div>
    </div>
  )  
}

export default Practice ;