import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Heading from "../components/Heading"
import Selector from "../components/Selector"
function DarkSoul() {
    const [dsData, setDsData] = useState([])
    const params = useParams()
    const dsDataId = params.id
    useEffect(() => {
        fetch(`http://localhost:8000/darksoul/${dsDataId}`)
        .then((resp) => resp.json())
        .then((data) => setDsData(data))
    }, [dsDataId])
    const characters = dsData.characters
    return (
        <div id="bckImg" >
            <Heading dsData={dsData} />
            <Selector characters={characters}/>
            
            
        </div> 
    )
 } 

 export default DarkSoul