import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <LoginContainer>
        <MainContainer>
            <Logo1 src="/images/cta-logo-one.svg" />
            <SingUp href='#'>
                Get All There
            </SingUp>
            <Description>
                Get Premier Access to Rage and the Last Dragon for an addition fee with a Disney + subscription. As of03/26/21, the price of Disney +and the Disney Bundle will increase by $1. 
            </Description>
            <Logo2 src="images/cta-logo-two.png" />
        </MainContainer>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`

    height:calc(100vh - 70px);
    width:100%;
    padding:1rem 2rem;
    background:url("/images/login-background.jpg");
    background-size:cover;
    background-position:top;
    background-repeat:no-repeat;
    position:relative;
    isolation:isolate;
    display:flex;
    align-items:center;
    justify-content:center;
    &:before{
        position:absolute;
        content:"";
        top:0;
        bottom:0;
        left:0;
        right:0;
        width:100%;
        height:100%;
        background-color:black;
        z-index:-1;
        opacity:0.4;
    }
`
const Description = styled.p`
    font-size:11px;
    letter-spacing:1.5px;
    text-align:center;
    line-height:1.5;
`
const Logo1 = styled.img`
    // width:90%;
`
const Logo2 = styled.img`
    width:90%;
    margin-top:1rem;
`
const SingUp = styled.a`

    text-decoration:none;
    display:block;
    width:100%;
    color:#f9f9f9;
    background-color:#0063e5;
    text-align:center;
    text-transform:uppercase;
    font-weight:bold;
    padding:17px 0;
    font-size:18px;
    cursor:pointer;
    border-radius:5px;
    letter-spacing:1.5px;
    transition:all 250ms;
    margin:1rem 0;
    &:hover{
        background-color:#0483ee;
    }
`

const MainContainer = styled.div`
    width:70%;
    padding:1.7rem;
    display:flex;
    flex-direction:column;
    align-items:center;

    @media screen and (max-width:800px){
        width:90%;
    }
    @media screen and (max-width:360px){
        width:100%;
        padding:1rem;
    }

`