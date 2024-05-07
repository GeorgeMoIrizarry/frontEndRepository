import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom"

function App(){
    return(
        <div >
            <nav id='homenav'> 
                <NavLink id="homenav" to="/">Home</NavLink>
            </nav>
            
            <nav id='projectnav'>
                <NavLink  to="/fsproject"> Additional Fromsoftware works!</NavLink>
            </nav>
            <Outlet />
        </div>
    );
};
export default App