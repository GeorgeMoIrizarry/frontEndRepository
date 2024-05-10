import CreationStation from "../components/CreationStation"
import CreationSelect from "../components/CreationSelect"
import CreationText from "../components/CreationText"
import Creationimage from "../components/CreationImage"
import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"



function Creation() {
    
    const [creationCharacters, setCharacter] = useState([])
    const [selectedValue, setSelectedValue] = useState('')
    const [newObj, setNewObj] = useState({})
    useEffect(() => {
        fetch("http://localhost:8000/creation")
        .then((resp) => resp.json())
        .then((data) => setCharacter(data))
    }, [])
    let flag = 1
    const handleSelectChange = (value) => {
        setSelectedValue(value);
        if(selectedValue.length > 1 || flag === 1) {
            flag++
            creationCharacters.filter((character) => {
                if(character.name === value) {
                    setNewObj(character)
                } else {
                    console.log('fail')
                }
            })
        } 
      }
    function addNewCharacter(newChara) {
        setCharacter([...creationCharacters, newChara])
    }
    
    return (
        <div id='creationPage'>
            <nav id='homenav'> 
                <NavLink id="homenav" to="/">Home</NavLink>
            </nav>
            <nav >
                <NavLink id="projectnav" to="/fsproject"> Fromsoftware Projects</NavLink>
            </nav>
            <CreationStation addNewCharacter={addNewCharacter} />
            <CreationSelect creationCharacters={creationCharacters} onSelectChange={handleSelectChange} />
            <CreationText newObj={newObj} />
            <Creationimage newObj={newObj} />
        </div>
    )
}
export default Creation