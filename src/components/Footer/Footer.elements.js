import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export const FooterLogoImg = styled.img`
  width: 100%;
  height: 30px;
  margin: 15px;

  @media screen and (max-width: 820px) {
    height: 30px;
    position: relative;
    top: -80px;
    
  }
`;

export const FooterLabel = styled.label`
  font-size: 14px;
  margin-right: auto;
  margin-bottom: 9px;
`

export const FooterContainer = styled.div`
  background-color: #F1F1F1;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  padding-top: 50px;

  @media screen and (max-width: 576px){
    display: block;
  }
`;

export const FooterRow = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  margin: 0;

  @media screen and (max-width: 576px){
    display: block;
  } 
`

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;
  padding: 24px;
  color: #000;
  background-color: #fff;
  padding-left: 100px;

  @media screen and (max-width: 576px){
    padding-left: 20px;
    align-self: center;
  
  }
  
  `

export const FooterSubHeading = styled.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  margin-bottom: 35px;
  font-size: 24px;
  align-self: flex-start;
  margin-top: 0px;
  font-size: 15px;

  @media screen and (max-width: 576px){
    margin-top: 0;

  }
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 15px;
  text-align: start;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  margin-right: 10px;
  outline: #0865DE;
  font-size: 14px;
  border: 1px solid #0865DE;

  &::placeholder {
    color: #959595;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin-right: 0px;
    margin: 0 0 16px 0;
  }
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  height: 300px;
  max-width: 1000px;
  background-color: #dedede;
  display: flex;
  justify-content: center;
  margin-top: 0px;
  

  @media screen and (max-width: 820px) {
    padding-top: 32px;
    height: 451px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;


  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  padding-top: 40px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #000;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  left: 50px;
  font-size: 16px;
`;

export const FooterLinkTitleOne = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  left: 0px;
  font-size: 16px;
`;

export const FooterLinkTitleTwo = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  left: -17px;
  font-size: 16px;
`;
export const FooterLinkTitleFour = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  left: 85px;
  font-size: 16px;
`;

export const FooterLinkTitleThree = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  left: 44px;
  font-size: 16px;
`;

export const FooterLine = styled.span`
  background-color: #fff;
  width: 1px;
  height: 300px;
  left: -20px;
  position: relative;

`
export const FooterLinetwo = styled.span`
  background-color: #fff;
  width: 1px;
  height: 300px;
  left: 23;
  position: relative;

`
export const FooterLinethree = styled.span`
  background-color: #fff;
  width: 1px;
  height: 300px;
  left: 23px;
  position: relative;

`

export const FooterLink = styled(Link)`
  color: #959595;
  text-decoration: none;
  margin-top: 2rem;
 margin-left: 70px;
  text-align: center ;
  align-self: center;
  font-size: 14px;


  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

export const FooterLinkTwo = styled(Link)`
  color: #959595;
  text-decoration: none;
  margin-top: 2rem;
 margin-left: 20px;
  text-align: center ;
  align-self: center;
  font-size: 14px;


  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

export const FooterLinkThree = styled(Link)`
  color: #959595;
  text-decoration: none;
  margin-top: 2rem;
 margin-left: -25px;
  text-align: center ;
  align-self: center;
  font-size: 14px;


  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;
export const FooterLinkFour = styled(Link)`
  color: #959595;
  text-decoration: none;
  margin-top: 2rem;
 margin-left: -75px;
  text-align: center ;
  align-self: center;
  font-size: 14px;


  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;


export const SocialMedia = styled.section`
  
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-top: 0;
  margin-left: 2em;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const WebsiteRights = styled.small`
  color: #000;
  margin-bottom: 16px;
  margin-left: 10em;


  @media screen and (max-width: 820px) {
  margin: 0;
  margin-bottom: 0px;
  margin-top: 80px;
  }
`;

