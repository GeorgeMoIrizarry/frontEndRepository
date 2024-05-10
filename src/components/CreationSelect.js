import { useState } from "react"
function CreationSelect( {creationCharacters, onSelectChange}) {
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value; 
        onSelectChange(selectedValue);
    }    
    
    const characters = creationCharacters?.map((character) => (
        <option key={character.id} value={character.name}>{character.name}</option>
    ) )
    console.log(creationCharacters)
    return (
        <div id="creationSelection">
            <h1 id="selectHeadingCreation">Character List:</h1>
            <select id="creationOptions" onChange={handleSelectChange}>
                <option>Choose Below</option>
                {characters}
            </select>
        </div>
    )
}
export default CreationSelect