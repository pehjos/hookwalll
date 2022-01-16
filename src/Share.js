import React from 'react'
import './share.css'
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    PinterestShareButton,
    VKShareButton,
    WhatsappShareButton,
    EmailShareButton,
//icons and buttons
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    PinterestIcon,
    VKIcon,
    WhatsappIcon,
    EmailIcon
  } from "react-share";
function Share({url,description,imageUrl,title}) {

   

    return (
        <div className="icons">
                <FacebookShareButton 
                 url={url}
                 description={description}
                 title={title}
                 image={imageUrl}
                 >
            <FacebookIcon
              size={"2rem"} // You can use rem value instead of numbers
              round
            />
          </FacebookShareButton>

          <TwitterShareButton 
           url={"http://www.camperstribe.com"}
           title={"CampersTribe - World is yours to explore"}
           hashtag="#camperstribe">
          {/* <TwitterShareButton title={title}> */}
            <TwitterIcon size={"2rem"} round />
          </TwitterShareButton>

          <WhatsappShareButton  separator=":: " title="hello"
           url={"http://www.camperstribe.com"}>
            <WhatsappIcon size={"2rem"} round />
          </WhatsappShareButton>

          <LinkedinShareButton
          title="me"
            windowWidth={750}
            windowHeight={600}
            url={"http://www.camperstribe.com"}
          >
            <LinkedinIcon size={"2rem"} round />
          </LinkedinShareButton>

          <PinterestShareButton
           url={"http://www.camperstribe.com"}
            url={String(window.location)}
            media=""
            windowWidth={1000}
            windowHeight={730}
          >
            <PinterestIcon size={"2rem"} round />
          </PinterestShareButton>

          <VKShareButton image="" windowWidth={660} windowHeight={460}
           url={"http://www.camperstribe.com"}>
            <VKIcon size={"2rem"} round />
          </VKShareButton>
          <EmailShareButton subject="hello" body="body">
            <EmailIcon size={"2rem"} round />
          </EmailShareButton>
        </div>
    )
}

export default Share
