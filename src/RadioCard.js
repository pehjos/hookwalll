import React from 'react'
import Radio from './Radio'
import {Link} from 'react-router-dom'
import {Search,ArrowBackOutlined} from '@material-ui/icons'
function RadioCard() {
let fm = [
{

id:"1",
srcimg:"https://cdn.onlineradiobox.com/img/l/2/6982.v5.png",
name:"GBC Uniiq FM",
country:"Accra",
time:"3:00",
live:"LIVE",
imagecd:"https://thumbs.gfycat.com/HelpfulDazzlingBluebottlejellyfish-max-1mb.gif",

src:"http://173.249.50.205:8004/stream?type=http&nocache=1278"
},
{

id:"2",
srcimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHL5mu60-9CRe5HxvdfLVWwYs5cyFMwr0C3--cGarTMEE08b2kM7QI44gWd26AYbGdrTY&usqp=CAU",
name:"HIP HOP HITS",
country:"Tuin",
time:"3:00",
live:"LIVE",
imagecd:"https://thumbs.gfycat.com/HelpfulDazzlingBluebottlejellyfish-max-1mb.gif",

src:"https://streaming.radio.co/s97881c7e0/listen"
},
{

id:"3",
srcimg:"https://cdn-profiles.tunein.com/s47684/images/logog.png?t=1",
name:"PEACE FM 104.3",
country:"Accra",
time:"3:00",
live:"LIVE",
imagecd:"https://thumbs.gfycat.com/HelpfulDazzlingBluebottlejellyfish-max-1mb.gif",

src:"https://peacefm-atunwadigital.streamguys1.com/peacefm?listenerid=626a46b7cedd90051d3327d7df5ec209&awparams=playerid%3ASGplayer%3B&aw_0_1st.playerid=SGplayer&aw_0_1st.skey=1642367893338&aw_0_req.gdpr=true&us_privacy=1YNN&listenerid=626a46b7cedd90051d3327d7df5ec209&aw_0_req.gdpr=true&us_privacy=1YNN"
},
{
id:"4",
srcimg:"https://cdn-profiles.tunein.com/s273129/images/logod.jpg?t=151915",

country:"Accra",

live:"LIVE",

name:"3FM 92.3",
src:"https://stream.zeno.fm/e5qwnn42u8quv?DIST=TuneIn&TGT=TuneIn&maxServers=2&gdpr=0&us_privacy=1YNY&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTY0MTg2MDQ3NSwiaXNzIjoidGlzcnYifQ.A5G_RQL0oPGqn2-Xkga5oW5MXdUoz2SUN1XcuiofJCQ" 
},
{
id:"4",
srcimg:"https://liveonlineradio.net/wp-content/uploads/2016/10/Onua-FM-95.1.jpg",
name:"ONUA FM 95.1",
country:"Accra",
time:"3:00",
live:"LIVE",
imagecd:"https://liveonlineradio.net/wp-content/uploads/2016/10/3FM-92.7-1.jpg",

src:"http://node-29.zeno.fm/r5s8fghu538uv?TGT=TuneIn&maxServers=2&rj-ttl=5&DIST=TuneIn&us_privacy=1YNY&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTY0MTg2NjE2OSwiaXNzIjoidGlzcnYifQ.U0XSCipCRim3xS6ERSp9r93lCYdFDICPPVmr0XfiSsQ&gdpr=0&rj-tok=AAABfkbjELIAa0dnxTH7FHfi2g" 
},
]

// var radio = new Radio([
//   {
//     freq: '92.3',
//     title: "3FM",
//     src: 'https://stream.zeno.fm/e5qwnn42u8quv?DIST=TuneIn&TGT=TuneIn&maxServers=2&gdpr=0&us_privacy=1YNY&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTY0MTg2MDQ3NSwiaXNzIjoidGlzcnYifQ.A5G_RQL0oPGqn2-Xkga5oW5MXdUoz2SUN1XcuiofJCQ',
//     howl: null

//   },
//   {
//     freq: '93.5',
//     title: "Hip Hop Hits",
//     src: 'https://streaming.radio.co/s97881c7e0/listen',
//     howl: null
//   },
//   {
//     freq: '98.9',
//     title: "CNN",
//     src: 'https://tunein.streamguys1.com/cnn-new',
//     howl: null
//   },
//   {
//     freq: '103.3',
//     title: "city",
//     src: 'https://quasar.shoutca.st/tunein/citi973fm.pls',
//     howl: null
//   },
//montie
//https://node-12.zeno.fm/qv605hy79zquv?rj-ttl=5&aw_0_req_lsid=626a46b7cedd90051d3327d7df5ec209&acu-uid=611786856034&bsw-uid=14aea176-bfe8-4ae2-a1e5-078d7ab06d65&cto-uid=00af3f8b-2755-406a-b779-8592332988c7-61290b0f-4748&adt-uid=cuid_16ecdde8-1356-11ec-b9d2-1202f1c33782&amb-uid=2579854095675270346&rj-tok=AAABfkbnB8EAkvSZE3s-PTVuFg&aw-uid=626a46b7cedd90051d3327d7df5ec209&dyn-uid=05030001_6137e3e0c6e47&dbm-uid=CAESEK0YgnaroTBKaVBDpyE7dS4&mm-uid=37166129-0b09-4a00-a013-bfe18a018900&triton-uid=cookie%3Ab815e4a7-4b19-4e69-ad50-4d3a86249bf1&an-uid=7802751287784639049&ttd-uid=abf66495-699f-4ac4-a4e0-8d191e3e00fc
//onua fm
//http://node-29.zeno.fm/r5s8fghu538uv?TGT=TuneIn&maxServers=2&rj-ttl=5&DIST=TuneIn&us_privacy=1YNY&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTY0MTg2NjE2OSwiaXNzIjoidGlzcnYifQ.U0XSCipCRim3xS6ERSp9r93lCYdFDICPPVmr0XfiSsQ&gdpr=0&rj-tok=AAABfkbjELIAa0dnxTH7FHfi2g
// peacefm
// http://peacefm.atunwadigital.streamguys1.com/peacefm?DIST=TuneIn&TGT=TuneIn&maxServers=2&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTY0MTg2NDM3MiwiaXNzIjoidGlzcnYifQ.68PvQcoQvWRfCv6MPKeOp1q1-4nf1Qfw5QMOGRD5QeE
//adomfie fm
////str4.openstream.co/1344?aw_0_1st.collectionid%3D4469%26stationId%3D4469%26publisherId%3D1368%26k%3D1641865469
//obonu
//http://173.249.50.205:8006/;?DIST=TuneIn&TGT=TuneIn&maxServers=2&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTY0MTg2NTk0NCwiaXNzIjoidGlzcnYifQ.spq2KB3jWOBe-tTAmsxrw1UDAypdewv2pU3R9YwCNGs
//   {
//     freq: '107.7',
//     title: "Today's Hits",
//     src: 'https://rfcmedia.streamguys1.com/MusicPulse.mp3',
//     howl: null
//   }
// ]);



return (
<div>
<div className="radio_top">
<Link to ="/">
  < ArrowBackOutlined/>
  </Link>
<h3>REGISTER YOUR RADIO STATION WITH HOOKSTUDIO</h3> 
<div className="btnSearc">
<input type="text" placeholder="Search station"/>
<Search/>
</div>
</div> 
{  fm.map(station => (

<div>

<Radio
key={station.id}
src={station.src}
srcimg={station.srcimg}
name={station.name}
country={station.country}
time={station.time}
live={station.live}
imagecd={station.imagecd}
/>
</div>
))
}     
</div>
)
}

export default RadioCard
