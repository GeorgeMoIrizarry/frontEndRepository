import Text from "./Text"
import ImageSect from "./ImageSect"
function Body({newObj}) {
    
    return (
        <div id="dsBody">
            <Text newObj={newObj}  />
            <ImageSect newObj={newObj} />
        </div>
    )
}
export default Body