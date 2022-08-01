import Navbar from '../Navbar/Navbar'
import './Home.css';
import bakery_home from '../images/bakery_home.jpeg';
import React from 'react';
import ReactPlayer from 'react-player'


function Home() {
    return (
        <div className="home">
             <Navbar />
             <div className="video-player">
             <ReactPlayer width='100%' url='https://www.youtube.com/watch?v=XNXuwrXFHRs' />
             </div>
             <img src={bakery_home} alt="name" className="img-car"/>
        </div>
    )
}

export default Home