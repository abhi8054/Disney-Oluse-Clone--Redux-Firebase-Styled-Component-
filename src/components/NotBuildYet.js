import React from 'react'
import styled from 'styled-components'

function NotBuildYet() {
  return (
    <ErrorWrapper>
        <h1> Not Build Yet</h1>
        <h1>Work in Progress </h1>
        <h2>Please Go BacK .....</h2>
    </ErrorWrapper>
  )
}

export default NotBuildYet

const ErrorWrapper = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:black;
    opacity:0.7;
    flex-direction:column;
    gap:2rem;
    h2{
        color:white;
        animation-name:error;
        animation-duration:2s;
        animation-iteration-count:infinite;
    }
    h1{
        color:white;
        // animation-name:error404;
        // animation-duration:2s;
    }

    @media screen and (max-width:500px){
        h1{
            font-size: 1.5rem;
        }
    }
`