import React from 'react'
import styled from 'styled-components'
import {useSelector} from "react-redux"
import {useNavigate } from 'react-router-dom'


function PopularMovies() {
  const allMovies = useSelector(allState => allState.movie.movies)

  const nav = useNavigate()
  const detailHandler = (img_id) =>{
    nav("/details/"+img_id)
  }
const filterout = (item) =>{
  if(item.data.type.stringValue == "popular")
    return item
}
const filterMovie = allMovies.filter(filterout)


  return (
    allMovies.length > 0 ? 
    <Content>
      <p>Popular Movies : </p>
      {
      <MoviesContainer>
      {filterMovie.map((val,index) =>(
          <Wrapper key={index}>
          <img onClick={() =>{
              detailHandler(val.id)
            }} src={val.data.CardImg.stringValue}/>
          </Wrapper>
        ))}
      </MoviesContainer>
      }
    </Content>
    :
    <Loading>
      Loading....
    </Loading>
  )
}

export default PopularMovies
const Content = styled.div`
  margin-top:1.5rem;
  p{
    font-size:15px;
  }
`
const MoviesContainer = styled.div`
  margin-top:0;
  display:grid;
  grid-template-columns:repeat(6, minmax(0,1fr));
  grid-gap:10px;
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
  overflow:hidden;
  border-radius:10px;
  box-shadow: rgb(0 0 0 /69%) 0 26px 30px -10px,rgb(0 0 0 /73%) 0 16px 10px -10px;
  transition:all 300ms;

  img{
    width:100%;
    height:100%;
    object-fit:cover;
  }

  &:hover{
    transform:scale(1.05);
    border:3px solid rgb(249,249,249,0.8);
    box-shadow: rgb(0 0 0 /80%) 0 40px 58px -16px,rgb(0 0 0 /72%) 0 30px 22px -10px;
  }

`
const Loading = styled.div`
  color:white;
  width:100%;
  display:flex;
  justify-content:center;
  padding:1rem;
  font-size:2rem;
  margin-top:1rem;

`