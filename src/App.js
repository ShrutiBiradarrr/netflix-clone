
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
        <Row title='UpComing' fetchURL={requests.requestsUpComing}/>
        <Row title='Popular' fetchURL={requests.requestsPopular}/>
        <Row title='Top Rated' fetchURL={requests.requestsTopRated}/>
        <Row title='Trending' fetchURL={requests.requestsTrending}/>
        <Row title='Horror' fetchURL={requests.requestsHorror}/>

 
      </>
    )
  
}

export default App;
