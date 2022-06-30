import React from 'react'
import Home from "./components/Home"
import Header from './components/Header'
import DetailComp from './components/DetailComp'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './components/Login'
import ErrorPage from "./components/ErrorPage"
import NotBuildYet from "./components/NotBuildYet"


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details/:id" element={<DetailComp />} />
        <Route path="/notbuild" element={<NotBuildYet />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App