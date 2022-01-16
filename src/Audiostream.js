import React,{useState,useRef,useEffect} from 'react'
import ScriptTag from 'react-script-tag';
// import song from './btnsound.mp3'
import './audiostream.css'
import { MicNone, Pause, PlayCircleOutline, SlowMotionVideo,SettingsVoice } from '@material-ui/icons'
import { handleSuccess } from './Audiofunction'
// import Rtc from './rtc'

//  WEB RTC CONTRAINS

var startButton = document.querySelector('#startButton');
var callButton = document.querySelector('#callButton');
var hangupButton = document.querySelector('hangupButton');
// callButton.disabled = true;
// hangupButton.disabled = true;
// startButton.onclick = start;
// callButton.onclick = call;
// hangupButton.onclick = hangup;

var startTime;
var remoteVideo;

// var localVideo = document.querySelector('#localVideo');
// var remoteVideo = document.querySelector('#remoteVideo');

// localVideo.addEventListener('loadedmetadata', function() {
//   trace('Local video videoWidth: ' + this.videoWidth +
//     'px,  videoHeight: ' + this.videoHeight + 'px');
// });

// remoteVideo.addEventListener('loadedmetadata', function() {
//   trace('Remote video videoWidth: ' + this.videoWidth +
//     'px,  videoHeight: ' + this.videoHeight + 'px');
// });

// remoteVideo.onresize = function() {
//   trace('Remote video size changed to ' +
//     remoteVideo.videoWidth + 'x' + remoteVideo.videoHeight);
//   // We'll use the first onsize callback as an indication that video has started
//   // playing out.
//   if (startTime) {
//     var elapsedTime = window.performance.now() - startTime;
//     trace('Setup time: ' + elapsedTime.toFixed(3) + 'ms');
//     startTime = null;
//   }
// };

var localStream;
var pc1;
var pc2;
var offerOptions = {
  offerToReceiveAudio: 1,
  offerToReceiveVideo: 1
};

function getName(pc) {
  return (pc === pc1) ? 'pc1' : 'pc2';
}

function getOtherPc(pc) {
  return (pc === pc1) ? pc2 : pc1;
}

function gotStream(stream) {

  trace('Received local stream');
  var  localVideo = document.querySelector('#localVideo');
  localVideo.srcObject = stream;
  localStream = stream;
console.log(localStream)

}

function start() {
  trace('Requesting local stream');
 
  navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true,
  })
    .then(gotStream)
    .catch(function(e) {
      alert('getUserMedia() error: ' + e.name);
    });
}

function call() {
 
  trace('Starting call');
  startTime = window.performance.now();
  
  var videoTracks = localStream.getVideoTracks();
  var audioTracks = localStream.getAudioTracks();
  if (videoTracks.length > 0) {
    trace('Using video device: ' + videoTracks[0].label);
  }
  if (audioTracks.length > 0) {
    trace('Using audio device: ' + audioTracks[0].label);
  }
  var servers = null;
  pc1 = new RTCPeerConnection(servers);
  trace('Created local peer connection object pc1');
  pc1.onicecandidate = function(e) {
    onIceCandidate(pc1, e);
  };
  pc2 = new RTCPeerConnection(servers);
  trace('Created remote peer connection object pc2');
  pc2.onicecandidate = function(e) {
    onIceCandidate(pc2, e);
  };
  pc1.oniceconnectionstatechange = function(e) {
    onIceStateChange(pc1, e);
  };
  pc2.oniceconnectionstatechange = function(e) {
    onIceStateChange(pc2, e);
  };
  pc2.onaddstream = gotRemoteStream;

  pc1.addStream(localStream);
  trace('Added local stream to pc1');

  trace('pc1 createOffer start');
  pc1.createOffer(
    offerOptions
  ).then(
    onCreateOfferSuccess,
    onCreateSessionDescriptionError
  );
  console.log(localStream)
}

function onCreateSessionDescriptionError(error) {
  trace('Failed to create session description: ' + error.toString());
}

function onCreateOfferSuccess(desc) {
  trace('Offer from pc1\n' + desc.sdp);
  trace('pc1 setLocalDescription start');
  pc1.setLocalDescription(desc).then(
    function() {
      onSetLocalSuccess(pc1);
    },
    onSetSessionDescriptionError
  );
  trace('pc2 setRemoteDescription start');
  pc2.setRemoteDescription(desc).then(
    function() {
      onSetRemoteSuccess(pc2);
    },
    onSetSessionDescriptionError
  );
  trace('pc2 createAnswer start');
  // Since the 'remote' side has no media stream we need
  // to pass in the right constraints in order for it to
  // accept the incoming offer of audio and video.
  pc2.createAnswer().then(
    onCreateAnswerSuccess,
    onCreateSessionDescriptionError
  );
}

function onSetLocalSuccess(pc) {
  trace(getName(pc) + ' setLocalDescription complete');
}

function onSetRemoteSuccess(pc) {
  trace(getName(pc) + ' setRemoteDescription complete');
}

function onSetSessionDescriptionError(error) {
  trace('Failed to set session description: ' + error.toString());
}

function gotRemoteStream(e) {
  var  remoteVideo = document.querySelector('#remoteVideo');
  remoteVideo.srcObject = e.stream;
  trace('pc2 received remote stream');
}

function onCreateAnswerSuccess(desc) {
  trace('Answer from pc2:\n' + desc.sdp);
  trace('pc2 setLocalDescription start');
  pc2.setLocalDescription(desc).then(
    function() {
      onSetLocalSuccess(pc2);
    },
    
    onSetSessionDescriptionError
  );
  trace('pc1 setRemoteDescription start');
  pc1.setRemoteDescription(desc).then(
    function() {
      onSetRemoteSuccess(pc1);
    },
    onSetSessionDescriptionError
  );
}

function onIceCandidate(pc, event) {
  getOtherPc(pc).addIceCandidate(event.candidate)
    .then(
      function() {
        onAddIceCandidateSuccess(pc);
      },
      function(err) {
        onAddIceCandidateError(pc, err);
      }
    );
  trace(getName(pc) + ' ICE candidate: \n' + (event.candidate ?
    event.candidate.candidate : '(null)'));
}

function onAddIceCandidateSuccess(pc) {
  trace(getName(pc) + ' addIceCandidate success');
}

function onAddIceCandidateError(pc, error) {
  trace(getName(pc) + ' failed to add ICE Candidate: ' + error.toString());
}

function onIceStateChange(pc, event) {
  if (pc) {
    trace(getName(pc) + ' ICE state: ' + pc.iceConnectionState);
    console.log('ICE state change event: ', event);
  }
}

function hangup() {
  trace('Ending call');
  pc1.close();
  pc2.close();
  pc1 = null;
  pc2 = null;

}

// logging utility
function trace(arg) {
  var now = (window.performance.now() / 1000).toFixed(3);
  console.log(now + ': ', arg);
}


// WEB RTC 





 function Audiostream() {

  
const[casting ,setCasting]=useState(false)
const Audioref=useRef(null)

const cast=()=>{
    if(casting){
    
    //stop
  setCasting(false)
  
  Audioref.current.pause()
  hangup()
    }else{
      
    //play
   setCasting(true)
   Audioref.current.play()
   Audioref.current.currentTime=0;
 console.log("session starting in 5 seconds")
   setTimeout(() => {
    start()
  }, 3000)
    }
    
    }


    return (
   
    
        <div className="audiostream">
        
              <div className="audiostreamtop">
            {casting?(<SettingsVoice className="mic2"/>):(<MicNone className="micone"/>)}
            <audio src="{song}" ref={Audioref}/>
            </div>
            <div className="audiostreamloader">
            <div id="instant">
            <meter high="0.25" max="1" value="0"></meter>
            <div className="value"> </div>
        </div>
            </div>
            <div className="audiostreamloadertime">
            <p>00:00</p>
            </div>
            <div className="audiostreamtext">
           {casting?(<Pause onClick={cast} 
           />):(<PlayCircleOutline onClick={cast}
           />)}
           {casting?(<p>End Session</p>):(<p>Start Session</p>)}
           <button onClick={call}>click me</button>
            </div>
            <video id="localVideo"controls autoplay muted playsinline></video>
    <video id="remoteVideo" controls autoplay playsinline></video>

     
        </div>
      
    )
    
    
}
// export const Hash=()=>(handleSuccess.stream)

export const Aud=()=>(  <div>  <video id="remoteVideo" controls autoplay playsinline></video>
</div>)
export default Audiostream;