import React, { Component} from 'react'
import arrow from '../../images/arrow.png'
import { Link } from 'react-router-dom'
import { 
    LaunchSection,
    LaunchCard,
    LaunchContainer,
    LaunchHeading, 
    LaunchParagraphMission,
    LaunchImg, 
    LaunchParagraph, 
    LaunchParagraphOne,
    LaunchArrow,
    LaunchParagraphSpan, 
    LaunchParagraphSpanOne, 
    LaunchParagraphSpanTwo,
} from './Launches.elements'

class Launches extends Component {

    constructor(props) {
        super(props);

        this.state = {
            launches: [],
            launchesLimit: []
        }
    }

    componentDidMount() {
    
        fetch(`https://api.spacexdata.com/v3/launches?limit=8`)
        .then((response) => {
            return response.json()
        })
        .then(resp => this.setState({...this.state, launchesLimit : resp}))
        .then(launches => console.log(launches))

    }

    render() { 
    return (
                <LaunchSection>
                <LaunchHeading>OUR PAST LAUNCHES</LaunchHeading>
            
                <LaunchContainer>
                    { 
                        this.state.launchesLimit.length > 0 &&
                        this.state.launchesLimit.map((l, index) => (
                            <>
                                <LaunchCard data-aos-anchor-easing='ease-in-out' data-aos-delay='50' data-aos="fade-up">
                                <LaunchImg src={ l.links.mission_patch } ></LaunchImg>
                                <LaunchParagraph>
                                <LaunchParagraphMission>{ l.mission_name }</LaunchParagraphMission>
                                <LaunchParagraphSpanOne>{ l.launch_year }</LaunchParagraphSpanOne>
                                <LaunchParagraphSpanTwo>{ l.rocket.rocket_name }</LaunchParagraphSpanTwo>
                                </LaunchParagraph>
                                <LaunchParagraph>{ l.details }</LaunchParagraph>
                                <LaunchParagraphSpan >
                                    <LaunchArrow src={arrow} />
                            
                                <LaunchParagraphOne href="https://en.wikipedia.org/wiki/DemoSat">Go to Wikipedia Page</LaunchParagraphOne>
                        
                                </LaunchParagraphSpan>
                                </LaunchCard>
                            
                            </>
                        ))
                    }
                    </LaunchContainer>
                    
        </LaunchSection>

    )
    }
}

export default Launches
