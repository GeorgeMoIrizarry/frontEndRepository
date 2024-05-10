function CreationText( {newObj}) {
    return (
        <div id="creationTextContainer">
            <h1 id="creationLoreHeading">{newObj.name}</h1>
            <p id="creationLoreText">{newObj.lore}</p>
        </div>
    )
}
export default CreationText