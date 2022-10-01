
import './App.css';
//import Home from './pages/Home';
import React from 'react'
import Navbar from './component/Navbar';
import Main from './component/Main';
import Row from './component/Row';
import requests from './Request';
//import { Route, Router } from 'react-router-dom';
function App()  {
   
 
   
    return (
      <>
        <Navbar />
        <Main />
        <Row rowID='1' title='Netflix Originals' fetchURL={requests.requestsUpComing}/>
        <Row rowID='2' title='Popular' fetchURL={requests.requestsPopular}/>
        <Row rowID='3' title='Top Rated' fetchURL={requests.requestsTopRated}/>
        <Row rowID='4' title='Trending' fetchURL={requests.requestsTrending}/>
        <Row rowID='5' title='Horror' fetchURL={requests.requestsHorror}/>

 
      </>
    )
  
}

export default App;
