import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import SingleMealPage from './Pages/SingleMealPage'
import ErrorPage from './Pages/ErrorPage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
  <div>
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element = {<HomePage/>}/>
            <Route path='/about' element = {<AboutPage/>}/>
            <Route path='/meal/:mealId' element = {<SingleMealPage/>}/>
            <Route path='*' element = {<ErrorPage/>}/>
        </Routes>
        <Footer/>
      </Router>
  </div>
      

  )
}

export default App
