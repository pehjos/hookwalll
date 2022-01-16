import React from 'react'
import {ThemeConsumer} from 'styled-components'
import './star.css'
import IconButtonic from '@material-ui/core/IconButton';

export default function Togglemode(){
return(<ThemeConsumer>{
    theme=>(
        <div className="btton">
<IconButtonic
onClick={e=>theme.setTheme(
theme.mode==='dark'?
{...theme,mode:'light'}:{...theme,mode:'dark'}

)}
>
    <div className="mode">
<img src="https://img.icons8.com/color/48/000000/partly-cloudy-night.png"/>
<p>Dark Mode</p>
</div>
    </IconButtonic>
    </div>
    )
   
    
    
    }</ThemeConsumer>)



}