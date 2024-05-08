import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
function Selector({characters}) { 
    const names = characters?.map((character) => (
        <option key={character.id} >{character.name}</option>
    ))
    
    return (
        <div id="selector">
           <Link id='test' to="/creation">Creation Center!</Link>
            
            <select className="options">
                <option>Choose Below</option>
                {names}
            </select>
           
            
        </div> 
    )
}
export default Selector