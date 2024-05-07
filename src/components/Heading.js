import { NavLink, Link } from "react-router-dom"
function Heading( {dsData}) {
    return (
        <div id="darkSoulHeadingComp">
            <nav id='homenav'> 
                <NavLink id="homenav" to="/">Home</NavLink>
            </nav>
            <Link className="headingLink" to={`/darksoul/DS1`} id="headingDS1">DSI</Link>
            <Link className="headingLink" to={`/darksoul/DS2`} id="headingDS2">DSII</Link>
            <Link className="headingLink" to={`/darksoul/DS3`} id="headingDS3">DSIII</Link>
            <h1 id="darkSoulPageHeading">{dsData.heading}</h1>
            <nav >
                <NavLink id="projectnav" to="/fsproject"> Fromsoftware Projects</NavLink>
            </nav>
        </div>
    )
}
export default Heading 