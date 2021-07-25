import React from 'react';

import { 
    DedicatedContainer,
    DedicatedHeading,
    DedicatedParagraph,
    DedicatedSubContainer,
    DedicatedSubheading,
    DedicatedSubContainerRow
} from './Dedicated.elements'

const dedicated = () => {
    return (
        <DedicatedContainer>
            <>
                <DedicatedHeading data-aos="fade-up">
                DEDICATED ESPA CLASS <br />
                MISSIONS AS LOW AS $1M
                </DedicatedHeading>
            </>
            <DedicatedSubContainerRow>
            <DedicatedSubContainer data-aos="fade-left">
                <DedicatedSubheading >
                    THE PROGRAM
                </DedicatedSubheading>
                
                <DedicatedParagraph  >
                    SpaceX’s SmallSat Rideshare Program will provide small satellite operators with 
                    regularly scheduled, dedicated Falcon 9 rideshare missions to sun 
                    synchronous orbit (SSO) for ESPA class payloads for as low as $1M per mission,
                    which includes up to 200 kg of payload mass.
                </DedicatedParagraph>
                
            </DedicatedSubContainer >
            <DedicatedSubContainer data-aos="fade-right">
                <DedicatedSubheading>
                    PAYLOADS
                </DedicatedSubheading>
                <DedicatedParagraph>
                For payloads who run into development or production challenges leading up to launch, 
                SpaceX will allow them to apply 100% of monies
                paid towards the cost of rebooking on a subsequent mission, subject to a 10% rebooking fee.
                </DedicatedParagraph>
                
            </DedicatedSubContainer>
            </DedicatedSubContainerRow>
           
        </DedicatedContainer>
    )
}

export default dedicated
