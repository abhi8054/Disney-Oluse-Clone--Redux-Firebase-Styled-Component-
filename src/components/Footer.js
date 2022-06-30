import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    <FooterContainer>
        <Details>
            <Head>
                <span>About Disney +</span>
                <span>Terms Of Use</span>
                <span>Privacy Policy</span>
                <span>FAQ</span>
                <span>Feedback</span>
                <span>Careers</span>   
            </Head>
            <p>
                © 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.
            </p>
        </Details>
        <Connect>
            <p>Connect with us : </p>
            <ImgWrapper>
                <Fb>
                    <img src='/images/fb_preview_rev_1.png' />
                </Fb>
                <Twitter>
                    <img src='/images/twitter_preview_rev_1.png' />
                </Twitter>
                <Insta>
                    <img src='/images/insta_preview_rev_1.png' />
                </Insta>
            </ImgWrapper>
        </Connect>
    </FooterContainer>
  )
}
export default Footer
// #1f80e0
const FooterContainer =styled.div`
    margin:4rem 0 2rem 0;
    display:flex;
    justify-content:space-between;
    font-size:0.8rem;
    font-weight:normal;
    text-align:justify;
    line-height:2;

    @media screen and (max-width:790px){
        flex-direction:column;
        gap:1rem;
    }

`
const Details =styled.div`
    width:70%;
    p{
        margin-top:1rem;
    }
    @media screen and (max-width:790px){
        width:100%;
    }
`
const Twitter =styled.div`
    width:50px;
    height:48px;
    display:flex;
    align-items:center;
    img{
        width:100%;
        height:86%;
        cursor:pointer;
    }

`

const Fb =styled.div`
    width:50px;
    height:50px;
    margin-left:-5px;
    img{
        width:100%;
        height:100%;
        cursor:pointer;
    }
    @media screen and (max-width:990px){
        margin-left:0;
    }
`


const Connect =styled.div`


`
const Insta = styled.div`
    width:50px;
    height:50px;
    margin-left:-5px;
    img{
        width:100%;
        height:100%;
        cursor:pointer;
    }
    @media screen and (max-width:990px){
        margin-left:0;
    }

`
const ImgWrapper = styled.div`
    display:flex;
    gap:0.5rem;
    margin-top:1rem;

    @media screen and (max-width:990px){
        gap:1rem;
    }

`

const Head = styled.div`
    display:flex;
    justify-content:space-between;
    gap:1.2rem;

    span{
        cursor:pointer;

        &:hover{
            color:#1f80e0
        }
    }
    @media screen and (max-width:565px){
        flex-direction:column;
        gap:0;
    }

`
