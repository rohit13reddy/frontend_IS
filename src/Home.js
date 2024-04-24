import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import "./Home.css"
import bell from "./bell.png" 
import question from "./question.png"
import profile from "./profile.png"
import { useLocation } from 'react-router-dom';
function Home(){
  const location=useLocation()
  // console.log(location.state)

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
]
console.log(sentences)
return (
    <div>    
    <div class="flex-container"> 
    <Sidebar class="sidebar">
      <h4 class="tophead">Teacher Name</h4> 
      <div class="sidebox"><p class="sidetext">Dashboard</p></div>
      <div class="sidebox"><p class="sidetext">Calendar and Schedule</p></div>
      <div class="sidebox"><p class="sidetext">Tasks</p></div>
    </Sidebar>
    <div class="flex-child1">
    <input type="text" id="searchInput" placeholder="Search.."></input>
    <img src={bell} style={{width:"25px",height:"25px",marginLeft:"60%",marginTop:"18px"}}></img>
    <img src={question} style={{width:"22px",height:"25px",marginLeft:"40px"}}></img>
    <img src={profile} style={{width:"28  px",height:"28px",marginLeft:"40px"}}></img>
    <br/>
    <br/>
    <div><h1 style={{float:"left",margin:"60px",marginLeft:"20px",fontSize:"35px",fontFamily:"Arial, Helvetica, sans-serif"}}>Tests</h1></div>
    <div class="bottomcont">       
      <div class="flex-container1" >
        <br></br>
        <br/>
        <div class="lftbutton">
          <p style={{color:"white",fontFamily:"Arial, Helvetica, sans-serif"}}>Select Sentences</p>
        </div>  
        <div class="lftbutton1">
          <p style={{color:"#30dee8",fontFamily:"Arial, Helvetica, sans-serif",fontWeight:"bold"}}>Train</p>
        </div>                 
      </div>
      <br/><br/><br/><br/>
      <div class="selectbar">
        <h2 style={{"float":"left",marginTop:"10px",marginLeft:"20px",fontFamily:"Arial, Helvetica, sans-serif"}}> Select Chapter: </h2>
        <select style={{"float":"left",marginTop:"13px",marginLeft:"10px",width:"18%",height:"24px"}}>
        <option value="dog">Ch-3 The Last leaf</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        </select>
      </div>
      <button class="but1">
        View All Added Submissions
      </button>
      <button class="but2">
        Start Test
      </button> 
      <br/><br/><br/>
      <div class="senetence-container" style={{backgroundColor:"white"}}>
        <p style={{fontSize:"20px"}}><u>Ch-1 The Last Leaf</u></p>
        <p style={{fontSize:"25px",float:"left",marginLeft:"10px",marginTop:"0px"}}>Sentence</p>
        <br/>
        {
        sentences.map((sentence,index)=>
          index==0 ? <div class="sentence-div">
          <p class="sent">{sentence.Sentence}</p>
          {sentence["status"]=="Not Added" && <button class="but3">Add</button>}
          {sentence["status"]=="Added" && <p class="but4">ADDED</p>}
          {sentence["status"]=="Added" && <button class="but5">Remove</button>}
        </div>:
        <div class="sentence-div1">
          <p class="sent">{sentence.Sentence}</p>
          {sentence["status"]=="Not Added" && <button class="but3">Add</button>}
          {sentence["status"]=="Added" && <p class="but4">ADDED</p>}
          {sentence["status"]=="Added" && <button class="but5">Remove</button>}
        </div>        
        )
        }
      </div>    
    </div>
    </div>
    </div>
    </div>
)
}
export default Home