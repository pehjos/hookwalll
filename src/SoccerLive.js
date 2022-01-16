import React from 'react'
import {Link} from 'react-router-dom'
import {
ArrowBackOutlined


} from '@material-ui/icons'
 function LiveScoreAPi() {
    const hour = new Date().getHours();
    
return (
<div className="topics">
<div className="sportsheader1">
    <Link to="/sports">
  < ArrowBackOutlined/>
  </Link>
  <p>SOCCER LIVE SCORES</p>
  </div>
<div className="topics_container">
<div className="topics_container__">
 
{/* apiv2.allsportsapi.com/football?met=Livescore&APIkey=440b167c986eab487e3028d27171407a7c70d02b129969321d4782245bba47fb 
 https://apiv2.allsportsapi.com/football/?&met=Standings&leagueId=177&APIkey=440b167c986eab487e3028d27171407a7c70d02b129969321d4782245bba47fb
https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=440b167c986eab487e3028d27171407a7c70d02b129969321d4782245bba47fb&from=2022-01-1&to=2022-01-10
https://apiv2.allsportsapi.com/football/?&met=Videos&eventId=986202&APIkey=440b167c986eab487e3028d27171407a7c70d02b129969321d4782245bba47fb

AIzaSyDgV34M4LGZJQi4sY6w2FB11TOgxnnOheE     youtube api key*/}
{hour <16?(
<div id="wg-api-football-livescore"
    data-host="v3.football.api-sports.io"
    data-refresh="1000"
    
    data-key=" ee54e8b2e141bb22ce92d9f3e0878241"
    
    data-theme="dark"
    //1e7e5b03dc6a11c43dce6c0dc3830798 old one
    // ee54e8b2e141bb22ce92d9f3e0878241 new one
    data-show-errors="false"
    class="api_football_loader">
</div>)
 :(
    <div id="wg-api-football-livescore"
        data-host="v3.football.api-sports.io"
        data-refresh="1000"
        
        data-key=" 1e7e5b03dc6a11c43dce6c0dc3830798"
        
        data-theme="dark"
        //1e7e5b03dc6a11c43dce6c0dc3830798 old one
        // ee54e8b2e141bb22ce92d9f3e0878241 new one
        data-show-errors="false"
        class="api_football_loader">
    </div>)}
<script
    type="module"
    src="https://widgets.api-sports.io/football/1.1.8/widget.js">
</script>

 </div>
 </div>
 </div>
 )
 }

 export default LiveScoreAPi
