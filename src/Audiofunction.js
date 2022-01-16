import React from 'react'





 //  WEB RTC CONTRAINS

 const constraints = window.constraints = {
   audio: true,
   video: false
 };
 
 let meterRefresh = null;
 
  function handleSuccess(stream) {
   const tracks=stream.getTracks()
   console.log(tracks[0].label)
   console.log("pehjos is real coder")
   window.stream = stream;
   var audioCast = document.querySelector('#audio');
    audioCast.srcObject = stream;
   console.log(audioCast,"hello pes")
 const pi=stream;
 }



 function handleError(error) {
   console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
 }
 
 function start() {
   console.log('Requesting local stream');
  
 console.log("hello world")
   try {
     window.AudioContext = window.AudioContext || window.webkitAudioContext;
     window.audioContext = new AudioContext();
     
   } catch (e) {
     alert('Web Audio API not supported.');
   }
 
   navigator.mediaDevices
       .getUserMedia(constraints)
       .then(handleSuccess)
       .catch(handleError);
 }
 function pi() {
  const me =10;
  
  }
 function stop() {
   console.log('Stopping local stream');
  
   window.stream.getTracks().forEach(track => track.stop());
 
 

 
 
 // WEB RTC 






}
export {start,stop,handleSuccess,pi} ;