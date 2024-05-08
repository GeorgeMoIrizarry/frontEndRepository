import Home from "./pages/Home"
import DarkSoul from "./pages/DarkSoul"
import FSProject from "./pages/FSProjects"
import Creation from "./pages/Creation"
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
            },
            {
                path : "/creation",
                element : <Creation />
            }
        
    
]

export default routes
