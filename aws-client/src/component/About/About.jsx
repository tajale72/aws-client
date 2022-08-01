import Navbar from '../Navbar/Navbar'
//import react from 'react';
import './About.css'
import bakery_home from '../images/romitpic.jpg';

function About() {
    const skills = ["Go ", "ReactJS ", "MongoDB ", "AWS ","Git "]
    return (
        <>
        <div className="about">
             <Navbar />
        </div>
        <div class="about-section">
            <h1>About Us</h1>
            <p>I am currently working as software developer.</p>
            <p>I inted to design and develop great responsive applications using react,golang and mongodb.</p>
            <p>This website is focused on buying bakery products.</p>
        </div>
        <h2 className="aboutus-our-team">Our Team</h2>
        <div className="row">
            <div className="column">
                <div className="card">
                    <img src={bakery_home} alt="name" className="img-car"/>
                    <div className="container">
                    <h2>Romit Tajale</h2>
                    <p class="title">CEO & Founder</p>
                     <p>Software Developer</p>
                        <p>Skills:{skills}</p>
                     <p>romit.tajale04@gmail.com</p>
                    <p><button class="button">Contact</button></p>

                    </div>

                </div>
            </div>
            
            <div className="column">
                <div className="card">
                    <img src={bakery_home} alt="name" className="img-car"/>
                    <div className="container">
                    <h2>Romit Tajale</h2>
                    <p class="title">CEO & Founder</p>
                     <p>Software Developer</p>
                        <p>Skills:{skills}</p>
                     <p>romit.tajale04@gmail.com</p>
                    <p><button class="button">Contact</button></p>

                    </div>

                </div>
            </div>
            <div className="column">
                <div className="card">
                    <img src={bakery_home} alt="name" className="img-car"/>
                    <div className="container">
                    <h2>Romit Tajale</h2>
                    <p class="title">CEO & Founder</p>
                     <p>Software Developer</p>
                        <p>Skills:{skills}</p>
                     <p>romit.tajale04@gmail.com</p>
                    <p><button class="button">Contact</button></p>

                    </div>

                </div>
            </div>

        </div>
  
        
        </>
    )
}

export default About