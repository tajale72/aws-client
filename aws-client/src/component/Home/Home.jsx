import Navbar from '../Navbar/Navbar'
import './Home.css';
import bakery_home from '../images/bakery_home.jpeg';

function Home() {
    return (
        <div className="home">
             <Navbar />
             <img src={bakery_home} alt="name" className="img-car"/>
        </div>
    )
}

export default Home