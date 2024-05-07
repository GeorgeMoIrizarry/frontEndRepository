import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
function DarkSoul() {
    const [dsData, setDsData] = useState({})
    const params = useParams()
    const dsDataId = params.id
    console.log(params)
    useEffect(() => {
        fetch(`http://localhost:8000/darksoul/${dsDataId}`)
        .then((resp) => resp.json())
        .then((data) => setDsData(data))
    }, [dsDataId])
    console.log(dsData)
    return (
        <div >
            <h1></h1>
            
        </div> 
    )
 } 

 export default DarkSoul