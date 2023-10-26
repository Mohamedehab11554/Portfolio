import React from "react";
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import './styles.scss';
import {AiFillInstagram} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

const Home = () => {

    const navigate = useNavigate();

    const handleNavigateToContactMePage = () => {

        navigate('/contact')
    }




    return (
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1>
                    Hello, I'm Mohamed 
                    <br />
                    Front End Developer
                </h1>

            </div>
            <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: 'translateY(550px)'
                }}

                end={{
                    transform: 'translatex(0px)'
                }}
            >
                <div className="home__contact-me">
                    <button onClick={handleNavigateToContactMePage}>Hire Me</button>
                    <a href="https://www.facebook.com/" target="_blank"><button>Download CV</button></a>
                </div>
                <div className="home__icon-me">
                <a href="https://www.instagram.com/">
                    {<AiFillInstagram size={55}/>}
                </a>
                <a href="https://www.facebook.com/">
                    {<BsFacebook size={54}/>}
                </a>
                <a href="https://github.com/" target="_blank">
                    {<BsGithub size={55}/>}
                </a>
                </div>
            </Animate>
        </section>
    );
};
export default Home;