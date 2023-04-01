import React from 'react'
import styled from 'styled-components'

const TopMenu = () => {
  return (
    <Container>

      <Menus>Tümü</Menus>
      <Menus>Oyun</Menus>
      <Menus>Canlı</Menus>
      <Menus>Müzik</Menus>
      <Menus>İzlenenler</Menus>
      <Menus>Yeni öneriler</Menus>

    </Container>
  )
}



const Menus = styled.div`

display: flex;
justify-content: center;
align-items: center;
width: 80px;
height: 30px;
background-color: #212121;
color: white;
margin: -10px 15px 10px -5px;
font-size: 14px;
border-radius: 10px;
cursor: pointer;

:hover{

    background-color: #474747;
}

`

const Container = styled.div`
display: flex;
flex-direction: row;

`

export default TopMenu
