import styled from 'styled-components'

export const LaunchContainer = styled.div`
  background-color: #f1f1f1;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 55px;
  padding: 80px;


  @media screen and (max-width: 375px){
   max-width: 66%;
  }

  @media screen and (max-width: 375px){
   max-width: 71%;
  }

  @media screen and (max-width: 576px){
    display: block;
    padding-right: 10px;
    padding-top: 0px;
    width: 70%;
    padding-left: 10px;
  }

  @media screen and (max-width: 768px){
    grid-gap: 0px;
    padding: 0px;

  }
`;

export const LaunchSection = styled.section`
  background-color: #f1f1f1;
  
` 

export const LaunchHeading = styled.p`
  margin-bottom: 10px;
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 5px;
  text-align: center;

 
`;

export const LaunchCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 275px;
  background-color: #ffffff;
  text-align: center;
  position: relative;
  font-family: arial;
  height: 30em;

  @media screen and (max-width: 375px){
    
    left: 53px !important;
  }

  @media screen and (max-width: 576px){
    margin-top: 2em;
    left: 70px;
    max-width: 269px !important;
  }

  @media screen and (max-width: 768px){
    max-width: 187px;
  }
`
export const LaunchImg = styled.img`
width: 200px;

@media screen and (max-width: 768px){
    max-width: 150px

  }

`

export const LaunchParagraph = styled.p`
  margin-top: 20px;
  width: 85%;
  font-size: 14px;
  display: flex;
  text-align: left;
  font-weight: 100;
  padding-left: 25px;
`;

export const LaunchParagraphOne = styled.p`
  margin-top: 20px;
  margin-left: 10px;
  width: 85%;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  padding-left: 25px;

  @media screen and (max-width: 768px){
    font-size: 10px;
    margin-top: 23px;

  }
`;
export const LaunchLink = styled.a`
  /* margin-top: 20px; */
  /* top: 20px;
  margin-left: 10px;
  width: 85%;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  padding-left: 25px; */


  &:hover {
    
  }
`;

export const LaunchParagraphMission = styled.p`
  margin-top: 20px;
  margin-left: 10px;
  width: 85%;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  /* padding-left: 25px; */
`;

export const ArrowDiv = styled.div`
display: flex;
`

export const LaunchParagraphSpan = styled.div`
  margin-top: -10px;
  margin-bottom: 15px;
  width: 85%;
  font-size: 14px;
  text-align: left;
  padding-left: 25px;
  position: absolute;
  bottom: 0;
`;
export const LaunchParagraphSpanOne = styled.span`
  margin-top: 20px;
  width: 85%;
  font-size: 12px;
  font-weight: 100;
  text-align: left;
  padding-left: 25px;
  line-height: 20px;
`;
export const LaunchParagraphSpanTwo = styled.span`
  margin-top: 20px;
  color: #959595;
  width: 85%;
  font-size: 12px;
  font-weight: 100;
  text-align: left;
  padding-left: 25px;
`;

export const LaunchArrow = styled.img`
    margin-bottom: -45px;
`

export const LaunchSubContainer = styled.div`
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LaunchSubContainerRow = styled.div`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
`;