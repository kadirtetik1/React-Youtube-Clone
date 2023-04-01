import React from 'react'
import styled from 'styled-components'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (

    <Container>
   <Wrapper>
<Search>
    <Input placeholder='Ara'/>
    <IconBackGround>
    <SearchIcon/>
    </IconBackGround>
</Search>

<Items>
<KeyboardVoiceIcon/>

<ItemsR>

<VideoCallIcon/>
<NotificationsIcon/>
<AccountCircleIcon/>
</ItemsR>

</Items>

   </Wrapper>
    </Container>
    
  )
}

const IconBackGround = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color:#222222;
border-top-right-radius: 30px;
border-bottom-right-radius: 30px;
width: 10%;
height: 100%;
cursor: pointer;

`

const Items = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 30%;


`
const ItemsR = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 50%;
cursor: pointer;

`

const Container = styled.div`

position: sticky;
top: 0;

background-color: #0f0f0f;
color: white;
height: 70px;

`

const Wrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
height: 100%;
padding: 0px 20px;
justify-content:flex-end;
position: relative;


`
const Search = styled.div`
position: absolute;
left: 0px;
right: 150px;
margin: auto; 
width: 45%;  
display: flex;
align-items: center;
justify-content: space-between;
height: 60%;
border: 1px solid #272727;
border-radius: 30px;

`
const Input = styled.input`
border: none;
background-color: transparent;
padding-left: 10px;
width: 100%;
border-top-left-radius: 30px;
border-bottom-left-radius: 30px;
height: 80%;

`



export default Navbar
