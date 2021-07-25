import styled from 'styled-components'

export const LaunchContainer = styled.div`
  background-color: #f1f1f1;
  padding-top: 30px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 0px;

  display: -webkit-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 576px){
    display: block;
    padding-right: 0px;
    padding-top: 0px;
    
    width: 70%;
  padding-left: 0px
  }
`;

export const LaunchSection = styled.section`
  background-color: #f1f1f1;
  
` 

export const LaunchHeading = styled.p`
  margin-bottom: 10px;
  padding-top: 80px;
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 5px;
  text-align: center;
`;

export const LaunchCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 275px;
  background-color: #ffffff;
  margin: auto;
  text-align: center;
  
  font-family: arial;
  height: 24em;

  @media screen and (max-width: 576px){
    margin-top: 10px;
  }
`
export const LaunchImg = styled.img`
width: 200px;

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