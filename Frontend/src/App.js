import './App.css';
import React from 'react'
import SideBar from './Components/SideBar Section/SideBar.jsx'
import Body from './Components/Body Section/Body.jsx'
import Movie from './Components/MovieSection/Movie.jsx';
import {Routes, Route} from "react-router-dom"

 const App = () => {
  return (
    <div className='container'>
      <SideBar/>      
      <Routes>
        <Route path='/' element={ <Body/>} />
        <Route path='/movies' element={ <Movie/>} />
      </Routes>
    </div>
  )
}

export default App;
