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
    LaunchLink,
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
    
        fetch(`https://api.spacexdata.com/v3/launches?limit=1`)
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
                <LaunchCard data-aos-anchor-easing='ease-in-out' data-aos-delay='50' data-aos="fade-up">

                    { 
                        this.state.launchesLimit.length > 0 &&
                        this.state.launchesLimit.map((l, index) => (
                            <LaunchImg src={ l.links.mission_patch } ></LaunchImg>
                        ))
                    }
                
                    <LaunchParagraph>
                    
                    
                    { 
                        this.state.launchesLimit.length > 0 &&
                        this.state.launchesLimit.map((l, index) => (
                            <LaunchParagraphMission>{ l.mission_name }</LaunchParagraphMission>
                        ))
                    }
                    { 
                        this.state.launchesLimit.length > 0 &&
                        this.state.launchesLimit.map((l, index) => (
                            <LaunchParagraphSpanOne>{ l.launch_year }</LaunchParagraphSpanOne>
                        ))
                    }

                    { 
                        this.state.launchesLimit.length > 0 &&
                        this.state.launchesLimit.map((l, index) => (
                            <LaunchParagraphSpanTwo>{ l.rocket.rocket_name }</LaunchParagraphSpanTwo>
                        ))
                    }
                    
                    </LaunchParagraph>
                    { 
                        this.state.launchesLimit.length > 0 &&
                        this.state.launchesLimit.map((l, index) => (
                            <LaunchParagraph>{ l.details }</LaunchParagraph>
                        ))
                    }

                    <LaunchParagraphSpan >
                        <LaunchArrow src={arrow} />
                        
                            <LaunchLink href="https://en.wikipedia.org/wiki/DemoSat">Go to Wikipedia Page</LaunchLink>
                       
                    </LaunchParagraphSpan>
                </LaunchCard>
                
                <LaunchCard data-aos-anchor-easing='ease-in-out' data-aos-delay='50' data-aos="fade-up">

                    { 
                        this.state.launchesLimit.length > 0 &&
                        this.state.launchesLimit.map((l, index) => (
                            <LaunchImg src={ l.links.mission_patch } ></LaunchImg>
                        ))
                    }
                
                    <LaunchParagraph>
                    
                    
                    { 
                        this.state.launchesLimit.length > 0 &&
                        this.state.launchesLimit.map((l, index) => (
                            <LaunchParagraphMission>{ l.mission_name }</LaunchParagraphMission>
                        ))
                    }
                    { 
                        this.state.launchesLimit.length > 0 &&
                        this.state.launchesLimit.map((l, index) => (
                            <LaunchParagraphSpanOne>{ l.launch_year }</LaunchParagraphSpanOne>
                        ))
                    }

                    { 
                        this.state.launchesLimit.length > 0 &&
                        this.state.launchesLimit.map((l, index) => (
                            <LaunchParagraphSpanTwo>{ l.rocket.rocket_name }</LaunchParagraphSpanTwo>
                        ))
                    }
                    
                    </LaunchParagraph>
                    { 
                        this.state.launchesLimit.length > 0 &&
                        this.state.launchesLimit.map((l, index) => (
                            <LaunchParagraph>{ l.details }</LaunchParagraph>
                        ))
                    }

                    <LaunchParagraphSpan >
                        <LaunchArrow src={arrow} />
                        <LaunchParagraphOne>
                            <a href="https://en.wikipedia.org/wiki/DemoSat">Go to Wikipedia Page</a>
                        </LaunchParagraphOne>
                    </LaunchParagraphSpan>
                </LaunchCard>
             
                <LaunchCard data-aos-anchor-easing='ease-in-out' data-aos-delay='50' data-aos="fade-up">

                    { 
                        this.state.launchesLimit.length > 0 &&
                        this.state.launchesLimit.map((l, index) => (
                            <LaunchImg src={ l.links.mission_patch } ></LaunchImg>
                        ))
                    }

                    <LaunchParagraph>


                    { 
                        this.state.launchesLimit.length > 0 &&
                        this.state.launchesLimit.map((l, index) => (
                            <LaunchParagraphMission>{ l.mission_name }</LaunchParagraphMission>
                        ))
                    }
                    { 
                        this.state.launchesLimit.length > 0 &&
                        this.state.launchesLimit.map((l, index) => (
                            <LaunchParagraphSpanOne>{ l.launch_year }</LaunchParagraphSpanOne>
                        ))
                    }

                    { 
                        this.state.launchesLimit.length > 0 &&
                        this.state.launchesLimit.map((l, index) => (
                            <LaunchParagraphSpanTwo>{ l.rocket.rocket_name }</LaunchParagraphSpanTwo>
                        ))
                    }

                    </LaunchParagraph>
                    { 
                        this.state.launchesLimit.length > 0 &&
                        this.state.launchesLimit.map((l, index) => (
                            <LaunchParagraph>{ l.details }</LaunchParagraph>
                        ))
                    }

<LaunchParagraphSpan >
    <LaunchArrow src={arrow} />
    <LaunchParagraphOne>
        <a href="https://en.wikipedia.org/wiki/DemoSat">Go to Wikipedia Page</a>
    </LaunchParagraphOne>
</LaunchParagraphSpan>
</LaunchCard>

                <LaunchCard data-aos-anchor-easing='ease-in-out' data-aos-delay='50' data-aos="fade-up">

                    { 
                        this.state.launchesLimit.length > 0 &&
                        this.state.launchesLimit.map((l, index) => (
                            <LaunchImg src={ l.links.mission_patch } ></LaunchImg>
                        ))
                    }

                    <LaunchParagraph>


                    { 
                        this.state.launchesLimit.length > 0 &&
                        this.state.launchesLimit.map((l, index) => (
                            <LaunchParagraphMission>{ l.mission_name }</LaunchParagraphMission>
                        ))
                    }
                    { 
                        this.state.launchesLimit.length > 0 &&
                        this.state.launchesLimit.map((l, index) => (
                            <LaunchParagraphSpanOne>{ l.launch_year }</LaunchParagraphSpanOne>
                        ))
                    }

                    { 
                        this.state.launchesLimit.length > 0 &&
                        this.state.launchesLimit.map((l, index) => (
                            <LaunchParagraphSpanTwo>{ l.rocket.rocket_name }</LaunchParagraphSpanTwo>
                        ))
                    }

                    </LaunchParagraph>
                    { 
                        this.state.launchesLimit.length > 0 &&
                        this.state.launchesLimit.map((l, index) => (
                            <LaunchParagraph>{ l.details }</LaunchParagraph>
                        ))
                    }

                    <LaunchParagraphSpan >
                        <LaunchArrow src={arrow} />
                        <LaunchParagraphOne>
                            <a href="https://en.wikipedia.org/wiki/DemoSat">Go to Wikipedia Page</a>
                        </LaunchParagraphOne>
                    </LaunchParagraphSpan>
                </LaunchCard>
     
            </LaunchContainer>
            
            <LaunchContainer>
                <LaunchCard   data-aos-anchor-easing='ease-in-out' data-aos-delay='50' data-aos="fade-down">

{ 
    this.state.launchesLimit.length > 0 &&
    this.state.launchesLimit.map((l, index) => (
        <LaunchImg src={ l.links.mission_patch } ></LaunchImg>
    ))
}

<LaunchParagraph>


{ 
    this.state.launchesLimit.length > 0 &&
    this.state.launchesLimit.map((l, index) => (
        <LaunchParagraphMission>{ l.mission_name }</LaunchParagraphMission>
    ))
}
{ 
    this.state.launchesLimit.length > 0 &&
    this.state.launchesLimit.map((l, index) => (
        <LaunchParagraphSpanOne>{ l.launch_year }</LaunchParagraphSpanOne>
    ))
}

{ 
    this.state.launchesLimit.length > 0 &&
    this.state.launchesLimit.map((l, index) => (
        <LaunchParagraphSpanTwo>{ l.rocket.rocket_name }</LaunchParagraphSpanTwo>
    ))
}

</LaunchParagraph>
{ 
    this.state.launchesLimit.length > 0 &&
    this.state.launchesLimit.map((l, index) => (
        <LaunchParagraph>{ l.details }</LaunchParagraph>
    ))
}

<LaunchParagraphSpan >
    <LaunchArrow src={arrow} />
    <LaunchParagraphOne>
        <a href="https://en.wikipedia.org/wiki/DemoSat">Go to Wikipedia Page</a>
    </LaunchParagraphOne>
</LaunchParagraphSpan>
</LaunchCard>

                <LaunchCard    data-aos-anchor-easing='ease-in-out' data-aos-delay='50' data-aos="fade-down">

{ 
    this.state.launchesLimit.length > 0 &&
    this.state.launchesLimit.map((l, index) => (
        <LaunchImg src={ l.links.mission_patch } ></LaunchImg>
    ))
}

<LaunchParagraph>


{ 
    this.state.launchesLimit.length > 0 &&
    this.state.launchesLimit.map((l, index) => (
        <LaunchParagraphMission>{ l.mission_name }</LaunchParagraphMission>
    ))
}
{ 
    this.state.launchesLimit.length > 0 &&
    this.state.launchesLimit.map((l, index) => (
        <LaunchParagraphSpanOne>{ l.launch_year }</LaunchParagraphSpanOne>
    ))
}

{ 
    this.state.launchesLimit.length > 0 &&
    this.state.launchesLimit.map((l, index) => (
        <LaunchParagraphSpanTwo>{ l.rocket.rocket_name }</LaunchParagraphSpanTwo>
    ))
}

</LaunchParagraph>
{ 
    this.state.launchesLimit.length > 0 &&
    this.state.launchesLimit.map((l, index) => (
        <LaunchParagraph>{ l.details }</LaunchParagraph>
    ))
}

<LaunchParagraphSpan >
    <LaunchArrow src={arrow} />
    <LaunchParagraphOne>
        <a href="https://en.wikipedia.org/wiki/DemoSat">Go to Wikipedia Page</a>
    </LaunchParagraphOne>
</LaunchParagraphSpan>
</LaunchCard>

                <LaunchCard   data-aos-anchor-easing='ease-in-out'  data-aos-delay='50' data-aos="fade-down">

{ 
    this.state.launchesLimit.length > 0 &&
    this.state.launchesLimit.map((l, index) => (
        <LaunchImg src={ l.links.mission_patch } ></LaunchImg>
    ))
}

<LaunchParagraph>


{ 
    this.state.launchesLimit.length > 0 &&
    this.state.launchesLimit.map((l, index) => (
        <LaunchParagraphMission>{ l.mission_name }</LaunchParagraphMission>
    ))
}
{ 
    this.state.launchesLimit.length > 0 &&
    this.state.launchesLimit.map((l, index) => (
        <LaunchParagraphSpanOne>{ l.launch_year }</LaunchParagraphSpanOne>
    ))
}

{ 
    this.state.launchesLimit.length > 0 &&
    this.state.launchesLimit.map((l, index) => (
        <LaunchParagraphSpanTwo>{ l.rocket.rocket_name }</LaunchParagraphSpanTwo>
    ))
}

</LaunchParagraph>
{ 
    this.state.launchesLimit.length > 0 &&
    this.state.launchesLimit.map((l, index) => (
        <LaunchParagraph>{ l.details }</LaunchParagraph>
    ))
}

<LaunchParagraphSpan >
<LaunchArrow src={arrow} />
<LaunchParagraphOne>
<a href="https://en.wikipedia.org/wiki/DemoSat">Go to Wikipedia Page</a>
</LaunchParagraphOne>
</LaunchParagraphSpan>
</LaunchCard>

                <LaunchCard   data-aos-anchor-easing='ease-in-out'   data-aos-delay='100'data-aos="fade-down">

{ 
    this.state.launchesLimit.length > 0 &&
    this.state.launchesLimit.map((l, index) => (
        <LaunchImg src={ l.links.mission_patch } ></LaunchImg>
    ))
}

<LaunchParagraph>


{ 
    this.state.launchesLimit.length > 0 &&
    this.state.launchesLimit.map((l, index) => (
        <LaunchParagraphMission>{ l.mission_name }</LaunchParagraphMission>
    ))
}
{ 
    this.state.launchesLimit.length > 0 &&
    this.state.launchesLimit.map((l, index) => (
        <LaunchParagraphSpanOne>{ l.launch_year }</LaunchParagraphSpanOne>
    ))
}

{ 
    this.state.launchesLimit.length > 0 &&
    this.state.launchesLimit.map((l, index) => (
        <LaunchParagraphSpanTwo>{ l.rocket.rocket_name }</LaunchParagraphSpanTwo>
    ))
}

</LaunchParagraph>
{ 
    this.state.launchesLimit.length > 0 &&
    this.state.launchesLimit.map((l, index) => (
        <LaunchParagraph>{ l.details }</LaunchParagraph>
    ))
}

<LaunchParagraphSpan >
    <LaunchArrow src={arrow} />
    <LaunchParagraphOne>
        <a href="https://en.wikipedia.org/wiki/DemoSat">Go to Wikipedia Page</a>
    </LaunchParagraphOne>
</LaunchParagraphSpan>
</LaunchCard>

         
            </LaunchContainer>
        </LaunchSection>

    )
    }
}

export default Launches
