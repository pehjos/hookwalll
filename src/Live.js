import React from 'react'
import './Live.css'
import Livescore from './Livescore'

import Youtube from './Youtube'

import Shedule from './Schedule'

import Playeredits from './Playeredits'
import Playerhonors from './Playerhonors' 
import Playertranfer from './Playertransfer'
import Artworks from './Artworks'
function Live() {
    return (
        <div className="live">
         
   
<Livescore/>
            
 <Youtube/> 
  
 
 <Shedule/>
 <Playeredits/> 
 <Playerhonors/> 
 <Playertranfer/>  
 <Artworks/>  
        </div>
    )
}

export default Live
