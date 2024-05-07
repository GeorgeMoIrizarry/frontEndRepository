import { NavLink } from "react-router-dom"
import { useState } from "react"
import ProjectCards from "./ProjectCards"

function FSProjects() {
    const [numForBck, setNum] = useState(0)
    
    function handleBackground() {
        if(numForBck == 0) {
            return background = "projects"
            
        } else if (numForBck == 1) {
            background = "projects1"

        } else if (numForBck == 2) {
            background = "projects2"
        } else if (numForBck == 3) {
            background = "projects3"
        } else if (numForBck == 4) {
            background = "projects4"
        }
    }
    let background = "projects"
    handleBackground()
    return (
        <div id={background}>
            <nav id='homenav'> 
                <NavLink id="homenav" to="/">Home</NavLink>
            </nav>
        <ProjectCards setNum={setNum} numForBck={numForBck}/>
           
        </div>
    )  
 }

 export default FSProjects
//  <ProjectCards projectInfo={projectInfo}/>
//             <div id='card1' onMouseOver={() => setNum(1)} onMouseOut={() => setNum(0)}display='none'>
//                 <img src={Wolf} alt="Sekiro Wolf" className="cardImg"></img>
//             </div>
//             <div id='card2'onMouseOver={() => setNum(2)} onMouseOut={() => setNum(0)}>
//                 <img src={Hunter} alt="Bloodborne Hunter" className="cardImg"></img>
//             </div>
//             <div id='card3'onMouseOver={() => setNum(3)} onMouseOut={() => setNum(0)}>
//                 <img src={Tarnished} alt="Tarnished" className="cardImg"></img>
//             </div>
//             <div id='card4'onMouseOver={() => setNum(4)} onMouseOut={() => setNum(0)}>
//                 <img src={Slayer} alt="Slayer of demons" className="cardImg"></img>
//             </div>