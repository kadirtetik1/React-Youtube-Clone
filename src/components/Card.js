import { ListSubheader } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import LdLogo from "../assets/ld-logo.jpg"

const Card = () => {
  return (
    <Container>
        <Image src='https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=92f3e02f63678acc8416d044e189f51'/>
      <Details>
        <ProfileImage src={LdLogo} alt='#'/>
        <DetailTexts>
            <Title>React Video Sharing App UI Design | Youtube UI Clone with React</Title>
            <ChannelName>Lama Dev</ChannelName>
            <Info>46B Görüntülenme . 2 ay önce</Info>

        </DetailTexts>
      </Details>
    </Container>
  )
}


const Container = styled.div`

width: 360px;
margin-bottom: 45px;


`

const Image = styled.img`

background-color: #999;
color: white;
width: 100%;
height: 200px;
border-radius: 15px;
cursor: pointer;

:hover{
background-color: #212121;
border-radius: 0px;
   
   
}

`

const Details = styled.div`

display: flex;
flex-direction: row;
margin-top: 16px;
gap: 12px;


`
const ProfileImage = styled.img`

width: 36px;
height: 36px;
border-radius: 50%;
cursor: pointer;
padding-left: 3px;

`

const DetailTexts = styled.div`

width: 85%;
height: 100px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
cursor: pointer;


`
const Title = styled.div`

width: 100%;
height: 50px;
color: white;
font-size: 18px;
font-weight: 500;
cursor: pointer;

`
const ChannelName = styled.div`

width: 30%;
height: 25px;
color: gray;
cursor: pointer;

`

const Info = styled.div`

width: 100%;
height: 25px;
color: gray;
cursor: pointer;
`





export default Card
