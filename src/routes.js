import Home from "./pages/Home"
import DarkSoul from "./pages/DarkSoul"
import FSProject from "./pages/FSProjects"
const routes = [
            {
                path : "/",
                element : <Home />
            },
            {
                path : "/darksoul/:id",
                element : <DarkSoul />
            },
            {
                path : "/fsproject",
                element : <FSProject />
            }
        
    
]

export default routes
