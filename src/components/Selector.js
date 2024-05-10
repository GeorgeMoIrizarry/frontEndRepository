import { Link } from "react-router-dom"
import { useState } from "react"
function Selector({characters, onSelectChange}) { 
    const [grabbedChara, setCharacter] = useState("")
    
    const handleSelectChange = (event) => { 
        const selectedValue = event.target.value;
        onSelectChange(selectedValue);
    }    
    
    const names = characters?.map((character) => (
        <option key={character.id}  value={character.name}>{character.name}</option>
    ))
    
    return (
        <div id="selector">
           <Link id='test' to="/creation">Creation Center!</Link>
            <select className="options"  onChange={handleSelectChange}>
                <option>Choose Below</option>
                {names}
            </select>
           
            
        </div> 
    )
}
export default Selector