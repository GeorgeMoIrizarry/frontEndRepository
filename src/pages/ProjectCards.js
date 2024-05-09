import Wolf from "../components/images/NewWolf.png"
import Hunter from "../components/images/Hunter.png"
import Tarnished from "../components/images/NewTarnished.png"
import Slayer from "../components/images/SlayerofDemons.png"
function ProjectCards( {setNum, numForBck}) {
    let card1 = <div id='card1' onMouseOver={() => setNum(1)} onMouseOut={() => setNum(0)}>
                    <img src={Wolf} alt="Sekiro Wolf" className="cardImg"></img>
                    <h1 className="cardHeading">Sekiro</h1>
                    <p className="cardText"> 
                    Immerse yourself in the breathtaking world of 1500s Japan as you play as Wolf, 
                    a skilled shinobi with a mission to save his young lord.
                    </p>
                    <a className="projectLink" 
                    href="https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/">Buy Now...</a>
                </div>
    let card2 =<div id='card2'onMouseOver={() => setNum(2)} onMouseOut={() => setNum(0)}>
                    <img src={Hunter} alt="Bloodborne Hunter" className="cardImg"></img>
                    <h1 className="cardHeading">Bloodborne</h1>
                    <p className="cardText">Embark on a perilous expedition through the enigmatic and 
                    treacherous city of Yharnam as a fearless hunter, fearlessly confronting its 
                    plague-stricken inhabitants as they mutate into monstrous creatures.
                    </p>
                    <a className="projectLink" href="https://store.playstation.com/en-us/product/UP9000-CUSA00900_00-BLOODBORNE000000">Buy Now...</a>
                </div>
    let card3 =<div id='card3'onMouseOver={() => setNum(3)} onMouseOut={() => setNum(0)}>
                    <img src={Tarnished} alt="Tarnished" className="cardImg"></img>
                    <h1 className="cardHeading">Elden Ring</h1>
                    <p className="cardText">As the Tanished, you will traverse the vast expanse of the Lands Between, 
                    fearlessly taking on demi gods and powerful lords in your pursuit to claim the title of Elden Lord.
                    </p>
                    <a className="projectLink" href="https://store.steampowered.com/app/1245620/ELDEN_RING/">Buy Now...</a>
                </div>
    let card4 =<div id='card4'onMouseOver={() => setNum(4)} onMouseOut={() => setNum(0)}>
                    <img src={Slayer} alt="Slayer of demons" className="cardImg"></img>
                    <h1 className="cardHeading">Demon Souls</h1>
                    <p className="cardText">Embark through the treacherous lands of Boletaria as the hero demon slayer. 
                    With a powerful combination of skills and weapons, 
                    your ultimate goal is to vanquish the fallen king and restore light to the fallen kingdom.</p>
                    <a className="projectLink" href="https://www.playstation.com/en-us/games/demons-souls/">Buy Now...</a>
                </div>
    
    function handleDisplay() {
        if(numForBck == 0) {
            return setNum(0)
        } else if(numForBck == 1) {
            card2 = null
            card3 = null
            card4 = null
        } else if(numForBck == 2) {
            card1 = null
            card3 = null
            card4 = null
            
        } else if(numForBck == 3) {
            card1 = null
            card2 = null
            card4 = null
        } else if(numForBck == 4) {
            card2 = null
            card3 = null
            card1 = null
        }
    }
    handleDisplay()
    
    
    return (
        <div>
            {card1}
            {card2}
            {card3}
            {card4}
        </div>
    )
}
export default ProjectCards