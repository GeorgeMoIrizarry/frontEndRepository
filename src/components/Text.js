import { useState } from "react"

function Text({newObj}) {
    return (
        <div id="textSection">
            <h1 className="characterTitle">{newObj.name}</h1>
            <p className="characterLore">{newObj.lore}</p>
        </div>
    )
}
export default Text