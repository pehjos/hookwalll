/*!
 *  Howler.js Radio Demo
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

// Cache references to DOM elements.
var elms = ['station0', 'title0', 'live0', 'playing0', 'station1', 'title1', 'live1', 'playing1', 'station2', 'title2', 'live2', 'playing2', 'station3', 'title3', 'live3', 'playing3', 'station4', 'title4', 'live4', 'playing4','station5', 'title5', 'live5', 'playing5'];
elms.forEach(function(elm) {
  window[elm] = document.getElementById(elm);
});

/**
 * Radio class containing the state of our stations.
 * Includes all methods for playing, stopping, etc.
 * @param {Array} stations Array of objects with station details ({title, src, howl, ...}).
 */
var Radio = function(stations) {
  var self = this;

  self.stations = stations;
  self.index = 0;
  
  // Setup the display for each station.
  for (var i=0; i<self.stations.length; i++) {
    window['title' + i].innerHTML = '<b>' + self.stations[i].freq + '</b> ' + self.stations[i].title;
    window['station' + i].addEventListener('click', function(index) {
      var isNotPlaying = (self.stations[index].howl && !self.stations[index].howl.playing());
      
      // Stop other sounds or the current one.
      radio.stop();

      // If the station isn't already playing or it doesn't exist, play it.
      if (isNotPlaying || !self.stations[index].howl) {
        radio.play(index);
      }
    }.bind(self, i));
  }
};
Radio.prototype = {
  /**
   * Play a station with a specific index.
   * @param  {Number} index Index in the array of stations.
   */
  play: function(index) {
    var self = this;
    var sound;

    index = typeof index === 'number' ? index : self.index;
    var data = self.stations[index];

    // If we already loaded this track, use the current one.
    // Otherwise, setup and load a new Howl.
    if (data.howl) {
      sound = data.howl;
    } else {
      sound = data.howl = new Howl({
        src: data.src,
        html5: true, // A live stream can only be played through HTML5 Audio.
        format: ['mp3', 'aac']
      });
    }

    // Begin playing the sound.
    sound.play();

    // Toggle the display.
    self.toggleStationDisplay(index, true);

    // Keep track of the index we are currently playing.
    self.index = index;
  },

  /**
   * Stop a station's live stream.
   */
  stop: function() {
    var self = this;

    // Get the Howl we want to manipulate.
    var sound = self.stations[self.index].howl;

    // Toggle the display.
    self.toggleStationDisplay(self.index, false);

    // Stop the sound.
    if (sound) {
      sound.unload();
    }
  },

  /**
   * Toggle the display of a station to off/on.
   * @param  {Number} index Index of the station to toggle.
   * @param  {Boolean} state true is on and false is off.
   */
  toggleStationDisplay: function(index, state) {
    var self = this;

    // Highlight/un-highlight the row.
    window['station' + index].style.backgroundColor = state ? 'rgba(255, 255, 255, 0.33)' : '';

    // Show/hide the "live" marker.
    window['live' + index].style.opacity = state ? 1 : 0;

    // Show/hide the "playing" animation.
    window['playing' + index].style.display = state ? 'block' : 'none';
  }
};

// Setup our new radio and pass in the stations.
var radio = new Radio([
  {
    freq: '92.3',
    title: "3FM",
    src: 'https://stream.zeno.fm/e5qwnn42u8quv?DIST=TuneIn&TGT=TuneIn&maxServers=2&gdpr=0&us_privacy=1YNY&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTY0MTg2MDQ3NSwiaXNzIjoidGlzcnYifQ.A5G_RQL0oPGqn2-Xkga5oW5MXdUoz2SUN1XcuiofJCQ',
    howl: null

  },
  {
    freq: '93.5',
    title: "Hip Hop Hits",
    src: 'https://streaming.radio.co/s97881c7e0/listen',
    howl: null
  },
  {
    freq: '98.9',
    title: "CNN",
    src: 'https://tunein.streamguys1.com/cnn-new',
    howl: null
  },
  {
    freq: '103.3',
    title: "city",
    src: 'https://quasar.shoutca.st/tunein/citi973fm.pls',
    howl: null
  },
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
  {
    freq: '107.7',
    title: "Today's Hits",
    src: 'https://rfcmedia.streamguys1.com/MusicPulse.mp3',
    howl: null
  },
  {
    freq: '104.3',
    title: "Peace FM",
    src: 'http://peacefm.atunwadigital.streamguys1.com/peacefm?DIST=TuneIn&TGT=TuneIn&maxServers=2&partnertok=eyJhbGciOiJIUzI1NiIsImtpZCI6InR1bmVpbiIsInR5cCI6IkpXVCJ9.eyJ0cnVzdGVkX3BhcnRuZXIiOnRydWUsImlhdCI6MTY0MTg2NDM3MiwiaXNzIjoidGlzcnYifQ.68PvQcoQvWRfCv6MPKeOp1q1-4nf1Qfw5QMOGRD5QeE',
    howl: null
  }
]);