import React from 'react'
import { HeroVideo, HeroContainer, HeroParagraph } from './Hero.elements';
import SpacexVideo from '../../video/spacexVideo.mp4'
import Navbar from '../../components/Navbar/Navbar'

const Hero = () => {
    return (
        <>
        <Navbar />
        <HeroContainer>
            <HeroVideo autoPlay muted loop>
            <source src={SpacexVideo} type='video/mp4' />
            </HeroVideo>
            <HeroParagraph>
            SMALLSAT RIDESHARE <br />
            PROGRAM
            </HeroParagraph>
        </HeroContainer>
            
        </>
    )
}

export default Hero
