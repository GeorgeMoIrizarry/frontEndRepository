import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Heading from "../components/Heading"
import Selector from "../components/Selector"
import Body from "../components/Body"
function DarkSoul() {
    const [dsData, setDsData] = useState([])
    const [selectedValue, setSelectedValue] = useState('')
    const [newObj, setNewObj] = useState({})
    const params = useParams()
    const dsDataId = params.id
    
    useEffect(() => {
        fetch(`http://localhost:8000/darksoul/${dsDataId}`)
        .then((resp) => resp.json())
        .then((data) => setDsData(data))
    }, [dsDataId])
    const characters = dsData.characters
    let flag = 1
    const handleSelectChange = (value) => {
        setSelectedValue(value);
        if(selectedValue.length > 1 || flag === 1) {
            flag++
            characters.filter((character) => {
                if(character.name === value) {
                    setNewObj(character)
                } else {
                    console.log('fail')
                }
            })
        } 
      }
      console.log(selectedValue)
      console.log(newObj)
    return (
        <div id="bckImg" >
            <Heading dsData={dsData} />
            <Selector characters={characters} onSelectChange={handleSelectChange}/>
            <Body newObj={newObj} />
            
        </div> 
    )
 } 

 export default DarkSoul