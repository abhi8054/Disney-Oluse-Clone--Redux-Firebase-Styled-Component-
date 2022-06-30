import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import db from "../firebase"
import {useParams} from "react-router-dom"

function DetailComp() {

  const {id} = useParams();
  const [singleData,setSingleData] = useState({})

  useEffect(() =>{
    db.collection("movies")
    .doc(id)
    .get()
    .then(
      (res) =>{
        setSingleData(res.data())
      }  
    )
  },[])

  console.log(singleData)

  return (
    <DetailContainer>
      <BackgroundImg>
        <img src={singleData.BackgroundImg} />
      </BackgroundImg>
      <TitleImage>
        <img src={singleData.TitleImg} />
      </TitleImage>
      <Controls>
        <Playbtn>
          <img src="/images/play-icon-black.png" />
          <span>Play</span>
        </Playbtn>
        <Trailerbtn>
          <img src="/images/play-icon-white.png" />
          <span>Trailer</span>
        </Trailerbtn>
        <Addbtn>
          <span> + </span>
        </Addbtn>
        <Groupbtn>
          <img src='/images/group-icon.png' />
        </Groupbtn>
      </Controls>
      <Title>
        {singleData.Title}
      </Title>
      <Genre>
        {singleData.Genres}
      </Genre>
      <Description>
        {singleData.Description}
      </Description>
    </DetailContainer>
  )
}

export default DetailComp

const DetailContainer = styled.div`
  height:calc(100vh - 70px);
  width:100%;
  position:relative;
  padding:1rem 2rem;
  @media screen and   
  (max-width:360px){
    padding:1rem;
  }
`

const BackgroundImg = styled.div`
  position:fixed;
  top:70px;
  bottom:0;
  left:0;
  right:0;
  z-index:-1;
  background-image:linear-gradient(to right, #040404, #000000, #656565);
  img{
    width:100%;
    height:100%;
    object-fit:cover;
    opacity:0.5;
  }
`

const TitleImage = styled.div`
  height:32vh;
  max-width:calc(100vh - 40vh);
  img{
    width:100%;
    height:100%;
    object-fit:contain;
  }
  @media screen and (max-width:560px){
    height:28vh;
    max-width:100%;
    width:100%;
  }
`
const Controls = styled.div`
  display:flex;
  gap:1.4rem;
  align-items:center;
  margin-top:1.2rem;
  position:relative;
  @media screen and (max-width:360px){
    flex-wrap:wrap;
  }
`
const Playbtn = styled.button`
  display:flex;
  align-items:center;
  height:52px;
  border-radius:5px;
  text-transform:uppercase;
  border:1px solid rgb(249,249,249);
  padding:0 24px 0 21px;
  cursor:pointer;
  background-color:rgb(249,249,249);
  img{
    width:30px
  }
  span{
    color:black;
    letter-spacing:1.5px;
    font-weight:bold;
  }
  &:hover{
    background:rgb(198,198,198);
  }
`
const Addbtn = styled.button`
  height:44px;
  width:44px;
  border:2px solid rgb(249,249,249);
  border-radius:50%;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  background-color:rgba(0,0,0,0.4);
  span{
    color: rgb(249,249,249);
    font-size:30px;
    font-weight:bold;
  }
`
const Trailerbtn = styled(Playbtn)`
  background-color:rgba(0,0,0,0.3);
  span{
    color:rgb(249,249,249);
  }
`
const Groupbtn = styled(Addbtn)`
  background-color:rgba(0,0,0,0.8);
`;

const Description = styled.div`
  margin-top:1rem;
  font-size:15px;
  max-width:690px;
  word-spacing:1.5px;
  @media screen and (max-width:360px){
    text-align:justify;
  }

`
const Genre = styled.div`
  font-size:12px;
  margin-top:1rem; 
  word-spacing:3px;
`

const Title = styled.h3`
  margin-top:1rem; 
`
