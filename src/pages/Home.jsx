import React from 'react'
import Main from '../component/Main'
import Row from '../component/Row'
import requests from '../Request'
function Home() {
    return (
        <>
        <Main />
        <Row title='UpComing' fetchURL={requests.requestsUpComing}/>
        <Row title='Popular' fetchURL={requests.requestsPopular}/>
        <Row title='Top Rated' fetchURL={requests.requestsTopRated}/>
        <Row title='Trending' fetchURL={requests.requestsTrending}/>
        <Row title='Horror' fetchURL={requests.requestsHorror}/>

        </>
    )
}

export default Home
