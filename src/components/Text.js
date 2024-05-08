function Text() {
    const heading = "hello"
    const paragraph = "hello"
    return (
        <div id="textSection">
            <h1 className="characterTitle">{heading}</h1>
            <p className="characterLore">{paragraph}</p>
        </div>
    )
}
export default Text