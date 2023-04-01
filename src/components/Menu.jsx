import React from 'react'
import styled from 'styled-components'
import YoutubeLogo from "../assets/youtube-logo.png"
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ExploreIcon from '@mui/icons-material/Explore';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import MenuIcon from '@mui/icons-material/Menu';
import EdLogo from "../assets/ed-logo.jpg"
import LdLogo from "../assets/ld-logo.jpg"
import YbLogo from "../assets/yb-logo.jpg"




const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
            <MenuIcon/>
        <img src={YoutubeLogo} alt="#"></img>
        YouTube
        
        </Logo>
        <MenuItems><HomeIcon/>Ana Sayfa</MenuItems>
        <MenuItems><SlowMotionVideoIcon/>Shorts</MenuItems>
        <MenuItems><SubscriptionsIcon/>Abonelikler</MenuItems>
        <Line/>
        <MenuItems><VideoLibraryIcon/>Kitaplık</MenuItems>
        <MenuItems><HistoryIcon/>Geçmiş</MenuItems>
        <MenuItems><WatchLaterIcon/>Daha sonra izle</MenuItems>
        <MenuItems><ThumbUpIcon/>Beğendiklerim</MenuItems>
        <Line/>
        <Title>Abonelikler</Title>
        <MenuItems><img src={LdLogo}alt="#"></img>Lama Dev</MenuItems>
        <MenuItems><img src={EdLogo}alt="#"></img>Engin Demirog</MenuItems>
        <MenuItems><img src={YbLogo}alt="#"></img>Yazılım Bilimi</MenuItems>
        <Line/>
        <MenuItems><ExploreIcon/>Keşfet</MenuItems>
        <MenuItems><TrendingUpIcon/>Trendler</MenuItems>
        <MenuItems><LiveTvIcon/>Canlı</MenuItems>
        
        

      </Wrapper>
    </Container>
  )
}

export default Menu

const Container  = styled.div `

position: sticky;
top: 0;


/* ::-webkit-scrollbar {
  width: 10px;
  background-color: #807d7d;
  
}
:hover {
    overflow-y: scroll;
} */


flex:1;
background-color: #0f0f0f;
color:white;
height:100vh;

`;

const Logo = styled.div`
display: flex;
align-items: center;
gap: 2px;
font-weight: 700;
font-size: larger;
margin-bottom: 25px;
cursor: pointer;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;


img{
    
    width: 20%;
    padding-left: 20px;

}

`


const Wrapper = styled.div`

padding: 18px 26px;
`

const MenuItems = styled.div`
display: flex;
align-items: center;
gap: 20px;
cursor: pointer;
font-size: 14px;
padding: 8.5px 0px;
cursor: pointer;

img{
    width: 15%;
    border-radius: 50%;
}

:hover{
    background-color:#373737;
  border-radius: 10px;
  padding: 5px ;
}

:active{
    background-color:#515151;
    
}
`

const Line = styled.hr`
margin: 15px 0px;
border: 0.5px solid #373737;

`

const Title = styled.h2`

font-size: 17px;
font-weight: 500;
color: #eee7e7;

`
