import React from 'react'
import styled from 'styled-components'

function Viewers() {
  return (
    <ViewContainer>
      <Wrapper>
          <img src='/images/viewers-disney.png'/>
          <video autoPlay={true} loop={true} playsInline={true} muted={true} >
            <source src='/videos/1564674844-disney.mp4' type="video/mp4"/>
          </video>
      </Wrapper>
      <Wrapper>
          <img src='/images/viewers-marvel.png'/>
          <video autoPlay={true} loop={true} playsInline={true} muted={true} >
            <source src='/videos/1564676115-marvel.mp4' type="video/mp4"/>
          </video>
      </Wrapper>
      <Wrapper>
          <img src='/images/viewers-national.png'/>
          <video autoPlay={true} loop={true} playsInline={true} muted={true} >
            <source src='/videos/1564676296-national-geographic.mp4' type="video/mp4"/>
          </video>
      </Wrapper>
      <Wrapper>
          <img src='/images/viewers-dstar.png'/>
          <video autoPlay={true} loop={true} playsInline={true} muted={true} >
            <source src='/videos/star.mp4' type="video/mp4"/>
          </video>
      </Wrapper>
      <Wrapper>
          <img src='/images/viewers-pixar.png'/>
          <video autoPlay={true} loop={true} playsInline={true} muted={true} >
            <source src='/videos/1564676714-pixar.mp4' type="video/mp4"/>
          </video>
      </Wrapper>
      <Wrapper>
          <img src='/images/viewers-starwars.png'/>
          <video autoPlay={true} loop={true} playsInline={true} muted={true} >
            <source src='/videos/1608229455-star-wars.mp4' type="video/mp4"/>
          </video>
      </Wrapper>
    </ViewContainer>
  )
}

export default Viewers

const ViewContainer = styled.div`
  margin-top:2rem;
  display:grid;
  grid-template-columns:repeat(6, minmax(0,1fr));
  grid-gap:25px;
  padding:1rem 0;
  @media screen and (max-width:900px){
    grid-gap:20px;
  }
  @media screen and (max-width:800px){
    grid-template-columns:repeat(3, minmax(0,1fr));
  }
  @media screen and (max-width:600px){
    grid-template-columns:repeat(2, minmax(0,1fr));
  }
  
`
const Wrapper = styled.div`
  border:3px solid rgb(249,249,249,0.1);
  cursor:pointer;
  border-radius:10px;
  box-shadow: rgb(0 0 0 /69%) 0 26px 30px -10px,rgb(0 0 0 /73%) 0 16px 10px -10px;
  position:relative;
  transition:all 250ms;
  img{
    width:100%;
    height:100%;
    object-fit:cover;
  }
  video{
    width:100%;
    height:100%;
    position:absolute;
    left:0;
    top:0;
    border-radius:12px;
    right:0;
    bottom:0;
    z-index:-1;
    opacity:0;
  }
  &:hover{
    transform:scale(1.05);
    border:3px solid rgb(249,249,249,0.8);
    box-shadow: rgb(0 0 0 /80%) 0 40px 58px -16px,rgb(0 0 0 /72%) 0 30px 22px -10px;
    video{
      opacity:1;
      z-index:1;
    }
  }

`
