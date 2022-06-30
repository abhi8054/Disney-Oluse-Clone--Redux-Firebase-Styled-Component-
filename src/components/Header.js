import React,{useEffect} from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import {auth,GoogleProvider} from "../firebase"
import {login,logout} from "../Redux/Slicers/userSlice"
import {useDispatch,useSelector} from "react-redux"
function Header() {
const navigate = useNavigate()
const dispatch = useDispatch()
const userData = useSelector(allState => allState.user)

    useEffect(()=>{
        auth.onAuthStateChanged(user =>{
            if(user){
                dispatch(login({
                    name:user._delegate.displayName,
                    email:user._delegate.email,
                    photo:user._delegate.photoURL,
                }))
                navigate("/home")
            }else{
                navigate("/")
            }
            
        })
    },[])

    const signout = () =>{
        auth.signOut()
        .then(()=>{
            dispatch(logout())
            navigate("/")
        })
    }

    const loginHandler = () =>{
        auth.signInWithPopup(GoogleProvider)
        .then((result) =>{
            const user = result.user._delegate
            dispatch(login({
                name:user.displayName,
                email:user.email,
                photo:user.photoURL,
            }))
            navigate("/home")
        })
    }

  return ( 
    <Nav>
        <LogoImg src= "/images/logo.svg" />
        {
            userData.email ? 
            <>
        <NavMenu>
            <Link to="/home">
                <img src= "/images/home-icon.svg" />
                <span>Home</span>
            </Link>
            <Link to="/notbuild">
                <img src= "/images/search-icon.svg" />
                <span>Search</span>
            </Link>
            <Link to="/notbuild">
                <img src= "/images/watchlist-icon.svg" />
                <span>Watchlist</span>
            </Link>
            <Link to="/notbuild">
                <img src= "/images/original-icon.svg" />
                <span>Original</span>
            </Link>
            <Link to="/notbuild">
                <img src= "/images/movie-icon.svg" />
                <span>Movies</span>
            </Link>
            <Link to="/notbuild">
                <img src= "/images/series-icon.svg" />
                <span>Series</span>
            </Link>
        </NavMenu>
        <Profile onClick={signout} src={userData.photo} />
        </>
        : 
        <Login onClick={loginHandler}>
            Login
        </Login>
    }
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
    width:100%;
    height:70px;
    background-color:#090b13;
    display:flex;
    align-items:center;
    padding:1.6rem;
    justify-content:space-between;
    @media screen and (max-width:900px){
        justify-content:space-between;
    }
`
const LogoImg = styled.img`
    width:80px
`
const NavMenu = styled.div`
    display:flex;
    align-items;center;
    flex:1;
    margin:0 0.6rem;
    a{
        display:flex;
        align-items:center;
        padding:0 0.8rem;
        cursor:pointer;
        text-decoration:none;
        img{
            width:21px;
        }
        span{
            padding:0 5px;
            letter-spacing:1.5px;
            text-transform:uppercase;
            position:relative;
            font-size:0.9rem;
        }

        span:before{
            content:"";
            position:absolute;
            left:0;
            right:0;
            height:2px;
            background-color:white;
            bottom:-2px;
            transform-origin:center;
            transition:all 300ms;
            transform:scale(0);
        }
        span:hover{
            color:#1f80e0;
        }
        span:hover:before{
                transform:scale(1);
        }
    }

    @media screen and (max-width:900px){
        display:none;
    }

`
const Login = styled.span`
    font-size:18px;
    cursor:pointer;
    border:1px solid rgb(249,249,249);
    padding:0.4rem 1rem;
    letter-spacing:1.2px;
    text-transform:uppercase;
    background-color:black;
    font-weight:bold;
    border-radius:4px;
    &:hover{
        color:black;
        background-color:rgb(249,249,249)
    }


`

const SignIn = styled(Login)``

const Profile = styled.img`
    width:46px;
    height:46px;
    border-radius:50%;
    cursor:pointer;
`
