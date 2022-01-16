import React from 'react'
import './playerhonors.css'
function Playerhonors() {
    return (
        <div className="player__honors">
            <p>Latest Player Honors</p>
              <div className="player__honorscontent">
            <img src="https://www.thesportsdb.com/images/media/player/thumb/7ie6kv1576948605.jpg/preview"/>
            <p>Omar
Bogle</p>
            <img src="https://www.thesportsdb.com/images/icons/honours/small/Austrian_Bundesliga.png"/>
            
            </div>
            <div className="player__honorscontent">
            <img src="https://www.thesportsdb.com/images/media/player/thumb/wayw641602283756.jpg/preview"/>
            <p>Pierre-Emerick
Aubameyang</p>
            <img src="https://www.thesportsdb.com/images/icons/honours/small/Coupe_de_la_Ligue.png"/>
            
            </div> 
        </div>
    )
}

export default Playerhonors