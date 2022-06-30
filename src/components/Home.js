import React, { useEffect } from 'react'
import styled from 'styled-components'
import Carousel from './Carousel'
import TrendingMovies from './TrendingMovies'
import HollywoodMovies from "./HollywoodMovies"
import PopularMovies from "./PopularMovies"
import OriginalMovies from "./OriginalMovies"
import NewToMovies from './NewToMovies'
import Viewers from './Viewers'
import {useDispatch} from "react-redux"
import {addMovie} from "../Redux/Slicers/movieSlice"
import db from '../firebase'
import Footer from './Footer'

function Home() {

  const dispatch = useDispatch()

  useEffect(()=>{
    db.collection("movies").onSnapshot(res =>{
      const tempData = res.docs.map(value =>{
        return (
          { 
            id:value.id,
            data:value._delegate._document.data.value.mapValue.fields
          }
        )
      })
      dispatch(addMovie(tempData))
    })
  },[])

  return (
    <Container>
      <Carousel />
      <Viewers />
      <TrendingMovies />
      <PopularMovies />
      <NewToMovies />
      <HollywoodMovies />
      <OriginalMovies />
      <Footer />
    </Container>
  )
}

export default Home

const Container = styled.div`
  overflow-x:hidden;
  min-height:calc(100vh - 70px);
  padding:0 2rem;
  width:100%;
  position:relative;
  background-color:#090b13;
  isolation:isolate;
  &:before{
    content:"";
    position:absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    background:url("/images/home-background.png");
    background-position:center center;
    background-size:cover;
    background-attachment:fixed;
    background-repeat:no-repeat;
    z-index:-1
  }
  @media screen and (max-width:900px){
    padding:0 1.5rem;
  }
`
