import React from 'react'
import './commentrybody.css'
import moment from 'moment'

import Audiostream,{Aud} from './Audiostream'
import {Link,NavLink} from 'react-router-dom'
import {
    SwitchVideo,Mic,
    AccessTime,
ShareOutlined,
FavoriteBorder,
PlayCircleOutline,
Videocam,
ChatBubbleOutline,
} from '@material-ui/icons'
import {Avatar} from '@material-ui/core'
import {CircularProgress} from '@material-ui/core'
import {useSelector} from 'react-redux'





function Commentrybody({post, setCurrentId}) {
 
  const posts=useSelector((state)=>state.posts)
    return (
        <div className="commentry__body">
             <div className="commentry__btnlive">
                 <Link to="/audio"underline="none">
             <div className="commentry__btnlivevideo">
             <Mic/>
            <p>Video Broadcast</p>
        </div>
        </Link>
        <Link to="/videostream" >
        <div className="commentry__btnliveaudio">
            <Videocam/>
            <p>Audio Broadcast</p>
            </div>
            </Link>
            </div>
{/* commentry cards */}
<div className="com_body">
<div className="com_user">
{/* user */}
<Avatar src="https://scontent.facc5-2.fna.fbcdn.net/v/t1.0-9/140326370_240266130966991_6726040901847292743_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFOhVPJNfPE_qbOJCGRdxnYIsN7kRyXmWwiw3uRHJeZbIjiQgeqjs3JhazuwPiXjWw-xhWZV7utSc2sc4ZEDgTv&_nc_ohc=peoGLEvrrX0AX8LTVZP&_nc_ht=scontent.facc5-2.fna&oh=86be106c4947bb6edac34157593943fc&oe=603FCB1F"/>
<p>Dr driving </p>
</div>
<div className="com_content">
{/*content */}
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
</div>
<div className="com_footer">
{/* footer */}
<FavoriteBorder/>
<ChatBubbleOutline/>
<ShareOutlined/>

</div>
<div className="com_play">
{/* playtime */}
<div className="com_playone">
{/* playtime1 */}
<PlayCircleOutline/>
<p>Play Audio</p>

</div>
<div className="com_playtwo">
{/* playtime2 */}
<AccessTime/>
<p>1 minutes ago</p>
</div>
</div>
</div>
<div className="com_body">
<div className="com_user">
{/* user */}
<Avatar src="https://scontent.facc5-1.fna.fbcdn.net/v/t1.0-9/93216597_129505758662055_2102145590971334656_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeHI4p7SQFWwy5SgtimjX69d3LOGe8j0MOvcs4Z7yPQw69Yz4A5Xsrc5ZG4Xw88wHuZumIMOdA2wyJw6wXBoaDeP&_nc_ohc=gE5_bVVE8oYAX8E0Oar&_nc_ht=scontent.facc5-1.fna&oh=40450b21ce8ab4645ee57008e3116f6d&oe=603E17D3"/>
<p>Dr APUSI </p>
</div>
<div className="com_content">
{/*content */}
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
</div>
<div className="com_footer">
{/* footer */}
<FavoriteBorder/>
<ChatBubbleOutline/>
<ShareOutlined/>

</div>
<div className="com_play">
{/* playtime */}
<div className="com_playone">
{/* playtime1 */}
<PlayCircleOutline/>
<p>Play Audio</p>

</div>
<div className="com_playtwo">
{/* playtime2 */}
<AccessTime/>
<p>1 minutes ago</p>
</div>
</div>
</div>
<div className="com_body">
<div className="com_user">
{/* user */}
<Avatar src="https://scontent.facc5-1.fna.fbcdn.net/v/t1.0-9/132554686_3062432333858420_5465231623649679152_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGg_svS_QwIFCydhrdqJQzkvubQ_lZNNqe-5tD-Vk02pyJ8lpJkrtpF5UGjtkhSEQ0kNaqpB4KPnYf-V7O_nLE6&_nc_ohc=S4DQcsQZEuMAX9gpEN3&_nc_ht=scontent.facc5-1.fna&oh=ee26423e170b48e6cff14c3bcfca1fe1&oe=603FB226"/>
<p>Dr SAH </p>
</div>
<div className="com_content">
{/*content */}
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
</div>
<div className="com_footer">
{/* footer */}
<FavoriteBorder/>
<ChatBubbleOutline/>
<ShareOutlined/>

</div>
<div className="com_play">
{/* playtime */}
<div className="com_playone">
{/* playtime1 */}
<PlayCircleOutline/>
<p>Play Audio</p>

</div>
<div className="com_playtwo">
{/* playtime2 */}
<AccessTime/>
<p>1 minutes ago</p>
</div>
</div>
</div>

 </div>
    )
}

export default Commentrybody

