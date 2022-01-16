import React from 'react'
import {Adsense} from '@ctrl/react-adsense';
import './adsence.css'
function Adsence() {
    return (
        <div className="ad">
         {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1446397159695121"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="-6t+ed+2i-1n-4w"
     data-ad-client="ca-pub-1446397159695121"
     data-ad-slot="5195482829"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>    */}
          {/* // auto full width responsive ads */}
{/* <AdSense.Google
  client='ca-pub-1446397159695121'
  slot='5195482829'
  style={{ display: 'block' ,with:300}}
  format='auto'
  responsive='true'
  layoutKey='6t+ed+2i-1n-4w'
 
/>   */}
<Adsense
  client="ca-pub-1446397159695121"
  slot="5195482829"
  style={{ display: 'flex' }}
  className="ad"
  layout="in-article"
  format="fluid"
/>
        </div>
    )
}

export default Adsence
