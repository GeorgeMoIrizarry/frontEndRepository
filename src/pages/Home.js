import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

 
 function Home() {
   const [links, setLinks] = useState([])
   
   useEffect(() => {  
       fetch("http://localhost:8000/darksoul")
       .then((resp) => resp.json())
       .then((data) => setLinks(data))
   }, [])
   const linkBoxes = links.map((linkBox) => (
       <Link className="rectangle" key={linkBox.id} 
       to={`/darksoul/${linkBox.id}`} id={linkBox.title} data={linkBox}>{linkBox.title}</Link>
   ))
   return (
       <div id="container">
           <nav id='homenav'> 
                <NavLink id="homenav" to="/">Home</NavLink>
            </nav>
           <div id="box">
               <h1 className="heading">The Dark Souls Trilogy...</h1>
               <p className="text">Dark Souls, a game released in 2011, has left an indelible mark on the gaming world. 
                Its gripping difficulty and breathtaking worlds have captured the hearts of gamers everywhere.
                In this game, you'll undertake the daunting task of confronting and defeating divine beings and 
                otherworldly horrors as you explore the stunning landscapes created by Fromsoftware.
                With the ultimate goal of deciding whether to save a land ruled by the gods you've defeated or to let
                humanity take over, these three Dark Souls games have garnered numerous awards and critical acclaim. 
                Embark on a journey of epic proportions and explore these three incredible worlds for yourself.

               </p>
               <h1 className="heading">Explore Now!</h1>
               {linkBoxes}
           </div>
           <nav >
                <NavLink id="projectnav" to="/fsproject"> Fromsoftware Projects</NavLink>
            </nav>
       </div>
   )










 }


    
    

 export default Home