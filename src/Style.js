import React from 'react'
import {ThemeProvider,createGlobalStyle, withTheme} from 'styled-components'
import {ThemeConsumer} from 'styled-components'


  export  const Globalstyle=createGlobalStyle`
    body{
    background-color:${props=>props.theme.mode==='dark'?'rgb(10, 25, 41)':'#e1e9ee'};
    
    color:${props=>props.theme.mode==='dark'?'':'#111'};
    
    }
    .star__pages>.MuiTabs-root{

      color:${props=>props.theme.mode==='dark'?'whitesmoke':''};
   
   }
    .input__Text{
      background-color:${props=>props.theme.mode==='dark'?'#2d383c':'#e1e9ee'};
 
      }
.contentComenttext{
  color:${props=>props.theme.mode==='dark'?'lightgrey':''};

}
.visible>p{

  color:${props=>props.theme.mode==='dark'?'lightgrey':''};
}
  .sportsheader1{
    background-color:${props=>props.theme.mode==='dark'?'':'#2196f3'};
  border-bottom:${props=>props.theme.mode==='dark'?'':'1px solid  #e1e9ee'};
  }
    .appbar{
      background-color:${props=>props.theme.mode==='dark'?'#171f24':''};
    border-bottom:${props=>props.theme.mode==='dark'?'':'1px solid  #e1e9ee'};
    }
    .shopCard_card{
      background-color:${props=>props.theme.mode==='dark'?'rgb(0, 30, 60)':''};
      color:${props=>props.theme.mode==='dark'?'white':'#111'};
    }
    .shopCard_card>p{
      background-color:${props=>props.theme.mode==='dark'?'rgb(0, 30, 60)':''};
      color:${props=>props.theme.mode==='dark'?'white':'#111'};
    }
    .shopCard_card>h6{
      background-color:${props=>props.theme.mode==='dark'?'rgb(0, 30, 60)':''};
      color:${props=>props.theme.mode==='dark'?'green':''};
    }
    .search{
      color:${props=>props.theme.mode==='dark'?'lightgrey':'black'};

    }
    .contentComentreply{

      border-bottom:${props=>props.theme.mode==='dark'?'1px solid gray':''};
    }
    .mainsection{
      background-color:${props=>props.theme.mode==='dark'?'#171f24':''};

    }
    .app_leftsearch{
      background-color:${props=>props.theme.mode==='dark'?'#333':'#f4f4f4f4'};
      color:${props=>props.theme.mode==='dark'?'#f4f4f4':'#f4f4f4f4'};
    }
    .search{
      background-color:${props=>props.theme.mode==='dark'?'#000':''};
      color:${props=>props.theme.mode==='dark'?'':''};
    }
    .app_leftsearch>input{
      background-color:${props=>props.theme.mode==='dark'?'':''};
      color:${props=>props.theme.mode==='dark'?'#f4f4f4':'#111'};


    }
  
    .input__Text>input{
      background-color:${props=>props.theme.mode==='dark'?'':''};
      color:${props=>props.theme.mode==='dark'?'#f4f4f4':'#111'};


    }
    .contentComent{
      background-color:${props=>props.theme.mode==='dark'?'#2d383c':''};

    }
    .contentComentreply1{
      color:${props=>props.theme.mode==='dark'?'#2196f3':''};

    }
    .main__post{
      background-color:${props=>props.theme.mode==='dark'?'#2d383c':''};
    }
    .title__textArea>textarea{
      background-color:${props=>props.theme.mode==='dark'?'#2d383c':''};
      color:${props=>props.theme.mode==='dark'?'#f4f4f4':'#111'};
    }
    .desc__textAREA>textarea{
      background-color:${props=>props.theme.mode==='dark'?'#2d383c':''};
      color:${props=>props.theme.mode==='dark'?'#f4f4f4':'#111'};
    }
    .brand{
      background-color:${props=>props.theme.mode==='dark'?'#2d383c':''};
      color:${props=>props.theme.mode==='dark'?'#fff':'#f4f4f4'};

    }
 
    @media(max-width:600px){
      .app__body{
        background-color:${props=>props.theme.mode==='dark'?' #272d30;':''};
        color:${props=>props.theme.mode==='dark'?'#f4f4f4f4':'#f4f4f4'};
          
          }
          .avatar{
            background-color:${props=>props.theme.mode==='dark'?'#121212':''};
            color:${props=>props.theme.mode==='dark'?'#f4f4f4f4':'#f4f4f4'};
        }
        
        .cardmain{
          background-color:${props=>props.theme.mode==='dark'?'rgb(0, 30, 60)':''};
            color:${props=>props.theme.mode==='dark'?'#f4f4f4':'#111'};
          }
          .card__footericonscontent{
            background-color:${props=>props.theme.mode==='dark'?'rgb(19,47,76)':''};
            color:${props=>props.theme.mode==='dark'?'#f4f4f4':'#111'}; 
        }
        
.card__footericonscontent>.MuiSvgIcon-root{
  background-color:${props=>props.theme.mode==='dark'?'rgb(19,47,76)':''};
            color:${props=>props.theme.mode==='dark'?'white':''}; 

}
@media(max-width:600px){
  .star__content{
    background-color:${props=>props.theme.mode==='dark'?'#2d383c':''};
    color:${props=>props.theme.mode==='dark'?'#f4f4f4':'#111'}; 
  }
  .imagesearch>.MuiSvgIcon-root{

    color: orange;
}
.imagesearch>input{
  background-color:${props=>props.theme.mode==='dark'?'#171f24':''};
  color:${props=>props.theme.mode==='dark'?'#f4f4f4':'#111'};
}
 background-color:${props=>props.theme.mode==='dark'?'':''};
      color:${props=>props.theme.mode==='dark'?'#f4f4f4':'#111'};

      .imagesearch{
        background-color:${props=>props.theme.mode==='dark'?'#171f24':''};
        color:${props=>props.theme.mode==='dark'?'#f4f4f4':'#111'};
      }
      .imagesearchs>input{
        background-color:${props=>props.theme.mode==='dark'?'#171f24':''};
        color:${props=>props.theme.mode==='dark'?'#f4f4f4':'#111'};
      }
       background-color:${props=>props.theme.mode==='dark'?'':''};
            color:${props=>props.theme.mode==='dark'?'#f4f4f4':'#111'};
      
            .imagesearchs{
              background-color:${props=>props.theme.mode==='dark'?'#171f24':''};
              color:${props=>props.theme.mode==='dark'?'#f4f4f4':'#111'};
            }
      .star__headermui{

        color:${props=>props.theme.mode==='dark'?'lightgray':''};
      }

      .iconbutton{
        color:${props=>props.theme.mode==='dark'?'rgb(221, 204, 204)':''};


      }

      .quickac__top{

        background-image:${props=>props.theme.mode==='dark'?'linear-gradient(blue,yellow,#2196f3,#2196f3,orange)':''};
       border:${props=>props.theme.mode==='dark'?'1px solid lightgrey':''};


      }
  
.shopcontent{

  background-color:${props=>props.theme.mode==='dark'?'#171f24':''};
  color:${props=>props.theme.mode==='dark'?'#f4f4f4':'#111'};

}
.card__contenttitle>h5{
  color:${props=>props.theme.mode==='dark'?'White':'#111'};

}

.card__contentdescription>p{
  color:${props=>props.theme.mode==='dark'?'white':'#333'};

}

.card__contentdescription>h6{
  color:${props=>props.theme.mode==='dark'?'#e1e9ee':'#333'};

}
.card__headerleft>p{
  color:${props=>props.theme.mode==='dark'?'lightgray':'gray'};

}

.card__contentdescription1>p{
  color:${props=>props.theme.mode==='dark'?'white':'white'};
}
.brand>p{

  color:${props=>props.theme.mode==='dark'?'#fff':'#fff'};

}
.follow{

 border-bottom:${props=>props.theme.mode==='dark'?'lightgray':'gray'}; 
}

.livescoreleft>p{
  color:${props=>props.theme.mode==='dark'?'#333':'orange'};

}
.livescoreright{
  color:${props=>props.theme.mode==='dark'?'#333':'orange'};

}
.content{

  background-color:${props=>props.theme.mode==='dark'?'#171f24':''};
            color:${props=>props.theme.mode==='dark'?'#f4f4f4':'#111'};

}
.play1>.MuiSvgIcon-root{

  background-color:${props=>props.theme.mode==='dark'?'#2d383c':''};
           
  color:${props=>props.theme.mode==='dark'?'white':''};
}

// withTheme
.card__headerleft>h3{
  color:${props=>props.theme.mode==='dark'?'':'teal'};
 
}
.card__footericonsconten>.MuiSvgIcon-root{
  color:${props=>props.theme.mode==='dark'?'whitesmoke':''};
 
}
.follow{
  color:${props=>props.theme.mode==='dark'?'':'#2196f3'};

}
 .foot>.MuiSvgIcon-root{
  color:${props=>props.theme.mode==='dark'?'':'teal'};

 }
 .footer{
  color:${props=>props.theme.mode==='dark'?'':'teal'};
  background-color:${props=>props.theme.mode==='dark'?' #121212':'#2196f3'};
 }
.footertext{
  background-color:${props=>props.theme.mode==='dark'?' #121212':'#2196f3'};

}
.bottombar{
  background-color:${props=>props.theme.mode==='dark'?' #121212':'#2196f3'};

 
}
.slider{
  background-color:${props=>props.theme.mode==='dark'?' ':'whitesmoke'};
  

}
.icons{
  background-color:${props=>props.theme.mode==='dark'?' ':'white'};
}
.pehjos{
  color:${props=>props.theme.mode==='dark'?'':'black'};

}
.card__content{
  border:${props=>props.theme.mode==='dark'?'1px solid #2d383c':''};
}
.topics_container__ch_content{
  border-bottom:${props=>props.theme.mode==='dark'?'1px solid #2d383c':''};
}
.topsearch>p{
  color:${props=>props.theme.mode==='dark'?'white':''};


}
.topics_container>p{
  color:${props=>props.theme.mode==='dark'?'#a6e22e':''};

}
.topics_container__ch{
  background-color:${props=>props.theme.mode==='dark'?'rgb(0, 30, 60)':''};
  color:${props=>props.theme.mode==='dark'?'white':''};

}
.stories{
  background-color:${props=>props.theme.mode==='dark'?'rgb(0, 30, 60)':''};
  color:${props=>props.theme.mode==='dark'?'white':''};

}
.topsearch{
  background-color:${props=>props.theme.mode==='dark'?'rgb(19, 47, 76)':''};


}
 .blinking{
  color:${props=>props.theme.mode==='dark'?'#2196f3':'#2196f3'};
  background-color:${props=>props.theme.mode==='dark'?'':''};

}
.btnSearc{
  color:${props=>props.theme.mode==='dark'?'#66B2FF':''};
  background-color:${props=>props.theme.mode==='dark'?'rgb(0, 30, 60)':''};
}
.btnSearch{
  color:${props=>props.theme.mode==='dark'?'#66B2FF':''};
  background-color:${props=>props.theme.mode==='dark'?'rgb(0, 30, 60)':''};
}
.btnSearc>.MuiSvgIcon-root{
  color:${props=>props.theme.mode==='dark'?'#66B2FF':''};
  
}
.topsearch>.MuiSvgIcon-root{
  color:${props=>props.theme.mode==='dark'?'#66B2FF':''};
  
}
.btnSearc>input{
  color:${props=>props.theme.mode==='dark'?'red':''};
  background-color:${props=>props.theme.mode==='dark'?'rgb(0, 30, 60)':''}; 
}
.btnSearch>input{
  color:${props=>props.theme.mode==='dark'?'red':''};
  background-color:${props=>props.theme.mode==='dark'?'rgb(0, 30, 60)':''}; 
}
.radio_card_3>div>p{
 
    font-size:${props=>props.theme.mode==='dark'?'19px':''};
    text-shadow:${props=>props.theme.mode==='dark'?' 0 0 3px yellow, 0 0 5px ':''}; 
  }
  .recomend>h6{ 
    background-color:${props=>props.theme.mode==='dark'?'rgb(19, 47, 76)':''};   
  color:${props=>props.theme.mode==='dark'?'#a31173':'#111'};
}
.buttons_child>a{
  background-color:${props=>props.theme.mode==='dark'?'rgb(19, 47, 76)':''};   
  color:${props=>props.theme.mode==='dark'?'#21f3e9':'#111'};
  border:${props=>props.theme.mode==='dark'?'1px solid #21f3e9':''};

}


  .creator>a{ 
    background-color:${props=>props.theme.mode==='dark'?'rgb(19, 47, 76)':''};   
  color:${props=>props.theme.mode==='dark'?'#a31173':'#111'};
}
  .creator>h4{ 
    background-color:${props=>props.theme.mode==='dark'?'rgb(19, 47, 76)':''};   
  color:${props=>props.theme.mode==='dark'?'#21f3e9':'#111'};
}
  .creator>p{ 
    background-color:${props=>props.theme.mode==='dark'?'rgb(19, 47, 76)':''};   
  color:${props=>props.theme.mode==='dark'?'#f4f4f4':'#111'};
}
.datails_head{
  background-color:${props=>props.theme.mode==='dark'?'rgb(0, 30, 60)':''};
    color:${props=>props.theme.mode==='dark'?'#f4f4f4':'#111'};
  }
.radio_card{
  background-color:${props=>props.theme.mode==='dark'?'rgb(0, 30, 60)':''};
    color:${props=>props.theme.mode==='dark'?'#f4f4f4':'#111'};
  }
  .radio_card_4>select{

    background-color:${props=>props.theme.mode==='dark'?'rgb(0, 30, 60)':''};
    color:${props=>props.theme.mode==='dark'?'#f4f4f4':'#111'};

  }
  .radio_card_4>select{

    border:${props=>props.theme.mode==='dark'?'1px solid green':''};
   

  }
.iconName>a{
  color:${props=>props.theme.mode==='dark'?'thistle':''};
  background-color:${props=>props.theme.mode==='dark'?'rgb(19, 47, 76)':''};
  }
  .iconName>a>.MuiSvgIcon-root{
    color:${props=>props.theme.mode==='dark'?'white':''};
    
    }
    `
    export default Globalstyle;
    
    
    //
  

